"use client"
import ModelViewer from "../components/ModelViewer"
import ImageButton from '../components/ImageButton'
import style from "./page.module.scss"
import { useState } from 'react'

export default function (){

    const [target, setTarget] = useState<string>('');


    // ここは非同期でexcelなどからデータを引っ張れないか？
    // （ リードオンリーでBoothからスクレイピングするなど（タグで判断））
    const itemParams = [
        { label: "えびへいろー", keyword: "ebihalo", time: "2024/09/24",serial: "6125665"},
        { label: "ふりふりおひげ", keyword: "furifuriohige", time: "2024/09/24", serial: "6044362"},
    ]
    
    const onClickEvent = (newItem : string) => { setTarget(newItem) };
    return(
        <section>
            <h1>Product</h1>
            <h2>拙いながらBlenderで作った3Dモデルを載せときます...</h2>


            <section className={`${style.diaplayArea}`}>
                <ModelViewer target={target}/>
                <main className={`${style.main}`}>
                    {
                        itemParams.map((item) => ((
                            <ImageButton {...item} onClickEvent = {onClickEvent}/>
                        )))
                    }
                </main>
            </section>
        </section>
    )
}