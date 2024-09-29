"use client"
import ModelViewer from "../components/ModelViewer"
import ModelSelector, { ItemKeys }from '../components/ModelSelector'
import style from "./page.module.scss"
import { useState } from 'react'
import { NextPage } from "next"


const NotSelectedAssertion : React.FC = () => {
    return(
        <p className={`${style.warning}`}>表示するアイテムを選択して下さい。</p>
    )
}

const Page : NextPage = () => {

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


            <main className={`${style.content}`}>
                    
                <div className={`${style.content__viewer}`}>
                {(
                    
                    keys.serial === '' 
                    ? <NotSelectedAssertion />
                    : <ModelViewer {...keys}/>
            )}
                </div>
                <aside className={`${style.content__models}`}>
                    {
                        itemParams.map((item) => ((
                            <ModelSelector key={item.fileName} {...item} onClickEvent={onClickEvent}/>
                        )))
                    }
                </aside>
            </main>
        </section>
    )
}

export default Page;