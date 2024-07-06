"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";

import NavBar from "@/components/home/NavBar";
import Home from "@/components/home/Home";
import Greeting from "@/components/home/Greeting";
import Works from "@/components/home/Works";
import Success from "@/components/home/Success";
import Media from "@/components/home/Media";
import Address from "@/components/home/Address";
import Consult from "@/components/home/Consult";
import Footer from "@/components/home/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileHome from "@/components/home/mobile/Home";
import MobileGreeting from "@/components/home/mobile/Greeting";
import MobileWorks from "@/components/home/mobile/Works";
import MobileSuccess from "@/components/home/mobile/Success";
import MobileRecruit from "@/components/home/mobile/Recruit";
import MobileFooter from "@/components/home/mobile/Footer";

function NovaLaw() {
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
                <MobileHome />
                <MobileGreeting />
                <MobileWorks />
                <MobileSuccess />
                <MobileRecruit />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <NavBar />
                <Home />
                <Works />
                <Success />
                <Media />
                <Address />
                <Consult />
                <Footer />
            </div>
        );
    }
}

export default NovaLaw;
