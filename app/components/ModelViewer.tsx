"use client"

import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import style from "./ModelViewer.module.scss";
import { GridHelper } from 'three';

import { ItemKeys } from './ImageButton';

const ModelViewer: React.FC<ItemKeys> = ({serial, fileName}) => {
    if(fileName == ""){
         return(
            <div className={`${style.viewer}`}>
                <p>表示するアイテムを選択して下さい。</p>
            </div>
        ) 
    }

    
    const myModel = useLoader(GLTFLoader, `/models/${fileName}.glb`);
    return (
        <div className={`${style.viewer}`}>

            <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 1, 2] }} style={{background: "#FFFFFF", borderRadius: 8}}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} color="FFFFFF" intensity={5000} />
                <primitive object={myModel.scene} />
                <primitive object={new GridHelper()} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default ModelViewer;