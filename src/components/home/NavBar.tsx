import "@/styles/navbar.css";

function NavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <a
                    href="https://novalaw.kr"
                    target="_blank"
                    title="노바법률사무소"
                    id="logo"
                >
                    <img
                        src="img/novalaw-icon.png"
                        className="logo-img"
                        alt="Nova Law Firm Logo"
                    />
                    <span className="logo-text">노바법률사무소</span>
                </a>

                <div className="topnav">
                    <a href="#greeting" title="인사말">
                        인사말
                    </a>
                    <a href="#works" title="업무 소개">
                        업무 소개
                    </a>
                    <a href="/members" target="_blank" title="구성원">
                        구성원
                    </a>
                    <a href="/success" target="_blank" title="승소사례">
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
