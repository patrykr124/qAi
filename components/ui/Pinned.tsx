'use client'
import Link from "next/link";
import { useEffect, useState } from "react";




export default function Pinned() {

    const [currentHash, setCurrentHash] = useState("");
 
    useEffect(() => {
        const sections = [
          { id: "home", ref: document.getElementById("home") },
          { id: "whatwedo", ref: document.getElementById("whatwedo") },
          { id: "bgtext", ref: document.getElementById("bgtext") },
          { id: "scrollPinned", ref: document.getElementById("scrollPinned") },
          { id: "scrollBanner", ref: document.getElementById("scrollBanner") },
          { id: "faq", ref: document.getElementById("faq") },
        ];
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = entry.target.id;
                setCurrentHash(`#${id}`);
                window.history.replaceState(null, `#${id}`);
              }
            });
          },
          { threshold: 0.4 } // 60% widoczności elementu na ekranie
        );
    
        sections.forEach(({ ref }) => {
          if (ref) observer.observe(ref);
        });
    
        return () => {
          sections.forEach(({ ref }) => {
            if (ref) observer.unobserve(ref);
          });
        };
      }, []);

    const hrefData = [
        {
            href: "#home",
        },
        {
            href: "#whatwedo",
        },
        {
            href: "#bgtext",
        },
        {
            href: "#scrollPinned",
        },
        {
            href: "#scrollBanner",
        },
        {
            href: "#faq",
        }
    ]


    return (
        <div className="fixed top-1/2 -translate-y-1/2 left-0.5 lg:left-1 xl:left-[2%] z-[999999999]">
            <div className="flex flex-col gap-4">
                {
                    hrefData.map((item, index) => {


                        return (<Link  key={index} href={item.href} className={`w-2 h-2 ${currentHash === item.href ? 'bg-white' : 'bg-white/50'}    rounded-full`}></Link>)
                    })
                }

            </div>
        </div>
    )
}