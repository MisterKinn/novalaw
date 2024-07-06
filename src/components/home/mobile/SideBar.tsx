"use client";
import { openMenu, closeMenu } from "@/app/sidebar";
import "@/styles/sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <button className="openbtn" onClick={openMenu}>
                ☰ 메뉴 열기
            </button>

            <a className="closebtn" onClick={closeMenu}>
                <img
                    src="img/close.png"
                    alt="Close Menu"
                    className="close-img"
                />
            </a>

            <div className="sidebar-content">
                <a href="../#greeting">인사말</a>
                <a href="../#works">업무 소개</a>
                <a href="/members">구성원</a>
                <a href="/success">승소사례</a>
                <a href="/media">미디어 소개</a>
                <a href="/location">오시는 길</a>
                <h3 className="bottom-border">Contact Us</h3>
                <p className="sidebar-info">
                    Mail: <strong>nova@novalaw.kr</strong>
                    <br />
                    Tel: <strong>010-2697-4947</strong>
                    <br />
                    Fax: <strong>032-232-7047</strong>
                </p>
                <h3 className="bottom-border">Address</h3>
                <p className="sidebar-info">
                    인천 연수구 컨벤시아대로
                    <br />
                    165 2609호
                    <br />
                    (포스코타워, 26층)
                </p>
                <a
                    href="mailto:nova@novalaw.kr"
                    target="_blank"
                    title="상담 신청하기"
                >
                    <button className="join sidebar-join">상담 신청하기</button>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
