import "@/styles/Desktop/media.css";

function Media() {
    return (
        <div id="media">
            <img
                src="img/media-bg.png"
                alt="노바 업무분야"
                className="media-bg"
            />

            <div className="media-container">
                <div data-aos="fade-up">
                    <h2 className="media-title">미디어 소개</h2>
                    <h3 className="media-subtitle">
                        이돈호 변호사 TV, 노바법률사무소 TV, 방송 출연 등
                        <br />
                        여러 미디어에 소개된 노바법률사무소를 살펴보세요.
                    </h3>

                    <a
                        href="#"
                        target="_blank"
                        title="미디어 소개 보러가기"
                        className="media-link"
                    >
                        <div className="media-button">
                            <p>미디어 소개 보러가기 {">"}</p>
                        </div>
                    </a>
                </div>

                <div className="video-container" data-aos="fade-up">
                    <div>
                        <a href="#">
                            <img src="img/youtube.jpg" alt="" />
                            <p>YouTube 제목</p>
                        </a>
                    </div>

                    <div>
                        <a href="#">
                            <img src="img/youtube.jpg" alt="" />
                            <p>YouTube 제목</p>
                        </a>
                    </div>

                    <div>
                        <a href="#">
                            <img src="img/youtube.jpg" alt="" />
                            <p>YouTube 제목</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;
