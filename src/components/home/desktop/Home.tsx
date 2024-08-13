import "@/styles/Desktop/home.css";
import { closePopup } from "@/app/closePopup";

function Home() {
    return (
        <div id="home">
            <header className="header">
                <img
                    src="img/posco.png"
                    alt="노바법률사무소"
                    className="header-img"
                />

                <div className="popup-container" data-aos="fade-up">
                    <div>
                        <img
                            src="img/close-img.png"
                            alt=""
                            className="popup-close-img"
                            onClick={closePopup}
                        />

                        <img
                            src="img/popup.png"
                            alt="PopUp"
                            className="popup-img"
                        />
                    </div>
                </div>

                <div className="text-container">
                    <div data-aos="fade-up">
                        <img
                            src="img/novalaw-icon.png"
                            alt="Nova Logo"
                            className="header-icon"
                        />
                        <h2 className="sub-title">의뢰인 밀착 케어 시스템</h2>
                        <h1 className="title">노바법률사무소 입니다</h1>

                        <a
                            href="/system"
                            title="노바의 시스템 보러가기"
                            className="greeting-button"
                        >
                            <div>
                                <p>노바와 함께하기 →</p>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
