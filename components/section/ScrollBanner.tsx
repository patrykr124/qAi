'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollBanner() {

    useEffect(() => {
        const imagesBox = document.querySelectorAll('.scroll-image');
        const imageBox1 = document.querySelectorAll('.scroll-image1');
        const imageBox2 = document.querySelectorAll('.scroll-image2');


        gsap.to(imagesBox, {
            scrollTrigger: {
                trigger: ".scroll-image",
                start: "-100% center", // Punkt początkowy animacji
                end: "100% top", // Punkt końcowy animacji
                scrub: 1, // Smooth scroll
            },
            x: -200,
            ease: "none",
            duration: 1.5,
        }),
            gsap.to(imageBox1, {
                scrollTrigger: {
                    trigger: ".scroll-image",
                    start: "-100% center", // Punkt początkowy animacji
                    end: "200% top", // Punkt końcowy animacji
                    scrub: 2, // Smooth scroll
                },
                x: 200,
                ease: "none",
                duration: 10,
            }),
            gsap.to(imageBox2, {
                scrollTrigger: {
                    trigger: ".scroll-image",
                    start: "-100% center", // Punkt początkowy animacji
                    end: "300% top", // Punkt końcowy animacji
                    scrub: 1, // Smooth scroll
                },
                x: -300,
                ease: "none",
                duration: 1,
            })
    }, [])
    return (
        <div id="scrollBanner" className="h-screen relative overflow-hidden">
            <div className="wrapper">
                <div className="absolute w-[300%] h-[400%] -bottom-[40%] md:bottom-[0%] right-[-24%] bg-shadow-radial z-10"></div>
                {/* <div className="absolute w-[50%] h-[45%] inset-0 bg-shadow-top-huge z-10"></div> */}
                <div className=" absolute mt-28 space-y-6  max-w-screen-md h-[80%] inset-y-0 z-20">
                    <h2>Efficient AI Collaboration for Cybersecurity Optimization
                    </h2>
                    <p>All of the platforms described have in common the use of advanced technologies, including artificial intelligence, to solve complex problems in various industries such as medicine, education, diagnostics or prosthetics.<br></br><br></br>They focus on innovation, accessibility and supporting users by providing tools tailored to their specific needs. Each of these companies operates in the spirits of technological transformation, with an emphasis on improving quality of life, increasing process efficiency and customer data security</p>

                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 scroll-image justify-center ">
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/1.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/2.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/3.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/3.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/2.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/6.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/7.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/8.svg" alt="bg" width={300} height={300} />
                    </div>
                    <div className="flex gap-2 justify-center scroll-image1 ">
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/1.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/2.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/3.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/12.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/11.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/9.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/10.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/9.svg" alt="bg" width={300} height={300} />
                    </div>
                    <div className="flex gap-2 justify-center scroll-image2 ">
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/9.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/9.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/9.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/5.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/15.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/14.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/16.svg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg object-cover" src="/assets/img/banner/12.svg" alt="bg" width={300} height={300} />
                    </div>

                </div>
            </div>
        </div>
    )
}