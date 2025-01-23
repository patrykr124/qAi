'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollBanner() {

    useEffect(() => {
        const imagesBox = document.querySelectorAll('.scroll-image');
        const imageBox1 = document.querySelectorAll('.scroll-image1');
        const imageBox2 = document.querySelectorAll('.scroll-image2');


        gsap.to(imagesBox, {
            scrollTrigger: {
                trigger: ".scroll-image",
                start: "-100% center", // Punkt początkowy animacji
                end: "100% top", // Punkt końcowy animacji
                scrub: 1, // Smooth scroll
            },
            x: -200,
            ease: "none",
            duration: 1.5,
        }),
            gsap.to(imageBox1, {
                scrollTrigger: {
                    trigger: ".scroll-image",
                    start: "-100% center", // Punkt początkowy animacji
                    end: "200% top", // Punkt końcowy animacji
                    scrub: 2, // Smooth scroll
                },
                x: 200,
                ease: "none",
                duration: 10,
            }),
            gsap.to(imageBox2, {
                scrollTrigger: {
                    trigger: ".scroll-image",
                    start: "-100% center", // Punkt początkowy animacji
                    end: "300% top", // Punkt końcowy animacji
                    scrub: 1, // Smooth scroll
                },
                x: -300,
                ease: "none",
                duration: 1,
            })
    }, [])
    return (
        <div className="h-screen relative overflow-hidden">
            <div className="wrapper">
                <div className="absolute w-[300%] h-[400%] bottom-[0%] right-[-24%] bg-shadow-radial z-10"></div>
                {/* <div className="absolute w-[50%] h-[45%] inset-0 bg-shadow-top-huge z-10"></div> */}
                <div className=" absolute mt-28 space-y-6  max-w-screen-md h-[80%] inset-y-0 z-20">
                    <h2>Co łączy wszystkie<br/> wyżej wymienione platformy?
                    </h2>
                    <p>Wszystkie opisane platformy łączy wykorzystanie zaawansowanych technologii, w tym sztucznej inteligencji, do rozwiązywania złożonych problemów w różnych branżach, takich jak medycyna, edukacja, diagnostyka, czy protetyka. Stawiają one na innowacyjność, dostępność i wspieranie użytkowników poprzez dostarczanie narzędzi dostosowanych do ich specyficznych potrzeb. Każda z tych firm działa w duchu transformacji technologicznej, kładąc nacisk na poprawę jakości życia, zwiększanie efektywności procesów oraz bezpieczeństwo danych klientów</p>
                   
                </div>
                <div className="">
                    <div className="flex gap-2 scroll-image justify-center ">
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                    </div>
                    <div className="flex gap-2 justify-center scroll-image1 ">
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                    </div>
                    <div className="flex gap-2 justify-center scroll-image2 ">
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg1.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                        <Image className="rounded-lg " src="/assets/img/bg.jpg" alt="bg" width={300} height={300} />
                    </div>

                </div>
            </div>
        </div>
    )
}