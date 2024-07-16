"use client"

import { useEffect } from "react";
import BestSellingProductComponent from "./components/bestProducts";
import ExperienceComponent from "./components/experiences";
import FooterComponent from "./components/footer";
import HeroComponent from "./components/hero";
import MaterialsComponent from "./components/materials";
import NavbarComponent from "./components/navbar";
import SloganComponent from "./components/slogan";
import TestimonialsComponent from "./components/testimonials";
import Lenis from 'lenis'

export default function Home() {

  useEffect(() => {
    
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
  }, []);

  return (
    <>
      <NavbarComponent/>
      <HeroComponent/>
      <SloganComponent/>
      <BestSellingProductComponent/>
      <ExperienceComponent/>
      <MaterialsComponent/>
      <TestimonialsComponent/>
      <FooterComponent/>
    </>
  );
}
