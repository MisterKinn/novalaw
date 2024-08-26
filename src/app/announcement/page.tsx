"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Mobile/footer.css";
import "@/styles/Desktop/announcement.css";
import "@/styles/Mobile/successes.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Intro from "@/components/announcement/desktop/Intro";
import Posts from "@/components/announcement/desktop/Posts";
import Footer from "@/components/home/desktop/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileIntro from "@/components/success/mobile/Intro";
import MobileCases from "@/components/success/mobile/Cases";
import MobileFooter from "@/components/home/mobile/Footer";

function Announcement() {
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
                <MobileCases />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div>
                <NavBar />
                <StickyNav />
                <Intro />
                <Posts />
                <Footer />
            </div>
        );
    }
}

export default Announcement;
