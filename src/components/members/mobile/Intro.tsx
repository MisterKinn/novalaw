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
                    전문 변호사들로 이루어진 <br />
                    <span className="mobile-white">노바법률사무소</span>입니다.
                </h3>
                <h4>
                    도움이 필요하실 때는
                    <br />
                    노바의 전문 변호사들과 함께하세요.
                </h4>
            </div>
        </div>
    );
}

export default Intro;
