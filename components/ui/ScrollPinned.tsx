'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Dots from "./Dots";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: '/assets/img/gpu1.png',
        title: 'GPU MeshCloud',
        description: 'GPU Clouds are scalable computing platforms that offer on-demand resources for advanced data processing.\n\nThey streamline AI projects, enabling rapid training of models and deployment of solutions without the need to invest in costly infrastructure.\n\nBy integrating with popular tools, they provide efficiency and flexibility, allowing organizations to optimize processes and accelerate technology projects.',
    },
    {
        image: '/assets/img/paper.png',
        title: 'DocScrapper AI',
        description: "An intelligent document processing tool that automatically extracts key information and anonymises sensitive data.\n\nEnables regulatory compliance, extraction of content from reports and contracts and automatic classification of documents.\n\nIt streamlines data management in finance, administration and cyber security, eliminating human error and speeding up processes.",
    },
    {
        image: '/assets/img/medi.png',
        title: 'Lion AI',
        description: 'Open-source AI platforms support technology development in medicine, research, industry, and the public sector by providing tools for analyzing imaging, diagnostic, and operational data.\n\nThese systems enable effective integration with existing processes, offering scalable solutions tailored to individual needs.\n\nThe innovative approach allows medical organizations, industrial operations, and public institutions to improve the quality of services, optimize processes, and use resources more efficiently.',
    },
    {
        image: '/assets/img/transc.png',
        title: 'Transcription Ai',
        description: 'Intelligent transcription tools enable fast and accurate conversion of speech into text.\n\nThey support legal, education and media in record analysis processes, facilitating documentation and access to information.\n\nBy automating transcription, costs and time consumption are reduced, allowing organizations to manage data and complete key tasks more efficiently.',
    },
    {
        image: '/assets/img/scan.png',
        title: 'BrainScan AI',
        description: ' AI platforms in medical diagnostics support the analysis of scans of the entire body and major organs, with a particular focus on the brain.\n\nAdvanced algorithms that learn from large data sets improve the accuracy of diagnoses, enabling the detection of neurological disorders and other conditions.\n\nAutomated processes speed up decision-making, providing more accurate diagnosis and more effective patient care.',
    },
    {
        image: '/assets/img/cyborg.png',
        title: 'NeuralExt',
        description: 'Mobility and rehabilitation technologies use advanced AI solutions to design medical devices such as prostheses, exoskeletons and bionic implants.\n\nThey offer a cutting-edge approach to improving patients quality of life, enabling greater independence, dexterity and adaptation to daily challenges.\n\nBionic applications support lost or impaired functions, creating a new quality in rehabilitation and therapy.\n\nInnovative systems combine personalization with efficiency, improving the comfort and effectiveness of treatment.',
    },
    {
        image: '/assets/img/ivr1.png',
        title: 'IVR Voice Assistant',
        description: "Advanced voice systems that automatically handle customer inquiries, especially in the medical industry and services that require quick access to information.\n\nThey facilitate appointments, provide details about available services or business hours, eliminating the need to wait for a consultant to call.\n\nWith personalized messages and integration with CRM systems, they provide efficient service and a positive user experience. The solution allows organizations to save time, improve customer service and tailor operations to the specific needs of the industry.",
    },
    {
        image: '/assets/img/beacon1.png',
        title: 'BeaconMesh',
        description: "An advanced microlocation system based on Bluetooth beacon technology that enables precise positioning of users in confined spaces such as airports, shopping malls and hospitals.\n\nWith offline operation, personalized messages and integration with mobile applications, Beacon MS facilitates navigation, improves accessibility and supports the efficiency of large-scale facility management by providing modern location solutions.",
    },

]

export default function ScrollPinned() {
    const [active, setActive] = useState(0);
    const galleryRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            const photos = document.querySelectorAll('.photo');
            const contentBlocks = document.querySelectorAll('.content-block');
            const dots = document.querySelectorAll('.dots');
            const photoDuration = 0.5;
            // Create animation for photos
            gsap.set(photos, { opacity: 0 });
            gsap.set(contentBlocks, { opacity: 0, y: 50 });

            // Create ScrollTrigger
            photos.forEach((photo, index) => {
                ScrollTrigger.create({
                    trigger: photo,
                    start: "top center", // Trigger when the top of the image reaches the center of the viewport
                    end: "bottom center", // End when the bottom of the image leaves the center of the viewport
                    onEnter: () => {

                        setActive(index);
                        // Fade in the current photo and text
                        gsap.to(photo, { opacity: 1, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 1, y: 0, duration: 0.5 });
                        gsap.to(dots, { opacity: 1, duration: `${photoDuration}` })
                    },
                    onLeave: () => {
                        // Fade out the current photo and text when scrolling away
                        gsap.to(photo, { opacity: 0, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 0, y: 20, duration: 0.5 });
                        gsap.to(dots, { opacity: 0, duration: `${photoDuration}` })
                    },
                    onEnterBack: () => {
                        setActive(index);
                        // Handle re-entering the slide from the bottom
                        gsap.to(photo, { opacity: 1, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 1, y: 0, duration: 0.5 });
                        gsap.to(dots, { opacity: 1, duration: `${photoDuration}` })
                    },
                    onLeaveBack: () => {
                        // Handle leaving the slide from the top
                        gsap.to(photo, { opacity: 0, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 0, y: 20, duration: 0.5 });
                        gsap.to(dots, { opacity: 0, duration: `${photoDuration}` })
                    },
                });
            });
        }, galleryRef);

        return () => ctx.revert()
    }, [])

    function scrollToSlide(index: number) {
        const slideElements = document.getElementById(`${index}`);
        if (slideElements) {
            slideElements.scrollIntoView({ behavior: 'smooth' });
            setActive(index);
        }
    }



    return (
        <section id="scrollPinned" ref={galleryRef} className="min-h-screen -mt-[85vh]  ">
            <div className="gallery hidden md:flex ">
                {/* Left scrolling section */}
                <div className="left w-1/2 ml-auto">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            id={`${index}`}
                            className="photo-container h-screen flex items-center justify-end "
                        >
                            <div className="relative overflow-hidden rounded-lg w-[700px] h-[500px] ">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="photo object-cover rounded-lg"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right pinned section */}
                <div className="rightblock w-1/2 h-screen sticky top-0">
                    <div className="h-full relative flex items-center justify-start p-8">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`content-block absolute max-w-2xl space-y-6`}
                            >
                                <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
                                <p className="text-lg quicksand whitespace-pre-line">{slide.description}</p>

                            </div>

                        ))}
                        {/* <Dots active={active} scrollToSlide={scrollToSlide} slides={slides} /> */}
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-col gap-10">
                {slides.map((slide, index) => (
                    <div key={index} className="flex flex-col gap-10">
                        <div className="relative w-full h-[300px]">
                            <Image src={slide.image} sizes="(max-width: 768px) 100vw, 50vw" fill alt={slide.title} className="top object-cover" />
                        </div>
                        <div className="wrapper">
                            <div className="space-y-2">
                                <h2 className="bottom">{slide.title}</h2>
                                <p className="bottom">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>


        </section>
    )
}