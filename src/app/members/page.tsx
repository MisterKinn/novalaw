"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";

import NavBar from "@/components/home/NavBar";
import StickyNav from "@/components/home/StickyNav";

import DesktopPage from "@/app/members/desktop/page";
import MobilePage from "@/app/members/mobile/page";

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
                <MobilePage />
            </div>
        );
    } else {
        return (
            <div id="page">
                <NavBar />
                <StickyNav />
                <DesktopPage />
            </div>
        );
    }
}

export default Members;
