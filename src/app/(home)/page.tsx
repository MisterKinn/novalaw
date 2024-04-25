"use client";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AOS from "aos";
import "@/styles/aos.css";
import "@/styles/novalaw.css";

import NavBar from "@/components/home/NavBar";
import Home from "@/components/home/Home";
import Greeting from "@/components/home/greeting";
import Works from "@/components/home/works";
import Success from "@/components/home/success";
import Recruit from "@/components/home/recruit";
import Footer from "@/components/home/Footer";

function NovaLaw() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    if (isMobile) {
        return <div></div>;
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
