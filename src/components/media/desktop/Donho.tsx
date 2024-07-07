function Donho() {
    return (
        <div id="media">
            <img
                src="img/media-bg.png"
                alt="이돈호 변호사 YouTube"
                className="media-bg"
            />

            <div className="media-container">
                <div data-aos="fade-up">
                    <div className="margin-top" />
                    <h2 className="media-title">이돈호 변호사 YouTube</h2>
                    <h3 className="media-subtitle">
                        노바법률사무소의 대표변호사
                        <br />
                        이돈호 변호사의 유튜브를 통해 최신 법률 소식을
                        확인해보세요.
                    </h3>
                    <a
                        href="https://www.youtube.com/@%EC%9D%B4%EB%8F%88%ED%98%B8%EB%B3%80%ED%98%B8%EC%82%AC"
                        target="_blank"
                        title="이돈호 변호사 YouTube"
                        className="media-link"
                    >
                        <div className="media-button wide-width">
                            <img
                                src="img/media-youtube.png"
                                alt="이돈호 변호사 YouTube"
                            />
                            <p>이돈호 변호사 YouTube 보러가기 {">"}</p>
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

export default Donho;
