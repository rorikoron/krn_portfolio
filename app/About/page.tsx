import { NextPage } from 'next'
import style from './page.module.scss'
import Note from './components/Note'
import Card from '../components/Card'

const Page : NextPage = () => {

    const defaultText : string = `ろりころん
2023年の11月からVRChatをしている。
普段はフレプラでごろごろしているか、ToNなどのゲームワールドに出現するらしい。
主にまふゆちゃんや自作のななしちゃんを使っているらしい。
`;
    const avatarProps = {
        src: "/images/icon.png",
        alt: "アイコン画像",
    }
    
    return(
        <section>
            <h1>About</h1>
            <h2>誰なんだ君は...</h2>

            <main className={`${style.content}`}>

                <section className={`${style.info}`}>
                    <Card {...avatarProps}/>
                    <aside className={`${style.appendix}`}>
                        <ul className={`${style.appendix__list}`}>
                            <li>日本語</li>
                            <li>English</li>
                            <li>繁體中文</li>
                        </ul>
                    </aside>

                </section>
                <section className={`${style.introduction}`}>
                    <Note defaultText={defaultText}/>
                    <div className={`${style.introduction__content}`}>

                        <p>改変力なし</p>
                        <p>ギミックなし</p>
                        <p>お砂糖なし</p>
                        <p>ろりころん生きていけないよおおお</p>
                    </div>

                </section>
                
            </main>
        </section>
    )
}


export default Page;