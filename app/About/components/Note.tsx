"use client"
import { useState } from "react"
import style from "./Note.module.scss"

type TextAreaProps = {
    defaultText: string,
}
const TextArea = ({defaultText} : TextAreaProps) => {

    const [val, setVal] = useState(defaultText); 

    return(
        
        <div className={`${style.note}`}>
            <textarea className={`${style.note__textarea}`} value={val} onChange={(e) => setVal(e.target.value)}></textarea>
        </div>
    )
}

export default TextArea;
