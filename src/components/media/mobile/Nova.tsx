function Nova() {
    return (
        <div id="mobile-media">
            <img
                src="img/media-nova-bg-mobile.png"
                alt="노바법률사무소 YouTube"
                className="mobile-media-bg mobile-full-bright"
            />
            <div className="mobile-media-container">
                <div data-aos="fade-up">
                    <div className="mobile-margin-top" />
                    <h2 className="mobile-media-title2" id="black">
                        노바법률사무소 YouTube
                    </h2>
                    <h3 className="mobile-media-subtitle">
                        풍부한 사건처리 데이터와 노하우를 바탕으로
                        <br />
                        의뢰인의 편에서 솔루션을 제시하는
                        <br />
                        노바법률사무소입니다.
                    </h3>
                    <a
                        href="https://www.youtube.com/@nova_law"
                        target="_blank"
                        title="노바법률사무소 YouTube"
                        className="mobile-media-link"
                    >
                        <div className="mobile-media-button mobile-wide-width">
                            <img
                                src="img/media-youtube.png"
                                alt="노바법률사무소 YouTube"
                            />
                            <p>노바법률사무소 YouTube 보러가기 {">"}</p>
                        </div>
                    </a>
                </div>
                <div className="mobile-video-container" data-aos="fade-up">
                    <div>
                        <a href="#">
                            <img src="img/media-nova-1.jpg" alt="" />
                            <p id="black">
                                [SBS 모닝와이드 날]
                                <br />
                                신림동 출근길 특수강간
                            </p>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="img/media-nova-2.jpg" alt="" />
                            <p id="black">
                                [SBS 모닝와이드 날]
                                <br />
                                주차시비 살인
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nova;