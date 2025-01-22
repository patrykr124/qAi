'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: '/assets/img/1.png',
        title: 'GPU Cloud',
        description: 'GPU Cloud to platforma oferująca zasoby obliczeniowe GPU na żądanie, umożliwiająca szybkie uruchamianie infrastruktury do projektów AI.\n\nDzięki integracji z popularnymi narzędziami, jak Jupyter Lab czy Visual Studio Code, użytkownicy mogą efektywnie zarządzać procesami zbierania danych, trenowania modeli oraz ich wdrażania.\n\nPlatforma wspiera różnorodne frameworki, takie jak TensorFlow, PyTorch czy ONNX, zapewniając elastyczność w realizacji projektów.',
    },
    {
        image: '/assets/img/2.png',
        title: 'MLnative',
        description: 'MLnative to kompleksowa platforma AI wspierająca automatyzację procesów w biznesie poprzez trzy główne rozwiązania: CVtoblind\n\n- narzędzie do anonimizacji dokumentów rekrutacyjnych, Ship Spec Reader\n\n- system ekstrakcji specyfikacji technicznych, oraz MLOps Framework\n\n- narzędzie do zarządzania cyklem życia modeli AI. Platforma pozwala firmom zwiększyć efektywność operacyjną, oszczędzając czas i zasoby przy zachowaniu wysokiej jakości wyników.',
    },
    {
        image: '/assets/img/3.png',
        title: 'TheLion.AI',
        description: 'TheLion.AI to interdyscyplinarna platforma rozwijająca otwartoźródłowe rozwiązania AI dla medycyny, takie jak Eskulap\n\n- pierwszy polski medyczny model językowy, UMIE\n\n- uniwersalny enkoder obrazów diagnostycznych, oraz MIDAS\n\n- narzędzie do zarządzania zestawami danych medycznych.\n\nProjekty wspierają diagnostykę i badania medyczne, przyspieszając procesy analizy danych i promując dostępność zaawansowanych technologii w medycynie.',
    },
    {
        image: '/assets/img/4.png',
        title: 'Stenograf.io',
        description: 'Stenograf.io to inteligentne narzędzie wspierające transkrypcję oraz analizę danych audio i wideo.\n\nDzięki zaawansowanym algorytmom AI, platforma umożliwia szybkie i precyzyjne przekształcanie treści mówionej na tekst.\n\nDodatkowe funkcje obejmują rozpoznawanie mówców, indeksowanie treści oraz możliwość przetwarzania danych w wielu językach.\n\nStenograf.io dedykowany jest dziennikarzom, prawnikom i firmom, które chcą zoptymalizować procesy przetwarzania informacji.',
    },
    {
        image: '/assets/img/5.png',
        title: 'BrainScan.AI',
        description: 'BrainScan.AI to zaawansowana platforma wykorzystująca sztuczną inteligencję w analizie danych neurologicznych. \n\nNarzędzie wspiera lekarzy, naukowców i kliniki w diagnozowaniu schorzeń neurologicznych, takich jak choroba Alzheimera czy depresja, poprzez analizę obrazów mózgu i predykcję ryzyka zachorowań.\n\nBrainScan.AI oferuje również funkcje monitorowania pacjentów oraz personalizację terapii, co czyni ją niezastąpionym narzędziem w nowoczesnej medycynie.',
    },
    {
        image: '/assets/img/6.png',
        title: 'Vbionic',
        description: 'Vbionic to firma biomedyczna specjalizująca się w projektowaniu i produkcji nowoczesnych protez kończyn górnych i dolnych, takich jak bioniczne protezy ręki TOLKA PRO oraz kosmetyczne uzupełnienia dłoni i stóp.\n\nDzięki zastosowaniu zaawansowanych technologii i indywidualnemu podejściu, Vbionic oferuje funkcjonalne i estetyczne rozwiązania protetyczne, które poprawiają jakość życia użytkowników.',
    },
    
   
]

export default function ScrollPinned() {

    const galleryRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            const photos = document.querySelectorAll('.photo');
            const contentBlocks = document.querySelectorAll('.content-block');
            const photoDuration = 0.5;
            // Create animation for photos
            gsap.set(photos, { opacity: 0 });
            gsap.set(contentBlocks, { opacity: 0, y: 50 });

            // Create ScrollTrigger
            photos.forEach((photo, index) => {
                ScrollTrigger.create({
                    trigger: photo,
                    start: "top center", // Trigger when the top of the image reaches the center of the viewport
                    end: "bottom center", // End when the bottom of the image leaves the center of the viewport
                    onEnter: () => {
                        // Fade in the current photo and text
                        gsap.to(photo, { opacity: 1, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 1, y: 0, duration: 0.5 });
                    },
                    onLeave: () => {
                        // Fade out the current photo and text when scrolling away
                        gsap.to(photo, { opacity: 0, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 0, y: 20, duration: 0.5 });
                    },
                    onEnterBack: () => {
                        // Handle re-entering the slide from the bottom
                        gsap.to(photo, { opacity: 1, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 1, y: 0, duration: 0.5 });
                    },
                    onLeaveBack: () => {
                        // Handle leaving the slide from the top
                        gsap.to(photo, { opacity: 0, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 0, y: 20, duration: 0.5 });
                    },
                });
            });
        }, galleryRef);

        return () => ctx.revert()
    }, [])

    return (
        <section ref={galleryRef} className="min-h-screen -mt-[85vh]  ">
          
                <div className="gallery flex ">
                    {/* Left scrolling section */}
                    <div className="left w-1/2 ml-auto">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="photo-container h-screen flex items-center justify-end p-8"
                            >
                                <div className="relative overflow-hidden rounded-lg w-[700px] h-[500px] ">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="photo object-cover rounded-lg z-[99]"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right pinned section */}
                    <div className="rightblock w-1/2 h-screen sticky top-0">
                        <div className="h-full flex items-center justify-start p-8">
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`content-block absolute max-w-2xl space-y-6`}
                                >
                                    <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
                                    <p className="text-lg text-gray-300 whitespace-pre-line">{slide.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
          
        </section>
    )
}