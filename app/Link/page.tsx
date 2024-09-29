import { NextPage } from 'next'
import style from "./page.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import ImageButton from '../components/ImageButton';
import React from 'react';

// needed to change into database to fetch it
const data = [
    {
        category : "SNS",
        info: [
            { title: "VRC",logo: "VRChat", link: "https://vrchat.com/home/user/usr_21abbcba-ea81-4fb3-991c-52a2dc4b3260" },
            { title: "Twitter(VRC)",logo: "Twitter", link: "https://x.com/rorikoron__game" },
            { title: "Twitter(main)",logo: "Twitter", link: "https://x.com/omimi__melonzo" },
        ]
    },{
        category : "商品系",
        info: [
            { title: "Booth",logo: "Booth", link: "https://rorikoron.booth.pm/" },
        ]
    },{
        category : "干し芋",
        info: [
            { title: "Booth", logo: "Booth", link: "https://booth.pm/wish_list_names/poPToaBg" },
            { title: "Amazon", logo: "Amazon", link: "https://www.amazon.co.jp/hz/wishlist/ls/lol?redirect=false"}
        ]
    },{
        category : "その他",
        info: [
            { title: "Pixiv",logo: "Pixiv", link: "https://www.pixiv.net/users/57156713" },
        ]
    },
]
const Page : NextPage = () => {
    return(
        <section className={`${style.section}`}>
            <h1>Link</h1>
            <h2>各種サイトへのリンクです...</h2>

            <main className={`${style.content}`}>

                {
                    data.map((group) => {
                        return(
                        <article key={group.category} className={`${style.group}`}>
                            <h3 className={`${style.group__title}`}>{group.category}</h3>
                            <ul className={`${style.group__link}`}>
                                {group.info.map(({title, logo, link}) => {
                                    const src = `/logo/${logo}.svg`;
                                    const Thumbnail : React.FC = () => {return(<Image src={src} fill={true} alt={`${title}のロゴ画像`} />)};
                                    const Caption : React.FC = () => (<span>{title}</span>);
                                    return(
                                        <Link key={title} href={link} rel="noopener noreferrer" target="_blank">
                                            <ImageButton key={title} Thumbnail={<Thumbnail />} Caption={<Caption />}/>
                                        </Link>
                                    )
                                })}
                            </ul>
                        </article>
                        )
                    })
                }
            </main>
        </section>
    )
}


export default Page;