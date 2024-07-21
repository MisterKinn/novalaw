function Intro() {
    return (
        <div>
            <div data-aos="fade-up">
                <h2 className="intro-title">고객후기</h2>
                <h1 className="intro-subtitle">
                    여러분의 안심이
                    <br />
                    저희에게 더 나아갈 큰 힘이 됩니다.
                    <br />
                    언제나 <span className="blue">의뢰인의 편</span>에
                    서겠습니다.
                </h1>
            </div>

            <div className="success-list" data-aos="fade-up">
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
