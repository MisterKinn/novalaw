import "@/styles/Desktop/media.css";

function Media() {
    return (
        <div id="media">
            <img
                src="img/media-bg.png"
                alt="미디어 소개"
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
                    <h4 className="media-explain">
                        썸네일 클릭 시 영상으로 이동합니다.
                    </h4>

                    <a
                        href="/media"
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
                        <a
                            href="https://www.youtube.com/watch?v=kS6pdJkLPio&t=392s"
                            target="_blank"
                            title="'오타지적' 고등학생 고소 불송치 결정! | 경찰조사 서류 읽어보기"
                        >
                            <img
                                src="img/media-donho-2.jpg"
                                alt="'오타지적' 고등학생 고소 불송치 결정! | 경찰조사 서류 읽어보기"
                            />
                            <p>
                                '오타지적' 고등학생 고소 불송치 결정!
                                <br />
                                경찰조사 서류 읽어보기
                            </p>
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
