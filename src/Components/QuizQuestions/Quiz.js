import React from "react";

class Quiz extends React.Component{

    render() {
        return(
            <div className="quiz">
            <h2 className='question'>question</h2>
            <div className='answer-buttons'>
              <button className='btn'>Answer 1</button>
              <button className='btn'>Answer 1</button>
              <button className='btn'>Answer 1</button>
              <button className='btn'>Answer 1</button>
            </div>
            <div>
             <button className='nxt-btn'>Next</button>
            </div>
          </div>
        )
    }
}

export default Quiz;