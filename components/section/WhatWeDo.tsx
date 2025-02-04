'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import WhatWeDoBox from "../ui/WhatWeDoBox";
gsap.registerPlugin(ScrollTrigger);
export default function WhatWeDo() {

    useGSAP(() => {
        gsap.to(".box", {
            opacity: 1,
            duration: 0.6,
            ease: "power1.inOut",
            y: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".box",
                start: "top 80%",
                toggleActions: "play none none none"

            }
        }),
            gsap.from(".h3title", {
                y: 100,

            }
            ),
        
        gsap.to(".h3title", {
            opacity: 1,
            y: 0,
            duration: 0.8,

            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".h3title",
                start: "top 95%",
                toggleActions: "play none none none"

            }
        }
        )
    }, [])


    const contentData = [
        {

            typingText: "System of multiple autonomous agents working together to solve complex problems. Each agent makes decisions based on goals and data. The technology optimizes processes, automates tasks and supports management in dynamic environments such as logistics, energy or cyber security."
        },
        {
            typingText: "Provides massive computing power to scale real-time operations, accelerate data processing and optimize processes in on-premise and hybrid environments."
        }
        ,
        {
            typingText:"Locally installed IT solution that gives full control over data and systems. Ideal for companies requiring high security, such as the public sector or finance."
        },
        {
            typingText:"Advanced platform that supports innovative companies using AI technologies such as deep learning, natural language processing and computer vision. Tailored to solve complex problems in the medical, education, diagnostics and data analytics sectors, Neural Hub offers access to scalable AI solutions and tools to integrate with existing systems."
        }


    ]



    return (
        <div id="whatwedo">
            <div className="wrapper">
                <div className="md:grid md:grid-cols-3 flex flex-col gap-20 md:gap-10 pt-36 md:pt-42">
                    <div className="col-span-2 box translate-y-20  opacity-0">
                        <WhatWeDoBox typingText={contentData[0].typingText} video="multiagentai.mp4" titleClass="top-20 left-4"  title="MultiAgent AI" classShadow="bg-gradient-to-tr from-black from-1%  via-transparent via-40%" />
                    </div>
                    <div className="col-span-1 box translate-y-20 opacity-0 mb-20 md:mb-0">
                        <WhatWeDoBox typingText={contentData[1].typingText} video="gpu1.mov" titleClass="top-4 left-2" title="GPU" classShadow="bg-gradient-to-br from-black from-1%  via-transparent via-50%" />
                    </div>
                </div>


                <div className="md:grid md:grid-cols-3 flex flex-col  gap-20 md:gap-10  md:pt-10 ">

                    <div className="col-span-1 box translate-y-20 opacity-0">
                        <WhatWeDoBox typingText={contentData[2].typingText} video="on.mp4" titleClass="top-20 left-4" title="On-premise" classShadow="bg-gradient-to-tr from-black from-1%  via-transparent via-10%" />
                    </div>
                    <div className="col-span-2 box translate-y-20 opacity-0">
                        <WhatWeDoBox typingText={contentData[3].typingText} video="neuralhub.mov" titleClass="top-4 left-2 w-3/4" title="NeuralHub" classShadow="bg-gradient-to-br from-black from-15%  via-transparent via-60%" />
                    </div>

                </div>

            </div>
        </div>
    )
}