import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from "@react-three/drei";
import { GridHelper } from 'three';
import style  from './ModelViewer.module.scss'
import { ItemKeys } from './ModelSelector';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import ImageButton from './ImageButton';
const ModelViewer : NextPage<ItemKeys> = ({serial, fileName}) => {
    
    const myModel = useFBX(`/models/${fileName}.fbx`);

    const Thumbnail : React.FC = () => {
        return(
            <Image className={`${style.link__logo}`} src={`/images/ic__booth.svg`} fill={true} alt='Boothのロゴ画像'/>
        )
    }
    const Caption : React.FC = () => { 
        return(
            <span className={`${style.link__legend}`}>Booth</span>
        )
    }
    const clickEvent = () => (null);
    
    return (
        <>
            <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 10, 24] }} style={{background: "#FFFFFF", borderRadius: 8}}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} color="FFFFFF" intensity={5000} />
                <primitive object={myModel} />
                <primitive object={new GridHelper(20)} />
                <OrbitControls />
            </Canvas>
            <Link className={`${style.link}`} href={`https://booth.pm/ja/items/${serial}`}>
                <ImageButton key="booth" Thumbnail={Thumbnail} Caption={Caption} onClickEvent={clickEvent}/>
            </Link>
        </>
    );
};

export default ModelViewer;