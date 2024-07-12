function Nova() {
    return (
        <div id="media">
            <img
                src="img/nova-bg.png"
                alt="노바법률사무소 YouTube"
                className="media-bg full-bright"
            />
            <div className="media-container">
                <div data-aos="fade-up">
                    <div className="margin-top" />
                    <h2 className="media-title" id="black">
                        노바법률사무소 YouTube
                    </h2>
                    <h3 className="media-subtitle">
                        다양한 미디어에서 소개된 노바법률사무소의 모습들을
                        알아보세요.
                    </h3>
                    <a
                        href="https://www.youtube.com/@nova_law"
                        target="_blank"
                        title="노바법률사무소 YouTube"
                        className="media-link"
                    >
                        <div className="media-button wide-width">
                            <img
                                src="img/media-youtube.png"
                                alt="노바법률사무소 YouTube"
                            />
                            <p>노바법률사무소 YouTube 보러가기 {">"}</p>
                        </div>
                    </a>
                </div>

                <div className="video-container" data-aos="fade-up">
                    <div>
                        <a href="https://www.youtube.com/watch?v=AWw_55EvzcQ">
                            <img src="img/media-nova-1.jpg" alt="" />
                            <p id="black">
                                [SBS 모닝와이드 날]
                                <br />
                                신림동 출근길 특수강간
                            </p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/watch?v=5EpLqMeR-Xs">
                            <img src="img/media-nova-2.jpg" alt="" />
                            <p id="black">
                                [SBS 모닝와이드 날]
                                <br />
                                주차시비 살인
                            </p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/watch?v=4lI6e37Q7ks">
                            <img src="img/media-nova-3.jpg" alt="" />
                            <p id="black">
                                [SBS 모닝와이드 빅데이터]
                                <br />
                                고속도로 사고대처 방법
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nova;
