"use client"

import { easeOut } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ExperienceComponent() {

    let ImageAnimation, ImageBlurAnimation, CubeVerticalAnimation, CubeHorizontalAnimation, ArticleAnimation = useRef()

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
            animateOnScroll(ImageAnimation, {opacity: 0, x: -100})
            animateOnScroll(ImageBlurAnimation, {opacity: 0, x: -100})
            animateOnScroll(CubeVerticalAnimation, {opacity: 0, x: -100})
            animateOnScroll(CubeHorizontalAnimation, {opacity: 0, x: -100})
            animateOnScroll(ArticleAnimation.current.children, {opacity: 0})
        }

        const animateOnMobile = () => {
            animateOnScroll(ImageAnimation, {opacity: 0, y: 50})
            animateOnScroll(ImageBlurAnimation, {opacity: 0, y: 50})
            animateOnScroll(CubeVerticalAnimation, {opacity: 0, x: -100})
            animateOnScroll(CubeHorizontalAnimation, {opacity: 0, x: -100})
            animateOnScroll(ArticleAnimation.current.children, {opacity: 0})
        }

        const isDekstop = window.matchMedia("(min-width: 768px)").matches

        isDekstop ? animateOnDekstop() : animateOnMobile();

    }, [])

    return (
        <section className="md:py-52 py-40 lg:px-0 px-10 flex justify-center items-center w-full bg-white">
            <div className="flex xl:max-w-[1280px] w-full flex-col-reverse lg:flex-row md:justify-start justify-center md:gap-x-36 gap-y-10 items-center">
                <img ref={el => {ImageAnimation = el}} src="/experience.jpg" className="lg:w-2/6 xl:w-1/4 w-3/5 hidden md:flex absolute mx-auto blur-xl lg:mt-20 mt-32 z-0 object-cover"/>
                <img ref={el => {ImageBlurAnimation = el}} src="/experience.jpg" className="lg:w-2/5 w-4/5 shadow-lg md:shadow-none h-full relative z-10 object-cover"/>
                <div ref={el => {CubeVerticalAnimation = el}} className="w-1/4 p-10 h-1/2 xl:h-2/5 hidden lg:flex absolute z-0 bg-slate-100 -mt-48 rounded-tr-3xl"/>
                <div ref={el => {CubeHorizontalAnimation = el}} className="lg:w-2/5 ml-14 xl:ml-14 xl:w-1/3 p-6 h-64 hidden lg:flex bg-slate-100 absolute z-0 rounded-r-3xl"></div>
                <article ref={ArticleAnimation} className="flex max-w-md flex-col gap-y-4 -mt-10 justify-start h-full lg:items-start items-center">
                    <p className="lg:text-lg md:text-base text-sm text-orange-500 tracking-widest">EXPERIENCES</p>
                    <h1 className="text-black font-bold lg:text-4xl md:text-3xl text-2xl text-center lg:text-start leading-tight">We Provide You The Best Experience</h1>
                    <p className="font-light md:text-sm text-xs text-center lg:text-start lg:leading-6 leading-5 text-black">You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials</p>
                    <div className="text-orange-500 text-xs flex justify-start items-center gap-2 group cursor-pointer">
                        <p>More Info</p>
                        <FaArrowRightLong className="w-10 h-4 group-hover:translate-x-2 transition duration-200"/>
                    </div>
                </article>
            </div>
        </section>
    )
}