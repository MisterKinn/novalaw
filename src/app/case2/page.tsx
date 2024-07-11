"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Mobile/footer.css";
import "@/styles/Desktop/case.css";
import "@/styles/Mobile/case.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Case2 from "@/components/case/desktop/Case2";
import Footer from "@/components/home/desktop/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileCase2 from "@/components/case/mobile/Case2";
import MobileFooter from "@/components/home/mobile/Footer";

function Case() {
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
                <MobileCase2 />
                <MobileFooter />
            </div>
        );
    } else {
        return (
            <div>
                <NavBar />
                <StickyNav />
                <Case2 />
                <Footer />
            </div>
        );
    }
}

export default Case;
