import { useEffect, useRef } from "react";

function Footer() {
    const yearRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const yearElement = yearRef.current;
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);
    return (
        <div id="footer">
            <div className="footer-data">
                <a href="/">
                    <h3 className="footer-button">이용약관</h3>
                </a>

                <div className="margin"></div>

                <a href="/">
                    <h3 className="footer-button">개인정보 처리방침</h3>
                </a>
            </div>
            <div className="footer-data2">
                <h3 className="footer-text">
                    회사명: <strong>노바법률사무소</strong> | 대표:{" "}
                    <strong>이돈호</strong>
                    <br />
                    주소:{" "}
                    <strong>
                        인천시 연수구 컨벤시아대로 165 포스코타워-송도 26층
                        2625호
                    </strong>
                    <br />
                    이메일: <strong>nova@novalaw.kr</strong>
                    <br />
                    전화: <strong>032-212-4047</strong> | FAX:{" "}
                    <strong>032-232-7047</strong>
                    <br />
                    사업자등록번호: <strong>248-13-02240</strong>
                </h3>

                <div className="footer-img-container-">
                    <a
                        href="https://www.lawtalk.co.kr/directory/profile/5517-%EC%9D%B4%EB%8F%88%ED%98%B8"
                        target="_blank"
                        title="LawTalk Consult"
                    >
                        <img
                            src="img/lawtalk.png"
                            alt="LawTalk Consult"
                            className="footer-img"
                        />
                    </a>

                    <a
                        href="https://pf.kakao.com/_CXxhwG"
                        target="_blank"
                        title="Official KakaoTalk Account"
                    >
                        <img
                            src="img/kakao.png"
                            alt="Official KakaoTalk Account"
                            className="footer-img"
                        />
                    </a>
                    <span className="footer-img-margin"></span>
                    <a
                        href="https://www.instagram.com/lawyer_dono/"
                        target="_blank"
                        title="CEO's instagram"
                    >
                        <img
                            src="img/instagram.webp"
                            alt="CEO's instagram"
                            className="footer-img"
                        />
                    </a>
                    <span className="footer-img-margin"></span>
                    <a
                        href="https://www.youtube.com/@nova_law"
                        target="_blank"
                        title="Official YouTube Channel"
                    >
                        <img
                            src="img/youtube.png"
                            alt="Official YouTube Channel"
                            className="footer-img"
                        />
                    </a>
                </div>
            </div>

            <div className="footer-copyright">
                &copy; <span id="copyright-year" ref={yearRef} />{" "}
                <strong>노바법률사무소</strong>. All Rights Reserved.
                <br />
                <br />
            </div>
        </div>
    );
}

export default Footer;
