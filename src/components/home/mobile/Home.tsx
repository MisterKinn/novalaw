import "@/styles/Mobile/home.css";

function Home() {
    return (
        <div id="home">
            <header className="header">
                <img
                    src="img/posco-mobile.png"
                    alt="노바법률사무소"
                    className="mobile-header-img"
                />

                <div className="text-container">
                    <div data-aos="fade-up">
                        <img
                            src="img/novalaw-icon.png"
                            alt="Nova Logo"
                            className="mobile-header-icon"
                        />
                        <h2 className="mobile-title">노바법률사무소 입니다.</h2>
                        <h1 className="mobile-subtitle">
                            이제 안심하셔도 좋습니다.
                        </h1>

                        <a
                            href="/speciality"
                            title="CEO 인사말 보러가기"
                            className="mobile-greeting-button"
                        >
                            <div>
                                <p>왜 안심해도 좋냐고요?</p>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
