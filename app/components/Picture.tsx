"use client"
import { useState } from "react";
import Image from 'next/image';
import style from './Picture.module.scss'

export type PictureProps = {
    src : string,
    alt : string,
    skeleton: boolean,
    className? : string,
}

const Picture : React.FC<PictureProps> = ({src, alt, skeleton, className}) =>{
    const [fetched, setFetched] = useState<boolean>(false);
    return(
        <div className={`${style.wrapper} ${className}`} data-skeleton={skeleton} data-fetched = {fetched}>
            <Image className={`${style.image}`} src={src} fill={true} alt={alt} onLoadingComplete={() => setFetched(true)}/>
        </div>
    )
}

export default Picture;