import style from "./PictureFrame.module.scss";
import Image from 'next/image';
import React, { useState } from 'react';
import { cos } from "three/webgpu";

export interface PictureProps {
    fileName: string;
    path: string;
}

const PictureFrame: React.FC<PictureProps> = ({ fileName, path }) => {
    const [ratio, setRatio] = useState(16/9) // default to 16:9
    return(
    <figure className={`${style.figure}`} style={{aspectRatio: ratio}}>
        <Image src={path} alt={fileName} fill={true} onLoadingComplete={({ naturalWidth, naturalHeight }) => setRatio(naturalWidth / naturalHeight)
      }/>
        <span>{path}</span>
    </figure>
)};

export default PictureFrame;
