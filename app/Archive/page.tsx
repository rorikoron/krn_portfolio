"use client"
import { NextPage } from 'next';
import style from './page.module.scss';
import { useEffect, useRef, useState } from 'react';
import PictureList from '../components/PictureList';
import { PictureProps } from '../components/PictureFrame';


const Page: NextPage = () => {
    const [blobs, setBlobs] = useState<PictureProps[]>([]); 

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
        fetchBlobs();
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
                <div ref={scrollContainerRef} className={`${style.wrapper}`} >
                    <PictureList blobs={blobs.filter((_, idx) => idx % 2 === 0) } />
                    <PictureList blobs={blobs.filter((_, idx) => idx % 2 === 1) } />
                </div>
            </main>

            <div className={`${style.modal}`}>

                
            </div>
        </section>
    );
};

export default Page;
