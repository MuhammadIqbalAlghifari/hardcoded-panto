"use client"

import { easeOut } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";

export default function TestimonialsCarouselComponent() {

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
        <div className="mt-14 w-full relative h-full flex flex-col justify-center">
            <div ref={el => {ArrowAnimation}} className="flex justify-between w-full absolute z-30 items-center -mt-10">
                <FaArrowLeftLong className="bg-white text-black w-10 h-10 p-3 rounded-full -ml-5 cursor-pointer shadow-md"/>
                <FaArrowRightLong className="bg-white text-black w-10 h-10 p-3 rounded-full -mr-5 cursor-pointer shadow-md"/>
            </div>
            <main ref={ItemAnimation} className="flex h-full justify-between relative items-center w-full">
                <aside className="flex w-full md:w-auto flex-col justify-end h-full relative">
                    <img src="/bg-testimonials-upin.png" className="w-full relative z-10 h-full shadow-2xl"/>
                        <article className="absolute z-20 flex flex-col h-full justify-end w-full items-center p-5">
                            <div className="bg-white w-full rounded-xl py-4 md::px-8 px-4 h-1/2 flex flex-col justify-start sm:gap-y-4 gap-y-2 items-center">
                                <img src="/bang-upin.png" className="w-14 h-14 -mt-11 object-cover bg-white p-1.5 rounded-t-full"/>
                                <div className="flex flex-col gap-y-1 justify-start items-center">
                                    <h1 className="md:text-lg text-base font-semibold text-black">Bang Upin</h1>
                                    <h1 className="text-xs text-black font-extralight">Pedangan Asongan</h1>
                                </div>
                                <div className="w-full h-full flex flex-col md:justify-between justify-center gap-y-2 md:gap-y-0 items-center">
                                    <p className="text-center text-black md:text-sm text-xs font-light">"Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal"</p>
                                    <div className="flex justify-center gap-x-2 items-center">
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-200"/>
                                    </div>
                                </div>
                            </div>
                        </article>
                </aside>
                <aside className="md:flex hidden flex-col justify-end h-full relative">
                    <img src="/bg-testimonials-sukijan.png" className="w-full relative z-10 h-full shadow-2xl"/>
                        <article className="absolute z-20 flex flex-col h-full justify-end w-full items-center p-5">
                            <div className="bg-white w-full rounded-xl py-4 px-8 h-1/2 flex flex-col justify-start gap-y-4 items-center">
                                <img src="/ibu-sukijan.png" className="w-14 h-14 -mt-11 object-cover bg-white p-1.5 rounded-t-full"/>
                                <div className="flex flex-col gap-y-1 justify-start items-center">
                                    <h1 className="text-lg font-semibold text-black">Ibuk Sukijan</h1>
                                    <h1 className="text-xs text-black font-extralight">Ibu Rumah Tangga</h1>
                                </div>
                                <div className="w-full h-full flex flex-col justify-between items-center">
                                    <p className="text-center text-black text-sm font-light">"Makasih panto, aku sekarang berasa tinggal di aprtment karena barang-barang yang terlihat mewah"</p>
                                    <div className="flex justify-center gap-x-2 items-center">
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-200"/>
                                    </div>
                                </div>
                            </div>
                        </article>
                </aside>
                <aside className="lg:flex hidden flex-col justify-end relative">
                    <img src="/bg-testimonials-ina.png" className="w-full relative z-10 h-full shadow-2xl"/>
                        <article className="absolute z-20 flex flex-col h-full justify-end w-full items-center p-5">
                            <div className="bg-white w-full rounded-xl py-4 px-8 h-1/2 flex flex-col justify-start gap-y-4 items-center">
                                <img src="/mpok-ina.png" className="w-14 h-14 -mt-11 object-cover bg-white p-1.5 rounded-t-full"/>
                                <div className="flex flex-col gap-y-1 justify-start items-center">
                                    <h1 className="text-lg font-semibold text-black">Mpok Ina</h1>
                                    <h1 className="text-xs text-black font-extralight">Karyawan Swasta</h1>
                                </div>
                                <div className="w-full h-full flex flex-col justify-between items-center">
                                    <p className="text-center text-black text-sm font-light">"Sangat terjangkau untuk kantong saya yang tidak terlalu banyak"</p>
                                    <div className="flex justify-center gap-x-2 items-center">
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-500"/>
                                        <FaStar className="w-3 h-3 text-orange-200"/>
                                    </div>
                                </div>
                            </div>
                        </article>
                </aside>
            </main>
        </div>
    )
}