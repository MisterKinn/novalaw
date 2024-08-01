"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Mobile/footer.css";
import "@/styles/Desktop/successes.css";
import "@/styles/Mobile/successes.css";
import "@/styles/Desktop/address.css";
import "@/styles/Mobile/address.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Intro from "@/components/address/desktop/Intro";
import Map from "@/components/address/desktop/Map";
import Footer from "@/components/home/desktop/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileIntro from "@/components/address/mobile/Intro";
import MobileMap from "@/components/address/mobile/Map";
import MobileFooter from "@/components/home/mobile/Footer";

function Address() {
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
                <MobileMap />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div>
                <NavBar />
                <StickyNav />
                <Intro />
                <Map />
                <Footer />
            </div>
        );
    }
}

export default Address;
