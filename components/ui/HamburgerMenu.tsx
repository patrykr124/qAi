import { useState } from "react";
import Button from "./Button";
import { useMenu } from "@/context/MenuContext";

export default function HamburgerMenu() {
    const {isOpen,toggleMenu} = useMenu();

    
    return (
        <div className="">
            <div onClick={toggleMenu} className="flex flex-col gap-1.5 cursor-pointer">
                <span className="w-8 h-0.5 bg-white"></span>
                <span className="w-8 h-0.5 bg-white"></span>
                <span className="w-8 h-0.5 bg-white"></span>
            </div>
            <div className={`${isOpen ? 'opacity-100 scale-100 translate-y-0 translate-x-0' : 'opacity-0 scale-0 -translate-y-24 translate-x-20'} transition-all duration-200 absolute w-[200px] shadow-xl justify-center p-4 rounded-lg top-24 right-4 flex bg-white gap-1.5 cursor-pointer`}>
                <ul className="flex flex-col   gap-6 text-md  ">
                    <li className="">
                        <Button className="text-black" href="/">What we do</Button>
                    </li>
                    <li>
                        <Button className="text-black" href="/">MultiagentAI</Button>
                    </li>
                    <li>
                        <Button className="text-black" href="/">NeuralHub</Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}