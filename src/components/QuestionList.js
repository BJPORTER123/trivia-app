import React from "react";
import Question from "./Question";

const QuestionList = ({questions})=>{
    
    const questionsItems = questions.map((question, index)=>{
        return <Question question={question} key={index} position={index + 1} />
    })

   

    return (
        <>
            {questionsItems}
        </>
    )
}

export default QuestionList;