function Nova() {
    return (
        <div id="media">
            <img
                src="img/broadcast-bg.png"
                alt="방송 출연"
                className="media-bg full-bright"
            />
            <div className="media-container">
                <div data-aos="fade-up">
                    <div className="margin-top" />
                    <h2 className="media-title">방송 출연</h2>
                    <h3 className="media-subtitle">
                        노바법률사무소의 대표 이돈호 변호사가 출연한
                        <br />
                        법률 해결 미디어를 살펴보세요.
                    </h3>
                </div>

                <div className="video-container" data-aos="fade-up">
                    <div>
                        <a
                            href="https://www.youtube.com/watch?v=AWw_55EvzcQ"
                            target="_blank"
                        >
                            <img
                                src="img/media-broadcast-1.jpg"
                                alt="SBS 저녁 인터뷰 - '공중협박죄' 신설에 관여"
                            />
                            <p>
                                SBS 저녁 인터뷰-
                                <br />
                                '공중협박죄' 신설에 관여
                            </p>
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.youtube.com/watch?v=5EpLqMeR-Xs"
                            target="_blank"
                        >
                            <img
                                src="img/media-broadcast-2.jpg"
                                alt="[이돈호 변호사 진행] '공황장애' 산재사건에서 승소"
                            />
                            <p>
                                [이돈호 변호사 진행]
                                <br />
                                '공황장애' 산재사건에서 승소
                            </p>
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.youtube.com/watch?v=4lI6e37Q7ks"
                            target="_blank"
                        >
                            <img
                                src="img/media-broadcast-3.jpg"
                                alt="[이돈호 변호사 진행] 구속영장을 기각시킨 사례"
                            />
                            <p>
                                [이돈호 변호사 진행]
                                <br />
                                구속영장을 기각시킨 사례
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nova;
