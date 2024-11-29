"use client"

import { easeOut } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaBagShopping, FaChevronDown } from "react-icons/fa6";

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
                <h1 className="text-xl text-black font-semibold">Panto</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-6 py-10 text-lg text-black">
                <p className="cursor-pointer">Shop</p>
                <p className="cursor-pointer">About Us</p>
                <p className="cursor-pointer">Contact</p>
                <p className="flex gap-x-2 cursor-pointer items-center">Furniture <FaChevronDown className="w-3 h-3"/></p>
                <FaBagShopping className="w-6 h-6 cursor-pointer"/>
            </div>
        </div>
    )
}

export default function NavbarComponent() {

    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 400) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };
        // Attach the event listener
        window.addEventListener("scroll", handleScroll);
        // Remove the event listener on cleanup
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let NavbarAnimation = useRef()

    useEffect(() => {
        gsap.fromTo(NavbarAnimation, {opacity: 0, y: -100}, {opacity: 1, y: 0, ease: easeOut, duration: 1})
    }, [])

    return (
        <header className={`fixed z-50 w-full flex justify-center items-center ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-sm" : "bg-transparent backdrop-blur-0"}`} ref={el => {NavbarAnimation = el}}>
            <div className="xl:max-w-[1280px] w-full">
                <nav className={`flex xl:px-0 lg:px-20 lg:py-10 md:px-14 md:py-7 px-10 py-5 justify-between items-center w-full transition-colors duration-500 ease-out ${isScrolled ? "text-black" : "text-white"}`}>
                    <MobileNav open={open} setOpen={setOpen}/>
                    <h1 className="lg:text-2xl md:text-xl text-lg font-semibold cursor-pointer">Panto</h1>
                    <ul className="md:flex hidden items-center justify-between w-[38.2%] lg:text-sm text-xs">
                        <li className="cursor-pointer flex items-center gap-x-2">Furniture <FaChevronDown className="w-3 h-3"/> </li>
                        <li className="cursor-pointer">Shop</li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                    <FaBagShopping className="w-6 h-6 hidden md:flex cursor-pointer"/>
                    <div className="flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {setOpen(!open)}}>
                        <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5 bg-black" : isScrolled ? "bg-black" : "bg-white"}`}/>
                        <span className={`h-1 w-full rounded-lg transform transition-all duration-300 ease-in-out ${open ? "w-0 h-0" : isScrolled ? "bg-black" : "w-full bg-white"}`}/>
                        <span className={`h-1 w-full rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5 bg-black" : isScrolled ? "bg-black" : "bg-white"}`}/>
                    </div>
                </nav>
            </div>
        </header>
    )
}