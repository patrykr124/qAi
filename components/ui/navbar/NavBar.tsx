"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "../Button";
gsap.registerPlugin(ScrollTrigger);
export default function NavBar() {
    const [visible, setVisible] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const navRef = useRef(null);
    const navWrappRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleNavScroll = () => {
                const currenScrollY = window.scrollY;
                if (navWrappRef.current) {
                    if (currenScrollY === 0) {
                        setVisible(true);
                        navWrappRef.current.classList.remove("floating-nav");
                    } else if (currenScrollY > lastScroll) {
                        setVisible(false);
                    } else if (currenScrollY < lastScroll) {
                        navWrappRef.current.classList.add("floating-nav");
                        setVisible(true);


                    }
                    setLastScroll(currenScrollY);
                }
            }

            window.addEventListener("scroll", handleNavScroll);

            return () => {
                window.removeEventListener("scroll", handleNavScroll)
            }
        }


    }, [lastScroll]);


    useGSAP(() => {
        if (typeof window !== "undefined") {
            gsap.to(navRef.current, {
                y: visible ? 0 : -100,
                duration: 0.4,
            });
            
        }
    }, [visible]);
    
    useGSAP(() => {
        if (typeof window !== "undefined") {
            gsap.from(".nav", {
                y: -100,
            });
            gsap.to(".nav", {
                y: 0,
                duration: 0.8,
            });
        }
    }, []);


    return (
        <div ref={navRef} className="nav fixed top-2 left-0 right-0 z-[9999]">
            <div ref={navWrappRef} className="wrapper transition-all duration-500 flex items-center h-20">
                <div className="flex w-full justify-between items-center">
                    <div className="flex items-center gap-8">
                        <div className="logo flex items-center">
                            <Image src="/assets/img/logo4.svg" alt="logo" width={120} height={120} />

                        </div>
                    </div>
                    <div className="items_Left">
                        <ul className="flex  gap-6 text-md  ">
                            <li>
                                <Button href="/">What we do</Button>
                            </li>
                            <li>
                                <Button href="/">multiagentAI</Button>
                            </li>
                            <li>
                                <Button href="/">NeuralHub</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="items_right flex justify-center items-center ">
                        <Button href={"/contact"}>Contact us</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}