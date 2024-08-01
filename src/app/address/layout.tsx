import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "오시는 길ㅣ노바법률사무소",
    description: "법률서비스의 새로운 시작을 알리는 노바법률사무소입니다.",
    icons: {
        icon: "img/novalaw-icon.png",
    },
    other: {
        url: "img/posco.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className} id="main">
                {children}
            </body>
        </html>
    );
}
