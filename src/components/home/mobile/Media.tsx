import "@/styles/Mobile/media.css";

function Media() {
    return (
        <div id="mobile-media">
            <img
                src="img/media-bg-mobile.png"
                alt="미디어 소개"
                className="mobile-media-bg"
            />

            <div className="mobile-media-container">
                <div data-aos="fade-up">
                    <h2 className="mobile-media-title">미디어 소개</h2>
                    <h3 className="mobile-media-subtitle">
                        이돈호 변호사 TV, 노바법률사무소 TV,
                        <br />
                        방송 출연 등 여러 미디어에 소개된
                        <br />
                        노바법률사무소를 살펴보세요.
                    </h3>

                    <a
                        href="/media"
                        title="미디어 소개 보러가기"
                        className="mobile-media-link"
                    >
                        <div className="mobile-media-button">
                            <p>미디어 소개 보러가기 {">"}</p>
                        </div>
                    </a>
                </div>

                <div className="mobile-video-container" data-aos="fade-up">
                    <div>
                        <a
                            href="https://www.youtube.com/watch?v=o5BiDQ5-FEM"
                            target="_blank"
                            title="무급법률담당관"
                        >
                            <img
                                src="img/media-donho-1.jpg"
                                alt="무급법률담당관"
                            />
                            <p>무급법률담당관</p>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.youtube.com/watch?v=AWw_55EvzcQ">
                            <img src="img/media-nova-1.jpg" alt="" />
                            <p>
                                [SBS 모닝와이드 날]
                                <br />
                                신림동 출근길 특수강간
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;
