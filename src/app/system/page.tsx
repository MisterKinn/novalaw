"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Mobile/footer.css";
import "@/styles/Desktop/system.css";
import "@/styles/Mobile/system.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Intro from "@/components/system/desktop/Intro";
import Greeting from "@/components/system/desktop/Greeting";
import Point from "@/components/system/desktop/Point";
import System from "@/components/system/desktop/System";
import Feedback from "@/components/system/desktop/Feedback";
import Consult from "@/components/system/desktop/Consult";
import Footer from "@/components/home/desktop/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileIntro from "@/components/system/mobile/Intro";
import MobileGreeting from "@/components/system/mobile/Greeting";
import MobilePoint from "@/components/system/mobile/Point";
import MobileSystem from "@/components/system/mobile/System";
import MobileFeedback from "@/components/system/mobile/Feedback";
import MobileConsult from "@/components/system/mobile/Consult";
import MobileFooter from "@/components/home/mobile/Footer";

function Speicality() {
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
                <MobileGreeting />
                <MobilePoint />
                <MobileSystem />
                <MobileFeedback />
                <MobileConsult />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <NavBar />
                <StickyNav />
                <Intro />
                <Greeting />
                <Point />
                <System />
                <Feedback />
                <Consult />
                <Footer />
            </div>
        );
    }
}

export default Speicality;
