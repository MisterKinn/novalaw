function Intro() {
    return (
        <div id="mobile-intro">
            <img
                src="img/works-bg-mobile.png"
                alt="업무 소개"
                className="mobile-works-bg"
            />

            <div className="mobile-works-container" data-aos="fade-up">
                <h2 className="mobile-works-title">업무 소개</h2>
                <h3 className="mobile-works-subtitle">
                    <span className="mobile-white">노바법률사무소</span>만의
                    특화된
                    <br />
                    <span className="mobile-white">대표 업무</span>를
                    소개합니다.
                </h3>
            </div>
        </div>
    );
}

export default Intro;
