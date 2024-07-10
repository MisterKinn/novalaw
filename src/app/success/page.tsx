"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/successes.css";

import NavBar from "@/app/components/home/desktop/NavBar";
import StickyNav from "@/app/components/home/desktop/StickyNav";
import Intro from "@/app/components/success/desktop/Intro";
import Cases from "@/app/components/success/desktop/Cases";
import Footer from "@/app/components/home/desktop/Footer";

function Success() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return <div id="page"></div>;
    } else {
        return (
            <div>
                <NavBar />
                <StickyNav />
                <Intro />
                <Cases />
                <Footer />
            </div>
        );
    }
}

export default Success;
