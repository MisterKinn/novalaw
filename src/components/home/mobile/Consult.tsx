import "@/styles/Mobile/consult.css";

function Consult() {
    return (
        <div id="mobile-consult">
            <img
                src="img/consult-bg-mobile.png"
                alt="상담문의"
                className="mobile-consult-bg"
            />

            <div className="mobile-consult-container" data-aos="fade-up">
                <h2 className="mobile-consult-title">상담문의</h2>
                <h3 className="mobile-consult-subtitle">
                    의뢰인의 일을 내 일처럼,
                    <br />한 명 한 명 진심으로 듣겠습니다.
                </h3>

                <div className="mobile-consult-buttons">
                    <a
                        href="https://www.lawtalk.co.kr/directory/profile/5517-%EC%9D%B4%EB%8F%88%ED%98%B8"
                        target="_blank"
                        title="후기 더 알아보기"
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
