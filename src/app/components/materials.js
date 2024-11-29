"use client"

import { easeOut } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MaterialsComponent() {

    let ChairImageAnimation, SofaImageAnimation, DinnerImageAnimation, ArticleAnimation = useRef()

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
            animateOnScroll([ChairImageAnimation, SofaImageAnimation, DinnerImageAnimation], {opacity: 0, y: 50})
            animateOnScroll(ArticleAnimation.current.children, {opacity: 0})
        }

        const animateOnMobile = () => {
            animateOnScroll([ChairImageAnimation, SofaImageAnimation, DinnerImageAnimation], {opacity: 0, y: 50})
            animateOnScroll(ArticleAnimation.current.children, {opacity: 0})
        }

        const isDekstop = window.matchMedia("(min-width: 768px)").matches

        isDekstop ? animateOnDekstop() : animateOnMobile();

    }, [])

    return (
        <section className="bg-white w-full flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full px-10 lg:px-0 flex flex-col lg:flex-row lg:justify-end justify-center py-20 items-center lg:gap-x-10 gap-y-10">
                <article ref={ArticleAnimation} className="flex flex-col justify-center md:max-w-xl max-w-md lg:items-start items-center gap-y-4 lg:pl-20">
                    <p className="lg:text-lg md:text-base text-sm text-orange-500 tracking-widest">MATERIALS</p>
                    <h1 className="text-black font-bold lg:text-4xl md:text-3xl text-2xl text-center lg:text-start leading-tight">Very Serious <br className="hidden lg:block"/> Materials For Making Furniture</h1>
                    <p className="font-light md:text-sm text-xs text-center lg:text-start text-black lg:leading-6 leading-5">Because panto was very serious about designing furniture for our enviroment, using a very expensive and famous capital but at a relatively low price</p>
                    <div className="text-orange-500 text-xs flex justify-start items-center gap-2 group cursor-pointer">
                        <p>More Info</p>
                        <FaArrowRightLong className="w-10 h-4 group-hover:translate-x-2 transition duration-200"/>
                    </div>
                </article>
                <div className="flex justify-end items-end gap-x-10">
                    <aside className="flex flex-col justify-center max-w-xs relative items-center gap-y-10">
                        <img ref={el => {ChairImageAnimation = el}} src="/materials-chair.png" className="w-full h-full relative shadow-2xl z-10 object-cover"/>
                        <img ref={el => {SofaImageAnimation = el}} src="/materials-sofa.png" className="w-full h-full relative shadow-2xl z-10 object-cover"/>
                    </aside>
                    <aside className="flex flex-col justify-center max-w-xl relative items-start">
                        <img ref={el => {DinnerImageAnimation = el}} src="/materials-dinner.png" className="w-full h-full relative shadow-2xl z-10 object-cover"/>
                    </aside>
                </div>
            </div>
        </section>
    )
}