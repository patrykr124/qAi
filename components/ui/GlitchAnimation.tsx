import { useEffect, useState } from "react";

export default function GlitchAnimation() {
    const [currentWorld, setCurrentWorld] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);
    const words = ['FUTURE', 'QUITE', 'QUANTUM',"QUERY"];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true)
            setTimeout(() => {
                setCurrentWorld(current => (current + 1) % words.length)
                setIsGlitching(false)
            }, 80)
        },4000)
        return () => clearInterval(interval)
    }, [])
    return (
        <h1 className={`${isGlitching ? 'glitch' : ''} word text-7xl sm:text-[144px]  font-medium text-white`}>{words[currentWorld]}</h1>
    )
}