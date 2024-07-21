function Intro() {
    return (
        <div>
            <div className="intro-container" data-aos="fade-up">
                <h2 className="mobile-intro-title">고객후기</h2>
                <h1>
                    여러분의 안심이
                    <br />
                    저희에게 더 나아갈
                    <br />큰 힘이 됩니다.
                </h1>
                <h2>
                    <br />
                    언제나 <span className="mobile-blue">의뢰인의 편</span>에
                    서겠습니다.
                </h2>
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
