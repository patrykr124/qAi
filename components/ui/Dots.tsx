export default function Dots({ slides, scrollToSlide,active }: any) {
   
    return (
        <div  className="absolute dots  bottom-10 z-[999] -left-20  flex  gap-3 bg-neutral-800 px-4 py-2 rounded-full cursor-pointer">
            {slides.map((_: any, index: number) => (
                <span onClick={() => scrollToSlide(index)} key={index} className={`${active === index ? 'bg-white' : 'bg-white/50'}  w-3 h-3 rounded-full transition-all duration-150 `}></span>
            ))}

        </div>
    )
}