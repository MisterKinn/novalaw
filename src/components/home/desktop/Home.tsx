import "@/styles/Desktop/home.css";

function Home() {
    return (
        <div id="home">
            <header className="header">
                <img
                    src="img/posco.png"
                    alt="노바법률사무소"
                    className="header-img"
                />

                <div className="text-container">
                    <div data-aos="fade-up">
                        <img
                            src="img/novalaw-icon.png"
                            alt="Nova Logo"
                            className="header-icon"
                        />
                        <h2 className="sub-title">
                            의뢰인의 든든한 법률 파트너,
                        </h2>
                        <h1 className="title">노바법률사무소입니다.</h1>

                        <a
                            href="/speciality"
                            title="CEO 인사말 보러가기"
                            className="greeting-button"
                        >
                            <div>
                                <p>노바의 특별함 보러가기 {">"}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;