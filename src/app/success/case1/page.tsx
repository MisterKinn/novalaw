"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/successes.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Intro from "@/components/success/desktop/Intro";
import Footer from "@/components/home/desktop/Footer";

function Case1() {
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
                <Footer />
            </div>
        );
    }
}

export default Case1;
