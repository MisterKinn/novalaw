"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/case.css";

import NavBar from "@/app/components/home/desktop/NavBar";
import StickyNav from "@/app/components/home/desktop/StickyNav";
import Case5 from "@/app/components/case/desktop/Case5";
import Footer from "@/app/components/home/desktop/Footer";

function Case() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return <div id="page"></div>;
    } else {
        return (
            <div>
                <NavBar />
                <StickyNav />
                <Case5 />
                <Footer />
            </div>
        );
    }
}

export default Case;
