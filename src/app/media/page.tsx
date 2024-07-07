"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/media.css";
import "@/styles/Desktop/navbar.css";
import "@/styles/Desktop/stickynav.css";
import "@/styles/Desktop/footer.css";

import NavBar from "@/components/home/NavBar";
import StickyNav from "@/components/home/StickyNav";
import Intro from "@/components/media/desktop/Intro";
import Donho from "@/components/media/desktop/Donho";
import Nova from "@/components/media/desktop/Nova";
import Broadcast from "@/components/media/desktop/Broadcast";
import Footer from "@/components/home/Footer";
// import MobilePage from "@/app/media/mobile/page";

function Media() {
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
                <Donho />
                <Nova />
                <Broadcast />
                <Footer />
            </div>
        );
    }
}

export default Media;
