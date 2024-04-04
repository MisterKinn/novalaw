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
                    <img src="img/lawtalk.png" alt="" className="footer-img" />
                    <img src="img/kakao.png" alt="" className="footer-img" />
                    <span className="footer-img-margin"></span>
                    <img
                        src="img/instagram.webp"
                        alt=""
                        className="footer-img"
                    />
                    <span className="footer-img-margin"></span>
                    <img src="img/youtube.png" alt="" className="footer-img" />
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
