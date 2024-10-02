"use client"
import { NextPage } from 'next';
import style from './page.module.scss';
import { Suspense, useEffect, useRef, useState } from 'react';
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
                <Suspense fallback={<div>Loading...</div>}>
                    <div ref={scrollContainerRef} className={`${style.wrapper}`} >
                        <PictureList blobs={blobs.slice(0, blobs.length/2)} />
                        <PictureList blobs={blobs.slice(blobs.length/2)} />
                    </div>
                </Suspense>
            </main>
        </section>
    );
};

export default Page;
