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
                            href="https://www.youtube.com/watch?v=1-HbRDsO-PQ"
                            target="_blank"
                            title="이혼 1타 강사(미혼)가 알렝꼬와 꾼맨 사건으로 말아주는 국내법상의 이혼"
                        >
                            <img
                                src="img/media-donho-1.jpg"
                                alt="이혼 1타 강사(미혼)가 알렝꼬와 꾼맨 사건으로 말아주는 국내법상의 이혼"
                            />
                            <p>
                                이혼 1타 강사(미혼)가 알렝꼬와 꾼맨
                                <br />
                                사건으로 말아주는 국내법상의 이혼
                            </p>
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.youtube.com/watch?v=B9WFSPdDdTg"
                            target="_blank"
                            title="김호중이 무죄라고 주장하는 형사 전문 변호사..."
                        >
                            <img
                                src="img/media-donho-2.jpg"
                                alt="김호중이 무죄라고 주장하는 형사 전문 변호사..."
                            />
                            <p>
                                김호중이 무죄라고 주장하는
                                <br />
                                형사 전문 변호사...
                            </p>
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.youtube.com/watch?v=Yuo8W5J_qco"
                            target="_blank"
                            title="2사단 훈련병 사망 사건이 집행유예 일 수 밖에 없는 이유..."
                        >
                            <img
                                src="img/media-donho-3.jpg"
                                alt="2사단 훈련병 사망 사건이 집행유예 일 수 밖에 없는 이유..."
                            />
                            <p>
                                2사단 훈련병 사망 사건이
                                <br />
                                집행유예 일 수 밖에 없는 이유...
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;
