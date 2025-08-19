import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from "../../Assets/data"
import HowToPage from '../HowToPage/HowToPage';

const Quiz = () => {
    let [startQuiz,setStart] = useState(false);
    let [index,setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock,setLock]  = useState(false);
    let [score,setScore] = useState(0);
    let [result,setResult] = useState(false);

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let option_array = [option1,option2,option3,option4];

    const checkAns = (e,ans) => {
        if (lock === false) {
            if (question.ans===ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev=>prev+1);
              }
              else{
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans-1].current.classList.add("correct");
            } 
        }
     
    }

    const next = () =>{
      if (lock===true) {
        if (index === data.length -1) {
            setResult(true);
            return 0;
        }
        setIndex(++index);
        setQuestion(data[index]);
        setLock(false);
        option_array.map((option)=>{
            option.current.classList.remove("wrong");
            option.current.classList.remove("correct");
            return null;
        })
      }
    }

    const start = () =>{
        getData()
        setStart(true)
       }
       async function getData() {
        const url = "https://opentdb.com/api.php?amount=10";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error(error.message);
        }
      }


    const message = () => {
        console.log("In message...")
        let message1 = "Bad Luck!";
        let message2 = "Congratulations!";
        if (score < data.length){
           return message1;
        }
        else {return message2;}
    }

    const reset = () =>
{
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
}
    return(
        <div className="container">
        {startQuiz? <>
            {result?
            <></> : 

        <><h2>{index+1}. {question.question}</h2>
        <hr />
        <ul>
        <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
        <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
         </ul>
         <button onClick={next}>Next</button>
        <div className='index'>{index+1} of {data.length} questions</div></>}
        
        {result?
            <>
            <h1 className='congrats'>{message}</h1>
            <h2>You Scored {score} out of {data.length}</h2>
            <button onClick={reset}>Reset</button></> : 
        <></>}

        </> :
        <div>
          <HowToPage/>
          <button onClick={start}>Start Quiz</button>
        </div>
        }
     </div>
    )
};

export default Quiz;