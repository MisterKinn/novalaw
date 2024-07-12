"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Analytics } from "@vercel/analytics/react";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Mobile/footer.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Home from "@/components/home/desktop/Home";
import Works from "@/components/home/desktop/Works";
import Success from "@/components/home/desktop/Success";
import Media from "@/components/home/desktop/Media";
import Address from "@/components/home/desktop/Address";
import Consult from "@/components/home/desktop/Consult";
import Footer from "@/components/home/desktop/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileHome from "@/components/home/mobile/Home";
import MobileWorks from "@/components/home/mobile/Works";
import MobileSuccess from "@/components/home/mobile/Success";
import MobileMedia from "@/components/home/mobile/Media";
import MobileAddress from "@/components/home/mobile/Address";
import MobileConsult from "@/components/home/mobile/Consult";
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
                <Analytics />
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
                <Analytics />
                <NavBar />
                <StickyNav />
                <SideBar />
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
