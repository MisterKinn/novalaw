"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/novalaw.css";

import NavBar from "@/components/home/NavBar";
import Home from "@/components/home/Home";
import Greeting from "@/components/home/Greeting";
import Works from "@/components/home/works";
import Success from "@/components/home/Success";
import Recruit from "@/components/home/Recruit";
import Footer from "@/components/home/Footer";

import SideBar from "@/components/home/mobile/SideBar";
import MobileHome from "@/components/home/mobile/Home";
import MobileGreeting from "@/components/home/mobile/Greeting";

function NovaLaw() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return (
        <div>
            <SideBar />
            <MobileHome />
            <MobileGreeting />
        </div>
        );
    } else {
        return (
            <div>
                <NavBar />
                <Home />
                <Greeting />
                <Works />
                <Success />
                <Recruit />
                <Footer />
            </div>
        );
    }
}

export default NovaLaw;
