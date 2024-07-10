"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/style.css";
import "@/styles/Desktop/case.css";

import NavBar from "@/components/home/desktop/NavBar";
import StickyNav from "@/components/home/desktop/StickyNav";
import Case8 from "@/components/case/desktop/Case8";
import Footer from "@/components/home/desktop/Footer";

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
                <Case8 />
                <Footer />
            </div>
        );
    }
}

export default Case;
