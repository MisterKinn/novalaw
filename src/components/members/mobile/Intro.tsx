function Intro() {
    return (
        <div id="mobile-intro">
            <img
                src="img/members-bg-mobile.png"
                alt="구성원 소개"
                className="mobile-members-bg"
            />

            <div className="mobile-members-container" data-aos="fade-up">
                <h2>구성원 소개</h2>
                <h3>
                    <span className="mobile-white">최고의 전문성</span>과{" "}
                    <span className="mobile-white">경험</span>을 갖춘
                    <br />
                    <span className="mobile-white">구성원들</span>이 활동하고
                    있습니다.
                </h3>
            </div>
        </div>
    );
}

export default Intro;
