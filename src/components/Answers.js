import React,{useState,useEffect} from "react";
import _ from "lodash"
import './Answers.css'

const Answers = ({question, checkAnswer}) => {
    
    const [shuffleAnswers, setShuffleAnswers] = useState([])
    
    useEffect(()=>{
      setShuffleAnswers(_.shuffle([...question.incorrect_answers, question.correct_answer]))
    },[question])


    const answerItems = shuffleAnswers.map((answer, index) => (
        <button className="answer-buttons"
        key={index}
        onClick={() => checkAnswer(answer)}
        >{answer}</button>
    ));
    
    return (
        <>
            {answerItems}
        </>
    )
}

export default Answers


    


