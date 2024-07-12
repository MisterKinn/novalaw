function Broadcast() {
    return (
        <div id="mobile-media">
            <img
                src="img/media-broadcast-bg-mobile.png"
                alt="방송 출연"
                className="mobile-media-bg"
            />

            <div className="mobile-media-container">
                <div data-aos="fade-up">
                    <div className="mobile-margin-top" />
                    <h2 className="mobile-media-title" id="black">
                        방송 출연
                    </h2>
                    <h3 className="mobile-media-subtitle" id="mobile-gray">
                        노바법률사무소의 대표 이돈호 변호사가 출연한
                        <br />
                        법률 해결 미디어를 살펴보세요.
                    </h3>
                </div>

                <div className="mobile-video-container" data-aos="fade-up">
                    <div>
                        <a href="https://www.youtube.com/watch?v=AWw_55EvzcQ">
                            <img
                                src="img/media-broadcast-1.jpg"
                                alt="SBS 저녁 인터뷰 - '공중협박죄' 신설에 관여"
                            />
                            <p id="black">
                                SBS 저녁 인터뷰-
                                <br />
                                '공중협박죄' 신설에 관여
                            </p>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.youtube.com/watch?v=5EpLqMeR-Xs">
                            <img
                                src="img/media-broadcast-2.jpg"
                                alt="[이돈호 변호사 진행] '공황장애' 산재사건에서 승소"
                            />
                            <p id="black">
                                [이돈호 변호사 진행]
                                <br />
                                '공황장애' 산재사건에서 승소
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Broadcast;
