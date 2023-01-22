import React, {useState, useEffect} from "react";
import QuestionList from "../components/QuestionList";
import Title from "../components/Title";


const MainBox = ({categories}) => {

    const [questions, setQuestions] = useState([]);
    

    const getQuestions =(url)=>{
        fetch(url)
        .then(res => res.json())
        .then(questionList => setQuestions(questionList.results))
        .catch(err => console.error(`Loading Quiz...error:${err}`))
    }

    useEffect(()=> {
        getQuestions(categories[0].url)
    },[categories])
    
    const handleSelect =(evt)=>{
        getQuestions(evt.target.value)
    }
    
    return (
        <>
            <Title categories={categories} handleSelect={handleSelect}/>
            <QuestionList questions={questions}/>
        </>
    )
}

export default MainBox;