'use client'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Dots from "./Dots";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: '/assets/img/gpu.png',
        title: 'GPU',
        description: 'Flexible and scalable computing platforms, available on demand. They enable rapid deployment of AI projects, optimizing data processing, model training and implementation.\n\nSupporting diverse operating environments and integration with popular tools, they provide the foundation for innovative solutions in data analysis, process automation and advanced machine learning.\n\nAs a result, organizations can efficiently implement compute-intensive projects and maintain control over performance.',
    },
    {
        image: '/assets/img/automation1.png',
        title: 'Automations',
        description: 'MLnative to kompleksowa platforma AI wspierająca automatyzację procesów w biznesie poprzez trzy główne rozwiązania: CVtoblind\n\n- narzędzie do anonimizacji dokumentów rekrutacyjnych, Ship Spec Reader\n\n- system ekstrakcji specyfikacji technicznych, oraz MLOps Framework\n\n- narzędzie do zarządzania cyklem życia modeli AI. Platforma pozwala firmom zwiększyć efektywność operacyjną, oszczędzając czas i zasoby przy zachowaniu wysokiej jakości wyników.',
    },
    {
        image: '/assets/img/medicine.png',
        title: 'Ai in medicine',
        description: 'TheLion.AI to interdyscyplinarna platforma rozwijająca otwartoźródłowe rozwiązania AI dla medycyny, takie jak Eskulap\n\n- pierwszy polski medyczny model językowy, UMIE\n\n- uniwersalny enkoder obrazów diagnostycznych, oraz MIDAS\n\n- narzędzie do zarządzania zestawami danych medycznych.\n\nProjekty wspierają diagnostykę i badania medyczne, przyspieszając procesy analizy danych i promując dostępność zaawansowanych technologii w medycynie.',
    },
    {
        image: '/assets/img/4.png',
        title: 'Transcription Ai',
        description: 'Stenograf.io to inteligentne narzędzie wspierające transkrypcję oraz analizę danych audio i wideo.\n\nDzięki zaawansowanym algorytmom AI, platforma umożliwia szybkie i precyzyjne przekształcanie treści mówionej na tekst.\n\nDodatkowe funkcje obejmują rozpoznawanie mówców, indeksowanie treści oraz możliwość przetwarzania danych w wielu językach.\n\nStenograf.io dedykowany jest dziennikarzom, prawnikom i firmom, które chcą zoptymalizować procesy przetwarzania informacji.',
    },
    {
        image: '/assets/img/brain.png',
        title: 'Brain scan',
        description: 'BrainScan.AI to zaawansowana platforma wykorzystująca sztuczną inteligencję w analizie danych neurologicznych. \n\nNarzędzie wspiera lekarzy, naukowców i kliniki w diagnozowaniu schorzeń neurologicznych, takich jak choroba Alzheimera czy depresja, poprzez analizę obrazów mózgu i predykcję ryzyka zachorowań.\n\nBrainScan.AI oferuje również funkcje monitorowania pacjentów oraz personalizację terapii, co czyni ją niezastąpionym narzędziem w nowoczesnej medycynie.',
    },
    {
        image: '/assets/img/6.png',
        title: 'Innovative prostheses',
        description: 'Vbionic to firma biomedyczna specjalizująca się w projektowaniu i produkcji nowoczesnych protez kończyn górnych i dolnych, takich jak bioniczne protezy ręki TOLKA PRO oraz kosmetyczne uzupełnienia dłoni i stóp.\n\nDzięki zastosowaniu zaawansowanych technologii i indywidualnemu podejściu, Vbionic oferuje funkcjonalne i estetyczne rozwiązania protetyczne, które poprawiają jakość życia użytkowników.',
    },
    {
        image: '/assets/img/ivr.png',
        title: 'IVR Voice Assistant',
        description:"Advanced voice systems that automatically handle customer inquiries, especially in the medical industry and services that require quick access to information.\n\nThey facilitate appointments, provide details about available services or business hours, eliminating the need to wait for a consultant to call.\n\nWith personalized messages and integration with CRM systems, they provide efficient service and a positive user experience. The solution allows organizations to save time, improve customer service and tailor operations to the specific needs of the industry.",
    }


]

export default function ScrollPinned() {
    const [active, setActive] = useState(0);
    const galleryRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            const photos = document.querySelectorAll('.photo');
            const contentBlocks = document.querySelectorAll('.content-block');
            const dots = document.querySelectorAll('.dots');
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

                        setActive(index);
                        // Fade in the current photo and text
                        gsap.to(photo, { opacity: 1, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 1, y: 0, duration: 0.5 });
                        gsap.to(dots, { opacity: 1, duration: `${photoDuration}` })
                    },
                    onLeave: () => {
                        // Fade out the current photo and text when scrolling away
                        gsap.to(photo, { opacity: 0, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 0, y: 20, duration: 0.5 });
                        gsap.to(dots, { opacity: 0, duration: `${photoDuration}` })
                    },
                    onEnterBack: () => {
                        setActive(index);
                        // Handle re-entering the slide from the bottom
                        gsap.to(photo, { opacity: 1, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 1, y: 0, duration: 0.5 });
                        gsap.to(dots, { opacity: 1, duration: `${photoDuration}` })
                    },
                    onLeaveBack: () => {
                        // Handle leaving the slide from the top
                        gsap.to(photo, { opacity: 0, duration: `${photoDuration}` });
                        gsap.to(contentBlocks[index], { opacity: 0, y: 20, duration: 0.5 });
                        gsap.to(dots, { opacity: 0, duration: `${photoDuration}` })
                    },
                });
            });
        }, galleryRef);

        return () => ctx.revert()
    }, [])

    function scrollToSlide(index: number) {
        const slideElements = document.getElementById(`${index}`);
        if (slideElements) {
            slideElements.scrollIntoView({ behavior: 'smooth' });
            setActive(index);
        }
    }



    return (
        <section id="scrollPinned"  ref={galleryRef} className="min-h-screen -mt-[85vh]  ">
            <div  className="gallery flex ">
                {/* Left scrolling section */}
                <div className="left w-1/2 ml-auto">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            id={`${index}`}
                            className="photo-container h-screen flex items-center justify-end p-8"
                        >
                            <div className="relative overflow-hidden rounded-lg w-[700px] h-[500px] ">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="photo object-cover rounded-lg"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right pinned section */}
                <div className="rightblock w-1/2 h-screen sticky top-0">
                    <div className="h-full relative flex items-center justify-start p-8">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`content-block absolute max-w-2xl space-y-6`}
                            >
                                <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
                                <p className="text-lg text-gray-300 whitespace-pre-line">{slide.description}</p>

                            </div>

                        ))}
                        <Dots active={active} scrollToSlide={scrollToSlide} slides={slides} />
                    </div>
                </div>
            </div>


        </section>
    )
}