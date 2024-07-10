"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/members.css";
import "@/styles/Mobile/members.css";

import NavBar from "@/app/components/home/desktop/NavBar";
import StickyNav from "@/app/components/home/desktop/StickyNav";
import Intro from "@/app/components/members/desktop/Intro";
import Ceo from "@/app/components/members/desktop/Ceo";
import Employees from "@/app/components/members/desktop/Employees";
import Footer from "@/app/components/home/desktop/Footer";

import SideBar from "@/app/components/home/mobile/SideBar";
import MobileIntro from "@/app/components/members/mobile/Intro";
import MobileCeo from "@/app/components/members/mobile/Ceo";
import MobileEmployees from "@/app/components/members/mobile/Employees";
import MobileFooter from "@/app/components/home/mobile/Footer";

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
