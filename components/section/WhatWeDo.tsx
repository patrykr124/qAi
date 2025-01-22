'use client'
import { useGSAP } from "@gsap/react";
import WhatWeDoBox from "../ui/WhatWeDoBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export default function WhatWeDo() {

    useGSAP(() => {
        gsap.to(".box", {
            opacity:1,
            duration: 0.6,
            ease: "power1.inOut",
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".box",
                start: "top 80%",
                toggleActions: "play none none none" 

            }
        }),
        gsap.from(".h3title", {
            y:100,
         
        }
        )
        gsap.to(".h3title", {
            opacity:1,
            y:0,
            duration: 0.8,
         
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".h3title",
                start: "top 95%",
                toggleActions: "play none none none" 

            }
        }
        )
    },[])
    return (
        <div>
            <div className="wrapper">
                <div className="grid md:grid-cols-3 md:gap-10 pt-52">
                    <div className="col-span-2 box opacity-0">
                        <WhatWeDoBox video="video1.mp4" titleClass="bottom-4 left-4 max-w-2xl" title="Narzędzia oparte na modelach językowych" classShadow="bg-gradient-to-tr from-black from-15%  via-transparent via-60%" />
                    </div>
                    <div className="col-span-1 box opacity-0">
                        <WhatWeDoBox video="video2.mp4" titleClass="top-4 left-2" title="Narzędzia oparte na modelach predykcyjnych" classShadow="bg-gradient-to-br from-black from-15%  via-transparent via-60%" />
                    </div>
                </div>


                <div className="grid md:grid-cols-3 md:gap-10 md:pt-10 ">

                    <div className="col-span-1 box opacity-0">
                        <WhatWeDoBox video="video3.mp4" titleClass="bottom-4 left-4" title="Narzędzia oparte na narzędziach ON-PREMISE" classShadow="bg-gradient-to-tr from-black from-15%  via-transparent via-60%" />
                    </div>
                    <div className="col-span-2 box opacity-0">
                        <WhatWeDoBox video="video4.mp4" titleClass="top-4 left-2 w-3/4" title="NARZĘDZIA OPARTE NA MODELACH ON PREMISE" classShadow="bg-gradient-to-br from-black from-15%  via-transparent via-60%" />
                    </div>

                </div>

            </div>
        </div>
    )
}