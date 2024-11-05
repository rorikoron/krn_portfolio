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
            { title: "VRChat",logo: "vrchat", link: "https://vrchat.com/home/user/usr_21abbcba-ea81-4fb3-991c-52a2dc4b3260" },
            { title: "Twitter(VRC)",logo: "twitter", link: "https://x.com/rorikoron__game" },
            { title: "Twitter(main)",logo: "twitter", link: "https://x.com/omimi__melonzo" },
        ]
    },{
        category : "商品系",
        info: [
            { title: "ころんの売り場",logo: "booth", link: "https://rorikoron.booth.pm/" },
        ]
    },{
        category : "干し芋",
        info: [
            { title: "Booth", logo: "booth", link: "https://booth.pm/wish_list_names/poPToaBg" },
            { title: "Amazon", logo: "amazon", link: "https://www.amazon.co.jp/hz/wishlist/dl/invite/aEWguEj?ref_=wl_share"}
        ]
    },{
        category : "その他",
        info: [
            { title: "Pixiv",logo: "pixiv", link: "https://www.pixiv.net/users/57156713" },
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
                                        <li  key={title}>
                                            <Link href={link} rel="noopener noreferrer" target="_blank">
                                                <ImageButton key={title} Thumbnail={<Thumbnail />} Caption={<Caption />}/>
                                            </Link>
                                        </li>
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