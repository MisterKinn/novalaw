function Intro() {
    return (
        <div id="intro">
            <img
                src="img/members-bg.png"
                alt="업무 소개"
                className="works-bg"
            />

            <div className="works-container" data-aos="fade-up">
                <h2 className="works-title">업무 소개</h2>
                <h3 className="works-subtitle">
                    <span className="white">노바법률사무소</span>만의 특화된
                    <br />
                    <span className="white">대표 업무</span>를 소개합니다.
                </h3>
            </div>
        </div>
    );
}

export default Intro;
