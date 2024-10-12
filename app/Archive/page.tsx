"use client"
import { NextPage } from 'next';
import style from './page.module.scss';
import { useEffect, useRef, useState } from 'react';
import PictureList from '../components/PictureList';
import { PictureProps } from '../components/PictureFrame';


const Page: NextPage = () => {
    const [blobs, setBlobs] = useState<PictureProps[]>([]); 
    const [listNum, setListNum] = useState<number>(2);

    const changeListNum = () =>{
        const height = window.innerHeight;
        const width = window.innerWidth;

        if(height > 800) setListNum(4);
        else if (height > 700 || width < 460) setListNum(3);
        else setListNum(2);
    }
    const fetchBlobs = async () => {
        try {
            const response = await fetch("/api/blob");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data: PictureProps[] = await response.json();
            setBlobs(data);
            console.log(data);
        } catch (error) {
            console.error("Failed to fetch blobs:", error);
        }
    };
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // fetch window size and set data attribute
        changeListNum();
        window.addEventListener("resize", changeListNum);

        // fetching image datas
        fetchBlobs();

        // scroll setting
        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
            e.preventDefault();

            // Check if scrollContainerRef.current exists before assignment
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft += e.deltaY; // Modify scrollLeft directly
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("wheel", handleWheel);
        }

        return () => {
            window.removeEventListener("resize", changeListNum);
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
        };
    }, []);

        
    return (
        <section>
            <h1>Archive</h1>
            <h2>みんなとのおもいで</h2>

            <main className={`${style.content}`}>
                <div ref={scrollContainerRef} className={`${style.wrapper}`} data-listNum={listNum} >

                {
                    [...Array(listNum)].map((_, num) => (
                        <PictureList key={num} blobs={blobs.filter((_, idx) => idx % (listNum) === (num))} />
                    ))
                }



                </div>
            </main>

            <div className={`${style.modal}`}>

                
            </div>
        </section>
    );
};

export default Page;
