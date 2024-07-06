"use client";
import { useEffect, useRef } from "react";
import "@/styles/Desktop/footer.css";

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
                <a href="../#">
                    <img src="img/nova_logo_black.png" alt="노바법률사무소" />
                </a>

                <a href="/terms" target="_blank" title="이용약관">
                    <h3>이용약관</h3>
                </a>

                <div />

                <a href="/policy" target="_blank" title="개인정보 처리방침">
                    <h3>개인정보 처리방침</h3>
                </a>
            </div>

            <div className="footer-data2">
                <div className="footer-text">
                    <h3>
                        <span>회사명: 노바법률사무소</span>
                        <span>대표이사: 이돈호</span>
                        <span>
                            주소: 인천시 연수구 컨벤시아대로 165 포스코타워-송도
                            26층 2609호
                        </span>
                    </h3>

                    <h3>
                        <span>문의: nova@novalaw.kr</span>
                        <span>대표번호: 032-212-4047</span>
                        <span>FAX: 032-232-7047</span>
                        <span>사업자등록번호: 248-13-02240</span>
                    </h3>

                    <h3>
                        <br />
                        <br />
                        <span>
                            © <span id="copyright-year" ref={yearRef} />{" "}
                            <strong>노바법률사무소</strong>. All Rights
                            Reserved.
                        </span>
                    </h3>
                </div>

                <div className="footer-icon">
                    <a
                        href="https://www.lawtalk.co.kr/directory/profile/5517-%EC%9D%B4%EB%8F%88%ED%98%B8"
                        target="_blank"
                        title="이돈호 변호사 로톡"
                    >
                        <img src="img/lawtalk.png" alt="이돈호 변호사 로톡" />
                    </a>

                    <a
                        href="https://pf.kakao.com/_CXxhwG"
                        target="_blank"
                        title="노바법률사무소 카카오톡 플러스친구"
                    >
                        <img
                            src="img/kakaotalk.png"
                            alt="노바법률사무소 카카오톡 플러스친구"
                        />
                    </a>

                    <a
                        href="https://blog.naver.com/quality7385"
                        target="_blank"
                        title="이돈호 변호사 네이버 블로그"
                    >
                        <img
                            src="img/blog.png"
                            alt="이돈호 변호사 네이버 블로그"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/lawyer_dono"
                        target="_blank"
                        title="이돈호 변호사 인스타그램"
                    >
                        <img
                            src="img/instagram.png"
                            alt="이돈호 변호사 인스타그램"
                        />
                    </a>

                    <a
                        href="https://www.youtube.com/@%EC%9D%B4%EB%8F%88%ED%98%B8%EB%B3%80%ED%98%B8%EC%82%AC"
                        target="_blank"
                        title="이돈호 변호사 YouTube"
                    >
                        <img
                            src="img/youtube.png"
                            alt="이돈호 변호사 YouTube"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
