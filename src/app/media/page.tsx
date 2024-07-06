"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/desktop/media.css";
import "@/styles/desktop/navbar.css";
import "@/styles/desktop/stickynav.css";
import "@/styles/desktop/footer.css";

import NavBar from "@/components/home/NavBar";
import StickyNav from "@/components/home/StickyNav";
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
                <Donho />
                <Nova />
                <Broadcast />
                <Footer />
            </div>
        );
    }
}

export default Media;
