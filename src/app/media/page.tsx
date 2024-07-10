"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/media.css";
import "@/styles/Mobile/media.css";
import "@/styles/Desktop/navbar.css";
import "@/styles/Desktop/stickynav.css";
import "@/styles/Desktop/footer.css";

import NavBar from "@/app/components/home/desktop/NavBar";
import StickyNav from "@/app/components/home/desktop/StickyNav";
import Intro from "@/app/components/media/desktop/Intro";
import Donho from "@/app/components/media/desktop/Donho";
import Nova from "@/app/components/media/desktop/Nova";
import Broadcast from "@/app/components/media/desktop/Broadcast";
import Footer from "@/app/components/home/desktop/Footer";

import SideBar from "@/app/components/home/mobile/SideBar";
import MobileIntro from "@/app/components/media/mobile/Intro";
import MobileDonho from "@/app/components/media/mobile/Donho";
import MoblieNova from "@/app/components/media/mobile/Nova";
import MoblieBroadcast from "@/app/components/media/mobile/Broadcast";
import MobileFooter from "@/app/components/home/mobile/Footer";

function Media() {
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
                <MobileDonho />
                <MoblieNova />
                <MoblieBroadcast />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div id="page">
                <NavBar />
                <StickyNav />
                <Intro />
                <Donho />
                <Nova />
                <Broadcast />
                <Footer />
            </div>
        );
    }
}

export default Media;
