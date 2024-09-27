"use client"
import ModelViewer from "../components/ModelViewer"
import ImageButton, { ItemKeys, ItemValues }from '../components/ImageButton'
import style from "./page.module.scss"
import { useState } from 'react'

export default function (){

    const [keys, setKeys] = useState<ItemKeys>({serial: '', fileName: ''});


    // ここは非同期でexcelなどからデータを引っ張れないか？
    // （ リードオンリーでBoothからスクレイピングするなど（タグで判断））
    const itemParams = [
        { label: "えびへいろー", fileName: "ebihalo", time: "2024/09/24",serial: "6125665"},
        { label: "ふりふりおひげ", fileName: "furifuriohige", time: "2024/09/24", serial: "6044362"},
    ]
    
    const onClickEvent = (object : ItemKeys) => { setKeys(object); };
    return(
        <section>
            <h1>Product</h1>
            <h2>拙いながらBlenderで作った3Dモデルを載せときます...</h2>


            <section className={`${style.diaplayArea}`}>
                <ModelViewer {...keys}/>
                <main className={`${style.main}`}>
                    {
                        itemParams.map((item) => ((
                            <ImageButton key={item.fileName} {...item} onClickEvent={onClickEvent}/>
                        )))
                    }
                </main>
            </section>
        </section>
    )
}