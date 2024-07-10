function Intro() {
    return (
        <div id="mobile-intro">
            <img
                src="img/members-bg-mobile.png"
                alt="구성원 소개"
                className="mobile-members-bg"
            />

            <div className="mobile-members-container" data-aos="fade-up">
                <h2 className="mobile-members-title">구성원 소개</h2>
                <h3 className="mobile-members-subtitle">
                    <span className="mobile-white">전문적인 구성원</span>들로
                    이루어진 <br />
                    <span className="mobile-white">노바법률사무소</span>입니다.
                    <br />
                    <span className="mobile-white">법률적 도움</span>이 필요하실
                    때는
                    <br />
                    <span className="mobile-white">노바법률사무소</span>와
                    함께하세요.
                </h3>
            </div>
        </div>
    );
}

export default Intro;
