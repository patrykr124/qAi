import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin";
import { use, useEffect, useRef } from "react";

interface Props {
    children: string | undefined,
    hoverTyping: boolean
}

gsap.registerPlugin(TextPlugin);

export default function TypingText({ children,hoverTyping }: Props) {
    const textRef = useRef<HTMLDivElement>(null);
    const timeLineRef = useRef<gsap.core.Timeline | null>(null);
   
    useEffect(() => {
        if(!textRef.current) return
        textRef.current.textContent = '';
        const tl = gsap.timeline({
            paused:true
        })

        timeLineRef.current = tl;

        tl.to(textRef.current, {
            text: children,
            duration: 1.8,
            ease: "none",
        })

        return () => {
            tl.kill();
        }


    }, [])

    useEffect(() => {
        if(!timeLineRef.current || !textRef.current) return
        if(hoverTyping){
            textRef.current.textContent = '';
            timeLineRef.current.restart()
        } else {
            textRef.current.textContent = '';
            timeLineRef.current.pause()
        }
    }, [hoverTyping])

    return (
        <div>
            <p ref={textRef} className="text-white mt-4">{children}</p>
        </div>
    )
}