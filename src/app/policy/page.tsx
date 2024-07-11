"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Mobile/footer.css";

import DesktopPage from "@/app/policy/desktop/page";
import MobilePage from "@/app/policy/mobile/page";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Footer from "@/components/home/desktop/Footer";

function Policy() {
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

export default Policy;
