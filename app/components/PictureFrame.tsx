import style from "./PictureFrame.module.scss";
import Image from 'next/image';
import React, { useState } from 'react';

export interface PictureProps {
    fileName: string;
    path: string;
}

const PictureFrame: React.FC<PictureProps> = ({ fileName, path }) => {
    const [ratio, setRatio] = useState(16/9) // default to 16:9
    const [hasFetched, setHasFetched] = useState<boolean>(false);
    const date = fileName.split('_')[1].replaceAll('-', '/');
    return(
    <figure className={`${style.figure}`} style={{aspectRatio: ratio}} data-fetched={hasFetched}>
        <Image src={path} alt={fileName} fill={true} onLoad={
            (e) => {setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight); setHasFetched(true);}
        }/>
        <figcaption className={`${style.legend}`} >{date}</figcaption>
    </figure>
)};

export default PictureFrame;
