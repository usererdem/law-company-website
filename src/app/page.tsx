"use client";

import styles from "./page.module.scss";

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
