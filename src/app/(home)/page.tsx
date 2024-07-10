"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";

import NavBar from "@/app/components/home/desktop/NavBar";
import StickyNav from "@/app/components/home/desktop/StickyNav";
import Home from "@/app/components/home/desktop/Home";
import Works from "@/app/components/home/desktop/Works";
import Success from "@/app/components/home/desktop/Success";
import Media from "@/app/components/home/desktop/Media";
import Address from "@/app/components/home/desktop/Address";
import Consult from "@/app/components/home/desktop/Consult";
import Footer from "@/app/components/home/desktop/Footer";

import SideBar from "@/app/components/home/mobile/SideBar";
import MobileHome from "@/app/components/home/mobile/Home";
import MobileWorks from "@/app/components/home/mobile/Works";
import MobileSuccess from "@/app/components/home/mobile/Success";
import MobileMedia from "@/app/components/home/mobile/Media";
import MobileAddress from "@/app/components/home/mobile/Address";
import MobileConsult from "@/app/components/home/mobile/Consult";
import MobileFooter from "@/app/components/home/mobile/Footer";

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
                <MobileWorks />
                <MobileSuccess />
                <MobileMedia />
                <MobileAddress />
                <MobileConsult />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <NavBar />
                <StickyNav />
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
