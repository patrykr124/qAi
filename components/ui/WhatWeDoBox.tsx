"use client"
import { useRef, useState } from "react";

interface P {
    video: string
    title: string
    classShadow: string,
    titleClass: string
}

export default function WhatWeDoBox({ video, title, classShadow, titleClass }: P) {
    const ref = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [transformStyle, setTransformStyle] = useState('')

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (ref.current && ref.current instanceof HTMLDivElement) {
            const { left, top, width, height } = ref.current.getBoundingClientRect();

            const relativeX = (e.clientX - left) / width;
            const relativeY = (e.clientY - top) / height;
            const tiltX = (relativeX - 0.5) * 10;
            const tiltY = (relativeY - 0.5) * -10;

            const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

            setTransformStyle(newTransform)
        }
    }

    function handleMouseLeave() {
        setTransformStyle('');
        if(videoRef.current){
            videoRef.current.pause();
        }
    }

    function handleVideoPlay() {
        if(videoRef.current){
            videoRef.current.play();
        } 
    }

    return (
        <div ref={ref} onMouseEnter={handleVideoPlay} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle, transition: 'transform 0.2s ease-out' }} className="flex relative rounded-lg overflow-hidden h-full">
            <video ref={videoRef}  loop muted className="w-full h-full object-cover" >
                <source src={`/assets/video/${video}`} type="video/mp4" />
            </video>
            <h3 className={`absolute h3title opacity-0 font-extralight    ${titleClass} z-20`}>{title}</h3>
            <div className={`absolute top-0 left-0 w-full h-full ${classShadow} z-10`}></div>
        </div>
    )
}


