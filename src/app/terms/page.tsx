"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";

import DesktopPage from "@/app/terms/desktop/page";
import MobilePage from "@/app/terms/mobile/page";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Footer from "@/components/home/desktop/Footer";

function Terms() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div id="page">
                <MobilePage />
            </div>
        );
    } else {
        return (
            <div id="page">
                <NavBar />
                <StickyNav />
                <DesktopPage />
                <Footer />
            </div>
        );
    }
}

export default Terms;
