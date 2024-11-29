"use client"

import { easeOut, stagger } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6"

export default function FooterComponent() {

    const year = new Date().getFullYear()

    let FooterAnimation, LowerFooterAnimation, UpperFooterAnimation = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo([UpperFooterAnimation.current.children, LowerFooterAnimation], {opacity: 0, y: 0}, {opacity: 1, y: -20, duration: 1, stagger: 0.2, ease: easeOut, scrollTrigger: {
            start: "top center",
            end: 'center center',
            trigger: FooterAnimation
        }})
    })

    return (
        <footer ref={el => {FooterAnimation = el}} className="w-full h-full bg-[#f5f5f5] xl:px-0 flex justify-center items-center lg:px-28 px-12">
            <div className="xl:max-w-[1280px] w-full">
                <div className="pt-10 flex flex-col justify-center items-center">
                    <main ref={UpperFooterAnimation} className="flex lg:pt-32 pt-10 flex-col md:flex-row justify-between gap-y-8 md:gap-y-0 h-full items-stretch w-full">
                        <article className="flex flex-col max-w-[19rem] h-full text-black justify-between md:gap-y-8 gap-y-4 items-start">
                            <h1 className="md:text-2xl text-xl font-semibold">Panto</h1>
                            <p className="md:text-sm text-xs font-light leading-5">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                        </article>
                        <article className="flex flex-col gap-y-1.5 md:gap-y-0 justify-between items-start font-light md:text-base text-sm">
                            <p className="text-orange-500">Services</p>
                            <p className="text-black">Email Marketing</p>
                            <p className="text-black">Campaigns</p>
                            <p className="text-black">Branding</p>
                        </article>
                        <article className="flex flex-col gap-y-1.5 md:gap-y-0 justify-between items-start font-light md:text-base text-sm">
                            <p className="text-orange-500">Furniture</p>
                            <p className="text-black">Beds</p>
                            <p className="text-black">Chair</p>
                            <p className="text-black">All</p>
                        </article>
                        <article className="flex flex-col gap-y-1.5 md:gap-y-0 justify-between items-start font-light md:text-base text-sm">
                            <p className="text-orange-500">Follow Us</p>
                            <div className="flex justify-start items-center gap-x-2 text-black">
                                <FaFacebookF className="w-5 h-5"/>
                                <p>Facebook</p>
                            </div>
                            <div className="flex justify-start items-center gap-x-2 text-black">
                                <FaTwitter className="w-5 h-5"/>
                                <p>Twitter</p>
                            </div>
                            <div className="flex justify-start items-center gap-x-2 text-black">
                                <FaInstagram className="w-5 h-5"/>
                                <p>Instagram</p>
                            </div>
                        </article>
                    </main>
                    <div ref={el => {LowerFooterAnimation = el}} className="flex flex-col md:flex-row gap-y-1.5 md:gap-y-0 justify-between items-center w-full py-20 text-black font-light md:text-sm text-xs">
                        <p>Copyright © {year}</p>
                        <div className="flex justify-center gap-x-4 items-center">
                            <p>Terms & Condition</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}