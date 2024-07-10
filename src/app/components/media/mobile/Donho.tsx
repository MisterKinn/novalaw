function Donho() {
    return (
        <div id="mobile-media">
            <img
                src="img/media-bg-mobile.png"
                alt="이돈호 변호사 YouTube"
                className="mobile-media-bg"
            />

            <div className="mobile-media-container">
                <div data-aos="fade-up">
                    <h2 className="mobile-media-title2">
                        이돈호 변호사 YouTube
                    </h2>
                    <h3 className="mobile-media-subtitle">
                        노바법률사무소의 대표변호사
                        <br />
                        이돈호 변호사의 유튜브를 통해
                        <br />
                        최신 법률 소식을 확인해보세요.
                    </h3>

                    <a
                        href="https://www.youtube.com/@%EC%9D%B4%EB%8F%88%ED%98%B8%EB%B3%80%ED%98%B8%EC%82%AC"
                        target="_blank"
                        title="이돈호 변호사 YouTube"
                        className="mobile-media-link"
                    >
                        <div className="mobile-media-button mobile-wide-width">
                            <img
                                src="img/media-youtube.png"
                                alt="이돈호 변호사 YouTube"
                            />
                            <p>이돈호 변호사 YouTube 보러가기 {">"}</p>
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
                                '오타지적' 고등학생
                                <br />
                                고소 불송치 결정!
                                <br />
                                경찰조사 서류 읽어보기
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donho;
