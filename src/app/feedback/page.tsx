"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Mobile/footer.css";
import "@/styles/Desktop/feedback.css";
import "@/styles/Mobile/feedback.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Intro from "@/components/feedback/desktop/Intro";
import Thanks from "@/components/feedback/desktop/Thanks";
import Footer from "@/components/home/desktop/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileIntro from "@/components/feedback/mobile/Intro";
import MobileThanks from "@/components/feedback/mobile/Thanks";
import MobileFooter from "@/components/home/mobile/Footer";

function Feedback() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
            <div id="page">
                <SideBar />
                <MobileIntro />
                <MobileThanks />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div>
                <NavBar />
                <StickyNav />
                <Intro />
                <Thanks />
                <Footer />
            </div>
        );
    }
}

export default Feedback;
