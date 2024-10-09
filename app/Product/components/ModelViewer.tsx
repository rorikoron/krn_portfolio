import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from "@react-three/drei";
import style  from './ModelViewer.module.scss'
import { ItemKeys } from './ModelSelector';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import ImageButton from '../../components/ImageButton';

const ModelViewer : NextPage<ItemKeys> = ({serial, fileName}) => {
    const myModel = useFBX(`/models/${fileName}.fbx`);
    const Thumbnail : React.FC = () => {
        return(
            <Image className={`${style.link__logo}`} src={`/logo/booth.svg`} fill={true} alt='Boothのロゴ画像'/>
        )
    }
    const Caption : React.FC = () => { 
        return(
            <span className={`${style.link__legend}`}>Booth</span>
        )
    }
    
    return (
        <>
            <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 10, 24] }} style={{background: "#FFFFFF", borderRadius: 8}}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} color="FFFFFF" intensity={5000} />
                <primitive object={myModel} />
                <OrbitControls />
            </Canvas>
            <Link className={`${style.link}`} href={`https://booth.pm/ja/items/${serial}`} rel="noopener noreferrer" target="_blank">
                <ImageButton key="booth" Thumbnail={<Thumbnail />} Caption={<Caption />} />
            </Link>
        </>
    );
};

export default ModelViewer;