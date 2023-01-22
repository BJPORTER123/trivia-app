import React from "react";
import './Title.css'

const Title =({categories, handleSelect})=>{
    return (
        <div className="title-section">
            <header><h1 className="title">Quiz</h1></header>
            <select className="select" onChange={handleSelect}>
                {categories.map((category, index)=>{
                    return(
                        <option className="option" key={index} value={category.url}>{category.name}</option>
                    )
                })}
    
            </select>
        </div>
    )
}

export default Title