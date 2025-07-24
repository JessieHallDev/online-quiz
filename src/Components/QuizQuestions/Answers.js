const questions = [{
    question: "Which TV series had the characters of Edina, Patsy and Bubble?"
    answers: [
        { text: "Friends", correct: false},
        { text: "Only Fools and Horses", correct: false},
        { text: "The Office", correct: false},
        { text: "Absolutley Fabulous", correct: true}
     ]
    },
    {
   question: "Which city hosted the first Olympic Games of the modern era in 1896?"
    answers: [
        { text: "Sofia", correct: false},
        { text: "Istanbul", correct: false},
        { text: "Athens", correct: true},
        { text: "Rome", correct: false}
     ]
    },
    {
        question: "What sport do the Green Bay Packers play?"
         answers: [
             { text: "American Football", correct: true},
             { text: "baseball", correct: false},
             { text: "Cricket", correct: false},
             { text: "Basketball", correct: false}
          ]
         },
         {
            question: "Which band was formed by the members of Joy Division after the suicide of their lead singer?"
             answers: [
                 { text: "Talking Heads", correct: false},
                 { text: "Red hot chilli peppers", correct: false},
                 { text: "New Order", correct: true},
                 { text: "Take That", correct: false}
              ]
             }
    ];
const questionElement = document.getElementsByClassName("question");
const answerButton = document.getElementsByClassName("answer-buttons");
const nextButton = document.getElementsByClassName("nxt-btn");

