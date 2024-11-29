"use client"

import { easeOut, stagger } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function SloganComponent() {

    let SloganAnimation, ArticleAnimation = useRef()

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
            animateOnScroll(SloganAnimation, {opacity: 0})
            animateOnScroll(ArticleAnimation.current.children, {opacity: 0, x: -10})
        }

        const animateOnMobile = () => {
            animateOnScroll(SloganAnimation, {opacity: 0})
            animateOnScroll(ArticleAnimation.current.children, {opacity: 0, y: 10})
        }

        const isDekstop = window.matchMedia("(min-width: 768px)").matches

        isDekstop ? animateOnDekstop() : animateOnMobile();

    }, [])

    return (
        <section className="xl:px-0 lg:p-20 md:p-14 p-10 flex justify-center items-center  w-full bg-white">
            <div className="xl:max-w-[1280px] w-full flex flex-col lg:flex-row gap-y-4 justify-between items-center">
                <h1 ref={el => {SloganAnimation = el}} className="lg:text-4xl md:text-3xl text-2xl font-bold lg:max-w-[15rem] text-center lg:text-start w-full text-black">Why Choosing Us</h1>
                <div ref={ArticleAnimation} className="flex flex-col md:flex-row gap-y-4 lg:gap-y-0 lg:justify-between justify-center max-w-4xl items-center">
                    <article className="flex flex-col gap-y-2.5 md:gap-y-4 max-w-[15rem] justify-center lg:items-start items-center">
                        <h1 className="font-semibold text-lg text-black">Luxury Facilities</h1> 
                        <p className="font-light text-xs text-center text-black lg:text-start leading-5">The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.</p> 
                        <div className="text-orange-500 text-xs flex justify-start items-center gap-2 group cursor-pointer">
                            <p>More Info</p>
                            <FaArrowRightLong className="w-10 h-4 group-hover:translate-x-2 transition duration-200"/>
                        </div>
                    </article>
                    <article className="flex flex-col gap-y-2.5 md:gap-y-4 max-w-[15rem] justify-center lg:items-start items-center">
                        <h1 className="font-semibold text-lg text-black">Affordable Price</h1> 
                        <p className="font-light text-xs text-center text-black lg:text-start leading-5">You can get a workspace of the highst quality at an affordable price and still enjoy the facities that are only here.</p> 
                        <div className="text-orange-500 text-xs flex justify-start items-center gap-2 group cursor-pointer">
                            <p>More Info</p>
                            <FaArrowRightLong className="w-10 h-4 group-hover:translate-x-2 transition duration-200"/>
                        </div>
                    </article>
                    <article className="flex flex-col gap-y-2.5 md:gap-y-4 max-w-[15rem] justify-center lg:items-start items-center">
                        <h1 className="font-semibold text-lg text-black">Many Choices</h1> 
                        <p className="font-light text-xs text-center text-black lg:text-start leading-5">We provide many unique workspace choices so that you can choose the workspace to your liking</p> 
                        <div className="text-orange-500 text-xs flex justify-start items-center gap-2 group cursor-pointer">
                            <p>More Info</p>
                            <FaArrowRightLong className="w-10 h-4 group-hover:translate-x-2 transition duration-200"/>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}