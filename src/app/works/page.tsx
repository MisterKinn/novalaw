"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/works.css";

import NavBar from "@/components/home/NavBar";
import StickyNav from "@/components/home/StickyNav";
import Intro from "@/components/works/desktop/Intro";
import Work from "@/components/works/desktop/Works";
import Footer from "@/components/home/Footer";

function Works() {
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
            <div id="page">
                <NavBar />
                <StickyNav />
                <Intro />
                <Work />
                <Footer />
            </div>
        );
    }
}

export default Works;
