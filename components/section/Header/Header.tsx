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
                    <h1 className="text pointer-events-none absolute top-[60%] md:top-[50%] translate-x-[0%] translate-y-[-50%] z-20  leading-normal">
                        <div className="overflow-hidden">
                            <h1 className="word text-4xl sm:text-[34px] text-white">WE</h1> <br />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="word text-5xl sm:text-[55px] text-white">BUILD</h1> <br />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="word text-6xl sm:text-[144px] text-white">THE</h1> <br />
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="word text-7xl sm:text-[144px]  font-medium text-white">FUTURE</h1>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    )
}