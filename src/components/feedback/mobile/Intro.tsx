function Intro() {
    return (
        <div>
            <div data-aos="fade-up">
                <h2 className="mobile-intro-title">고객후기</h2>
                <h1 className="mobile-intro-subtitle">
                    의뢰인 여러분의{" "}
                    <span className="mobile-blue">감사 인사</span>
                    <br />한 마디가 노바에게{" "}
                    <span className="mobile-blue">큰 힘</span>이 됩니다.
                    <br />
                    언제나 <span className="mobile-blue">의뢰인의 편</span>에
                    서겠습니다.
                </h1>
            </div>

            <div className="mobile-success-list" data-aos="fade-up">
                <a href="#" title="전체">
                    전체
                </a>

                <a href="#" title="형사">
                    형사
                </a>

                <a href="#" title="민사">
                    민사
                </a>

                <a href="#" title="행정">
                    행정
                </a>

                <a href="#" title="가사">
                    가사
                </a>

                <a href="#" title="의료">
                    의료
                </a>

                <a href="#" title="기업">
                    기업
                </a>
            </div>
        </div>
    );
}

export default Intro;
