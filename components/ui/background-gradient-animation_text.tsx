"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Text from "../section/Text";
gsap.registerPlugin(ScrollTrigger);

export const BackgroundGradientAnimation_text = ({
    gradientBackgroundStart = "rgb(0, 0, 0)",
    gradientBackgroundEnd = "rgb(0, 0, 0)",
    firstColor = "18, 113, 255",
    secondColor = "221, 74, 255",
    thirdColor = "100, 220, 255",
    fourthColor = "200, 50, 50",
    pointerColor = "0,123, 122",
    size = "80%",
    blendingValue = "hard-light",
    children,
    className,
    interactive = true,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    interactive?: boolean;
    containerClassName?: string;
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null);

    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);

    const localStyle = {
        "--gradient-background-start": gradientBackgroundStart,
        "--gradient-background-end": gradientBackgroundEnd,
        "--first-color": firstColor,
        "--second-color": secondColor,
        "--third-color": thirdColor,
        "--fourth-color": fourthColor,
        "--pointer-color": pointerColor,
        "--size": size,
        "--blending-value": blendingValue,
    } as React.CSSProperties;

    useEffect(() => {
        function move() {
            if (!interactiveRef.current) {
                return;
            }
            setCurX(curX + (tgX - curX) / 20);
            setCurY(curY + (tgY - curY) / 20);
            interactiveRef.current.style.transform = `translate(${Math.round(
                curX
            )}px, ${Math.round(curY)}px)`;
        }

        move();
    }, [tgX, tgY]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);


    return (
        <Text  >

            <div style={localStyle}
                className={cn(
                    "h-screen w-screen absolute overflow-hidden top-0 left-0",
                    containerClassName
                )}
            >   <div className="bg-shadow-top absolute pointer-events-none  top-0 left-0 w-full h-full"></div>
                <div className="bg-shadow-bottom absolute pointer-events-none  bottom-0 right-0 w-full h-full"></div>
             



                    <svg className="hidden">
                        <defs>
                            <filter id="blurMe">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="blur"
                                />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                    <div className={cn("", className)}>{children}</div>


                    <div
                        className={cn(
                            "gradients-container h-full w-full blur-lg -z-20 absolute top-0 left-0",
                            isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
                        )}
                    >
                        <div
                            className={cn(
                                `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
                                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                                `[transform-origin:center_center]`,
                                `animate-first`,
                                `opacity-100`,
                            )}
                        ></div>
                        <div
                            className={cn(
                                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
                                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                                `[transform-origin:calc(50%-400px)]`,
                                `animate-second`,
                                `opacity-100`
                            )}
                        ></div>
                        <div
                            className={cn(
                                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                                `[transform-origin:calc(50%+400px)]`,
                                `animate-third`,
                                `opacity-100`
                            )}
                        ></div>
                        <div
                            className={cn(
                                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                                `[transform-origin:calc(50%-200px)]`,
                                `animate-fourth`,
                                `opacity-70`
                            )}
                        ></div>
                        <div
                            className={cn(
                                `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
                                `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                                `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
                                `animate-fifth`,
                                `opacity-100`,
                            )}
                        ></div>

                        {interactive && (
                            <div
                                ref={interactiveRef}
                                onMouseMove={handleMouseMove}
                                className={cn(
                                    `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
                                    `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
                                    `opacity-70`
                                )}
                            ></div>
                        )}

                    </div>
                
            </div>



        </Text>
    );
};
