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
                    <h2 className="mobile-media-title">방송 출연</h2>
                    <h3 className="mobile-media-subtitle">
                        노바법률사무소의 대표 이돈호 변호사가 출연한
                        <br />
                        법률 해결 미디어를 살펴보세요.
                    </h3>
                </div>

                <div className="mobile-video-container" data-aos="fade-up">
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

export default Broadcast;
