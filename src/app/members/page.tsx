"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/members.css";
import "@/styles/Mobile/members.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Intro from "@/components/members/desktop/Intro";
import Ceo from "@/components/members/desktop/Ceo";
import Employees from "@/components/members/desktop/Employees";
import Footer from "@/components/home/desktop/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileIntro from "@/components/members/mobile/Intro";
import MobileCeo from "@/components/members/mobile/Ceo";
import MobileEmployees from "@/components/members/mobile/Employees";
import MobileFooter from "@/components/home/mobile/Footer";

function Members() {
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
                <MobileCeo />
                <MobileEmployees />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div>
                <NavBar />
                <StickyNav />
                <Intro />
                <Ceo />
                <Employees />
                <Footer />
            </div>
        );
    }
}

export default Members;
