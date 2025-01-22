import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import ScrollButton from "@/components/ui/ScrollButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export default function Header() {
    useGSAP(() => {
        gsap.from(".word", {
            y: 100,
            opacity: 0,
            stagger: 0.6,
            duration: 0.8,
        })
    }, [])
    return (
        <div>
          
                <div className="wrapper">
                    <div className="">
                        <h1 className="text pointer-events-none absolute top-[50%] translate-x-[0%] translate-y-[-50%] z-20  leading-normal">
                            <div className="overflow-hidden">
                                <p className="word text-8xl text-white">WE</p> <br />
                            </div>
                            <div className="overflow-hidden">
                                <p className="word text-8xl text-white">BUILD</p> <br />
                            </div>
                            <div className="overflow-hidden">
                                <p className="word my-16 text-[10rem] font-medium text-white">FUTURE</p>
                            </div>
                        </h1>
                    </div>
                </div>
                <div className="z-20 absolute bottom-10 translate-x-[50%] left-[50%] ">
                    <ScrollButton />
                </div>
        
        </div>
    )
}