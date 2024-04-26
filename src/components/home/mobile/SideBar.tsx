import "@/styles/sidebar.css";
import { openMenu, closeMenu } from "../../../app/sidebar";

function Sidebar() {
    return (
        <div className="sidebar">
            <button className="openbtn" onClick={openMenu}>
                ☰ 메뉴 열기
            </button>

            <a className="closebtn" onClick={closeMenu}>
                <img src="img/close.png" alt="Close Menu" className="close-img" />
            </a>

            <a href="#greeting">인사말</a>
            <a href="#works">업무 소개</a>
            <a href="/members">구성원</a>
            <a href="#">승소사례</a>
            <a href="#">미디어 소개</a>
            <a href="#">오시는 길</a>

            <h3 className="bottom-border">Contact Us</h3>
            <p className="sidebar-info">
                Mail: <strong>nova@novalaw.kr</strong>
                <br />
                Tel: <strong>032-212-4047</strong>
                <br />
                Fax: <strong>032-232-7047</strong>
            </p>

            <h3 className="bottom-border">Address</h3>
            <p className="sidebar-info">
                인천 연수구 컨벤시아대로
                <br />
                165 2625호
                <br />
                (포스코타워, 26층)
            </p>

            <a href="mailto:nova@novalaw.kr" target="_blank" title="상담 신청하기">
                <button className="join sidebar-join">상담 신청하기</button>
            </a>
        </div>
    );
}

export default Sidebar;
