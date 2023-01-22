import React,{useState, useEffect} from "react";
import Answers from "./Answers";
import './Question.css'

const Question =({question, position})=>{

    const [isCorrect, setIsCorrect] = useState(null)
    const [timeOutItem, setTimeOutItem] = useState(null);

    useEffect(() => {
        if(isCorrect !== null){
            const timeOutItem = setTimeout(() => {
                setIsCorrect(null);
            }, 1500);
            setTimeOutItem(timeOutItem);
        }

        return () => {
            clearTimeout(timeOutItem);
        }
    }, [isCorrect]);

    
    const checkAnswer =(answer)=>{
        if (answer === question.correct_answer){
            setIsCorrect(true)
        }else{
            setIsCorrect(false)
        }
    }
    const removeAnswer=()=>{
        setIsCorrect(null)
    }
  
    
    return(
        <div className="question">
            <header> <h2 className="question-title">{position}. {question.question}</h2>          
            <b className="difficulty">Difficulty: {question.difficulty}</b></header>
             <div className="answers">
                <Answers question={question} checkAnswer={checkAnswer} removeAnswer={removeAnswer}/>
                <br></br>
                {isCorrect !== null ? <b><p className="statement">{isCorrect ? "Correct!" : "Incorrect...try again :("}</p></b> : null}
            </div>
        </div>
    )
}

export default Question;


