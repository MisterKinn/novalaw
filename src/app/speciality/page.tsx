"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/speciality.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Intro from "@/components/speciality/desktop/Intro";
import Greeting from "@/components/speciality/desktop/Greeting";
import System from "@/components/speciality/desktop/System";
import Feedback from "@/components/speciality/desktop/Feedback";
import Consult from "@/components/speciality/desktop/Consult";
import Footer from "@/components/home/desktop/Footer";

function Speicality() {
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