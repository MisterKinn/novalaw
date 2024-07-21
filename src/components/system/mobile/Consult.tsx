function Consult() {
    return (
        <div id="mobile-consult">
            <img
                src="img/consults-bg.png"
                alt="상담연결"
                className="mobile-consult-bg"
            />

            <div className="mobile-consult-container">
                <h2 className="mobile-consult-title" data-aos="fade-up">
                    상담연결
                </h2>
                <h3 className="mobile-consult-subtitle" data-aos="fade-up">
                    축하드립니다.
                    <br />
                    이제, 온전히 맡기셔도 됩니다.
                </h3>

                <div className="mobile-consult-buttons">
                    <a
                        href="https://www.lawtalk.co.kr/directory/profile/5517-%EC%9D%B4%EB%8F%88%ED%98%B8"
                        target="_blank"
                        title="후기 더 알아보기"
                        data-aos="fade-up"
                    >
                        <div className="mobile-consult-button">
                            <p>노바법률사무소 로톡</p>
                            <img
                                src="img/consult-lawtalk.png"
                                alt="노바법률사무소 로톡"
                            />
                        </div>
                    </a>

                    <a
                        href="https://pf.kakao.com/_CXxhwG"
                        target="_blank"
                        title="후기 더 알아보기"
                        data-aos="fade-up"
                    >
                        <div className="mobile-consult-button">
                            <p>노바법률사무소 채널톡</p>
                            <img
                                src="img/consult-kakaotalk.png"
                                alt="노바법률사무소 채널톡"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Consult;
