import { useEffect, useRef, useState } from "react";

export default function GlitchAnimation() {
    const [currentWorld, setCurrentWorld] = useState(0);
    const [isWord, setIsWord] = useState('FUTURE');
    const [isGlitching, setIsGlitching] = useState(false);
    const words = ['QUANTUM', 'QUERY', "QUALITY", "QUANTIFY", "QUARK", "QUORUM", "QUICK", "QUADRANT", "QUASI", "QUANTIZAION", "QUERYABLE", "QUALIFICATION"];
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWorld((prev) => {
                const nextIndex = (prev + 1) % words.length;
                setIsWord(words[nextIndex]);

                timeoutRef.current = setTimeout(() => {
                    setIsGlitching(true)
                    setTimeout(() => {
                        setIsGlitching(false)
                        setIsWord('FUTURE')
                    }, 100)

                }, 40)
                return nextIndex;
            })
        }, 4000)
        return () => {
            clearInterval(interval)
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <h1 className={`${isGlitching ? ' interference ' : ' '} word text-7xl sm:text-[144px]  font-medium text-white`}>{isWord}</h1>
    )
}