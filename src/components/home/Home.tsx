"use client";
import React, { useState, useEffect } from "react";
import "../../styles/novalaw.css";
import AOS from "aos";
import "../../styles/aos.css";

function RoadMap() {
    const [imgSrc, setImgSrc] = useState("img/posco.png");

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        const handleResize = () => {
            if (window.innerWidth < 850) {
                setImgSrc("img/gmsh-mobile.png");
            } else {
                setImgSrc("img/posco.png");
            }
        };

        if (window.performance) {
            if (performance.navigation.type === 1) {
                // Detect Refresh
                handleResize();
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <header className="header">
                <img src={imgSrc} alt="GMSH RoadMap" className="header-img" />
                <div className="text-container">
                    <h1 className="title" data-aos="fade-up">
                        의뢰인의 든든한 법률 파트너,
                        <br />
                        노바법률사무소입니다.
                    </h1>
                </div>
            </header>
        </div>
    );
}

export default RoadMap;
