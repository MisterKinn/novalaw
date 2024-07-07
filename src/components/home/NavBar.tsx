import "@/styles/Desktop/navbar.css";

function NavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <a href="../" title="노바법률사무소" id="logo">
                    <img
                        src="img/nova_logo.png"
                        className="logo-img"
                        alt="Nova Law Firm Logo"
                    />
                </a>

                <div className="topnav">
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

                    <a href="../success" title="고객후기">
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
            </nav>
        </div>
    );
}

export default NavBar;
