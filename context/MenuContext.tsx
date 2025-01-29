"use client"
import { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextType {
    isOpen: boolean;
    toggleMenu: () => void;
    handleCloseMenu: () => void;
    setIsOpen: (value: boolean) => void;
};
interface MenuProviderProps {
    children: ReactNode;

}
const MenuContext = createContext<MenuContextType | null>(null)

export function MenuProvider({ children } : MenuProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen((prev) => !prev);
    }
    function handleCloseMenu() {
        setIsOpen(false);
    }

    return (
     <MenuContext.Provider value={{ isOpen, toggleMenu,handleCloseMenu,setIsOpen }}>
        {children}
     </MenuContext.Provider>
    );
}
export function useMenu(): MenuContextType {
    const context = useContext(MenuContext);

    if (!context) {
        throw new Error("useMenu must be used within a MenuProvider");
    }

    return context;
}
