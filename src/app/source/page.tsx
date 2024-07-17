"use client";
import { useEffect } from "react";

const Redirect = () => {
    useEffect(() => {
        window.location.href = "https://github.com/MisterKinn/novalaw";
    }, []);
};

export default Redirect;
