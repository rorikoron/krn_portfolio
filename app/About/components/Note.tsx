"use client"
import { useState } from "react"
import style from "./Note.module.scss"

type TextAreaProps = {
    defaultText: string,
}
const TextArea = ({defaultText} : TextAreaProps) => {

    const [val, setVal] = useState<string>(""); 
    const wait = 40;
    setTimeout(() => {
        if(val.length != defaultText.length){
            setVal(defaultText.substring(0, val.length+1));
        }
    }, wait);

    return(
        
        <div className={`${style.note}`}>
            <span className={`${style.note__textarea}`} >{val}</span>
        </div>
    )
}

export default TextArea;
