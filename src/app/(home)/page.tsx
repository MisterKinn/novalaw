"use client";
import Sidebar from "../../components/home/sidebar";
import Home from "../../components/home/Home";
import Greeting from "../../components/home/greeting";
import Works from "../../components/home/works";
import Success from "../../components/home/success";
import Recruit from "../../components/home/recruit";
import Footer from "../../components/home/Footer";
import "../../styles/novalaw.css";

function Novalaw() {
    return (
        <div>
            <Sidebar />
            <Home />
            <Greeting />
            <Works />
            <Success />
            <Recruit />
            <Footer />
        </div>
    );
}

export default Novalaw;
