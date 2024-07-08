"use client";
import { openMenu, closeMenu } from "@/app/sidebar";
import "@/styles/Mobile/sidebar.css";

function Sidebar() {
    return (
        <div>
            <div className="menu-container">
                <a href="../">
                    <img
                        src="img/nova_logo_black.png"
                        alt="노바법률사무소"
                        className="menu-logo"
                    />
                </a>
                <img
                    src="img/openbtn.png"
                    alt="메뉴 열기"
                    className="openbtn"
                    onClick={openMenu}
                />
            </div>

            <div className="sidebar">
                <div className="sidebar-content">
                    <a href="../">
                        <img
                            src="img/nova_logo_black.png"
                            alt="노바법률사무소"
                            className="sidebar-logo"
                        />
                    </a>
                    <a className="closebtn" onClick={closeMenu}>
                        <img
                            src="img/close.png"
                            alt="Close Menu"
                            className="close-img"
                        />
                    </a>
                    <a href="../speciality" title="노바의 특별함">
                        노바의 특별함
                    </a>
                    <a href="../#works" title="업무분야">
                        업무분야
                    </a>
                    <a href="../members" title="구성원">
                        구성원
                    </a>
                    <a href="../success" title="승소사례">
                        승소사례
                    </a>
                    <a href="../feedback" title="고객후기">
                        고객후기
                    </a>
                    <a href="../media" title="미디어 소개">
                        미디어 소개
                    </a>
                    <a href="../#address" title="오시는 길">
                        오시는 길
                    </a>
                    <a href="../#consult" title="상담문의">
                        상담문의
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
