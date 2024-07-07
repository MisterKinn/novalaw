function Intro() {
    return (
        <div id="intro">
            <img
                src="img/members-bg.png"
                alt="구성원 소개"
                className="members-bg"
            />

            <div className="members-container" id="center" data-aos="fade-up">
                <h2 className="members-title">구성원 소개</h2>
                <h3 className="members-subtitle">
                    <span className="white">전문적인 구성원</span>들로 이루어진{" "}
                    <span className="white">노바법률사무소</span>입니다.
                    <br />
                    <span className="white">법률적 도움</span>이 필요하실 때는{" "}
                    <span className="white">노바법률사무소</span>와 함께하세요.
                </h3>
            </div>
        </div>
    );
}

export default Intro;
