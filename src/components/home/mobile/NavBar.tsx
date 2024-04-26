import "@/styles/navbar.css";

function NavBar() {
    return (
        <div>
            <nav id="mobile-nav-bar">
                <a href="../" title="노바법률사무소" id="mobile-logo">
                    <img
                        src="img/novalaw-icon.png"
                        className="mobile-logo-img"
                        alt="Nova Law Firm Logo"
                    />
                    <span className="mobile-logo-text">노바법률사무소</span>
                </a>

                <div className="topnav mobile-nav">
                    <a href="../#greeting" title="인사말">
                        인사말
                    </a>
                    <a href="../#works" title="업무 소개">
                        업무 소개
                    </a>
                    <a href="/members" title="구성원">
                        구성원
                    </a>
                    <a href="/success" title="승소사례">
                        승소사례
                    </a>
                    <a href="#" title="미디어 소개">
                        미디어 소개
                    </a>
                    <a href="#" title="오시는 길">
                        오시는 길
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
