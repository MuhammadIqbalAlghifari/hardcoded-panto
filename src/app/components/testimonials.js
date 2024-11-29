"use client"

import { useEffect, useRef } from "react";
import TestimonialsCarouselComponent from "./testimonialsCarousel";
import { ScrollTrigger } from "gsap/all";
import { easeOut } from "framer-motion";
import gsap from "gsap";

export default function TestimonialsComponent() {

    let TittleAnimation, TittleTwoAnimation = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const animateOnScroll = (element, {opacity, x, y}) => {
            gsap.fromTo(element, {opacity: 0, x, y}, {
                opacity: 1,
                duration: 1,
                x: 0,
                y: 0,
                delay: 0.2,
                ease: easeOut,
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "center center"
                }
            });
        }

        const animateOnDekstop = () => {
            animateOnScroll([TittleAnimation, TittleTwoAnimation], {opacity: 0, y: 10})
        }

        const animateOnMobile = () => {
            animateOnScroll([TittleAnimation, TittleTwoAnimation], {opacity: 0, y: 10})
        }

        const isDekstop = window.matchMedia("(min-width: 768px)").matches

        isDekstop ? animateOnDekstop() : animateOnMobile();

    }, [])

    return (
        <section className="bg-white w-full flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full xl:px-0 py-16 px-8 lg:p-20 lg:gap-y-10 md:gap-y-6 gap-y-4 flex flex-col justify-center items-center">
                <p ref={el => {TittleAnimation = el}} className="lg:text-lg md:text-base text-sm text-orange-500 tracking-widest">TESTIMONIALS</p>
                <h1 ref={el => {TittleTwoAnimation = el}} className="lg:text-4xl md:text-3xl text-2xl text-black text-center font-bold">Our Client Reviews</h1>
                <TestimonialsCarouselComponent/>
            </div>
        </section>
    )
}