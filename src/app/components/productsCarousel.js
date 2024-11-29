"use client"

import { easeOut } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong, FaPlus, FaStar } from "react-icons/fa6";

export default function ChairProducts() {

    let ArrowAnimation, ItemAnimation = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const animateOnScroll = (element, {opacity, x, y}) => {
            gsap.fromTo(element, {opacity: 0, x, y}, {
                opacity: 1,
                duration: 1,
                x: 0,
                y: 0,
                delay: 0.2,
                stagger: 0.2,
                ease: easeOut,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "center center"
                }
            });
        }

        const animateOnDekstop = () => {
            animateOnScroll(ArrowAnimation, {opacity: 0})
            animateOnScroll(ItemAnimation.current.children, {opacity: 0})
        }
        
        const animateOnMobile = () => {
            animateOnScroll(ArrowAnimation, {opacity: 0})
            animateOnScroll(ItemAnimation.current.children, {opacity: 0})
        }

        const isDekstop = window.matchMedia("(min-width: 768px)").matches

        isDekstop ? animateOnDekstop() : animateOnMobile();

    }, [])

    return (
        <div className="pt-14 w-full flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full relative flex flex-col justify-center items-center">
                <div ref={el => {ArrowAnimation = el}} className="flex text-black justify-between w-full absolute z-10 items-center">
                    <FaArrowLeftLong className="bg-white w-10 h-10 p-3 rounded-full -ml-5 cursor-pointer shadow-md"/>
                    <FaArrowRightLong className="bg-white w-10 h-10 p-3 rounded-full -mr-5 cursor-pointer shadow-md"/>
                </div>
                <main ref={ItemAnimation} className="flex lg:justify-between md:justify-center md:gap-x-4 lg:gap-x-0 items-center w-full">
                    <aside className="flex flex-col w-full md:w-auto justify-center items-center">
                        <div className="bg-slate-50 w-full h-full rounded-t-2xl p-5 group">
                            <img src="/sakarias-armchair.png" className="w-full h-full -mt-16 group-hover:-rotate-3 transition duration-300"/>
                        </div>
                        <div className="flex flex-col bg-white p-5 justify-center rounded-b-2xl w-full h-full items-start gap-6">
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h2 className="text-sm text-gray-500 font-light">Chair</h2>
                                <h1 className="text-base font-semibold text-black">Sakarias Armchair</h1>
                                <div className="flex justify-center gap-1 items-center">
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex justify-start items-start">
                                    <p className="text-xs text-black">$</p>
                                    <p className="text-base text-black">392</p>
                                </div>
                                <FaPlus className="w-10 h-10 p-2.5 text-white bg-gray-900 rounded-full cursor-pointer"/>
                            </div>
                        </div>
                    </aside>
                    <aside className="md:flex hidden flex-col justify-center items-center">
                        <div className="bg-slate-50 w-full h-full rounded-t-2xl p-5 group">
                            <img src="/baltsar-chair.png" className="w-full h-full -mt-16 group-hover:-rotate-3 transition duration-300"/>
                        </div>
                        <div className="flex flex-col bg-white p-5 justify-center rounded-b-2xl w-full h-full items-start gap-6">
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h2 className="text-sm text-gray-500 font-light">Chair</h2>
                                <h1 className="text-base font-semibold text-black">Baltsar Chair</h1>
                                <div className="flex justify-center gap-1 items-center">
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                </div>
                            </div>
                            <div className="md:flex hidden justify-between items-center w-full">
                                <div className="flex justify-start items-start">
                                    <p className="text-xs text-black">$</p>
                                    <p className="text-base text-black">299</p>
                                </div>
                                <FaPlus className="w-10 h-10 p-2.5 text-white bg-gray-900 rounded-full cursor-pointer"/>
                            </div>
                        </div>
                    </aside>
                    <aside className="md:flex hidden flex-col justify-center items-center">
                        <div className="bg-slate-50 w-full h-full rounded-t-2xl p-5 group">
                            <img src="/anjay-chair.png" className="w-full h-full -mt-16 group-hover:-rotate-3 transition duration-300"/>
                        </div>
                        <div className="flex flex-col bg-white p-5 justify-center rounded-b-2xl w-full h-full items-start gap-6">
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h2 className="text-sm text-gray-500 font-light">Chair</h2>
                                <h1 className="text-base font-semibold text-black">Anjay Chair</h1>
                                <div className="flex justify-center gap-1 items-center">
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex justify-start items-start">
                                    <p className="text-xs text-black">$</p>
                                    <p className="text-base text-black">512</p>
                                </div>
                                <FaPlus className="w-10 h-10 p-2.5 text-white bg-gray-900 rounded-full cursor-pointer"/>
                            </div>
                        </div>
                    </aside>
                    <aside className="lg:flex hidden flex-col justify-center items-center">
                        <div className="bg-slate-50 w-full h-full rounded-t-2xl p-5 group">
                            <img src="/nyantuy-chair.png" className="w-full h-full -mt-16 group-hover:-rotate-3 transition duration-300"/>
                        </div>
                        <div className="flex flex-col bg-white p-5 justify-center rounded-b-2xl w-full h-full items-start gap-6">
                            <div className="flex flex-col justify-center items-start gap-1">
                                <h2 className="text-sm text-gray-500 font-light">Chair</h2>
                                <h1 className="text-base font-semibold text-black">Nyantui Chair</h1>
                                <div className="flex justify-center gap-1 items-center">
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                    <FaStar className="w-4 h-4 text-orange-300"/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="flex justify-start items-start">
                                    <p className="text-xs text-black">$</p>
                                    <p className="text-base text-black">921</p>
                                </div>
                                <FaPlus className="w-10 h-10 p-2.5 text-white bg-gray-900 rounded-full cursor-pointer"/>
                            </div>
                        </div>
                    </aside>
                </main>
                <div className="flex justify-center gap-4 pt-10 group cursor-pointer items-center text-orange-500">
                    <p className="text-sm">View All</p>
                    <FaArrowRightLong className="w-10 h-4 group-hover:translate-x-2 transition duration-200"/>
                </div>
            </div>
        </div>
    )
}