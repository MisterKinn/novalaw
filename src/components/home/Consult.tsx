import "@/styles/Desktop/consult.css";

function Consult() {
    return (
        <div id="consult">
            <img
                src="img/consult-bg.png"
                alt="상담문의"
                className="consult-bg"
            />

            <div className="consult-container" data-aos="fade-up">
                <h2 className="consult-title">상담문의</h2>
                <h3 className="consult-subtitle">
                    의뢰인의 일을 내 일처럼, 한 명 한 명 진심으로 듣겠습니다.
                </h3>

                <div className="consult-buttons">
                    <a href="#" target="_blank" title="후기 더 알아보기">
                        <div className="consult-button">
                            <p>노바법률사무소 로톡</p>
                            <img
                                src="img/consult-lawtalk.png"
                                alt="노바법률사무소 로톡"
                            />
                        </div>
                    </a>

                    <a href="#" target="_blank" title="후기 더 알아보기">
                        <div className="consult-button">
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
