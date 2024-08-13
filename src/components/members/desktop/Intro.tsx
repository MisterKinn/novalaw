function Intro() {
    return (
        <div id="intro">
            <img
                src="img/members-bg.png"
                alt="구성원 소개"
                className="members-bg"
            />

            <div className="members-container" data-aos="fade-up">
                <h2 className="members-title">구성원 소개</h2>
                <h3 className="members-subtitle">
                    <span className="white">최고의 전문성</span>과{" "}
                    <span className="white">경험</span>을 갖춘
                    <br />
                    <span className="white">구성원들</span>이 활동하고 있습니다.
                </h3>
            </div>
        </div>
    );
}

export default Intro;
