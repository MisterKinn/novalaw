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
                            href="https://www.youtube.com/watch?v=lZ_CZ5H3Vd8"
                            target="_blank"
                            title='"결혼하고 싶습니다...!!" 개업 변호사의 결혼정보회사 방문기'
                        >
                            <img
                                src="img/media-donho-1.jpg"
                                alt='"결혼하고 싶습니다...!!" 개업 변호사의 결혼정보회사 방문기'
                            />
                            <p>
                                "결혼하고 싶습니다...!!"
                                <br />
                                개업 변호사의 결혼정보회사 방문기
                            </p>
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.youtube.com/watch?v=o5BiDQ5-FEM"
                            target="_blank"
                            title="무급법률담당관"
                        >
                            <img
                                src="img/media-donho-2.jpg"
                                alt="무급법률담당관"
                            />
                            <p>무급법률담당관</p>
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.youtube.com/watch?v=iLT4XV6XCgE"
                            target="_blank"
                            title="캐스트유의 그 '지평좌', 모셔서 이야기 나눠봤습니다"
                        >
                            <img
                                src="img/media-donho-3.jpg"
                                alt="캐스트유의 그 '지평좌', 모셔서 이야기 나눠봤습니다"
                            />
                            <p>
                                캐스트유의 그 '지평좌',
                                <br />
                                모셔서 이야기 나눠봤습니다
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;
