"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/speciality.css";
import "@/styles/Mobile/speciality.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Intro from "@/components/speciality/desktop/Intro";
import Greeting from "@/components/speciality/desktop/Greeting";
import System from "@/components/speciality/desktop/System";
import Feedback from "@/components/speciality/desktop/Feedback";
import Consult from "@/components/speciality/desktop/Consult";
import Footer from "@/components/home/desktop/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileIntro from "@/components/speciality/mobile/Intro";
import MobileGreeting from "@/components/speciality/mobile/Greeting";
import MobileSystem from "@/components/speciality/mobile/System";
import MobileFeedback from "@/components/speciality/mobile/Feedback";
import MobileConsult from "@/components/speciality/mobile/Consult";
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
                <System />
                <Feedback />
                <Consult />
                <Footer />
            </div>
        );
    }
}

export default Speicality;
