import React,{useState} from "react";

const Score = ({question})=>{

    const [score,setScore]=useState(0)

    const CountScore =(reply)=>{
        if (reply  === question.correct_answer){
            setScore(score + 1)
        }
    }

    return(
        <>
        </>
    )
}

export default Score