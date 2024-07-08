function Intro() {
    return (
        <div>
            <div data-aos="fade-up">
                <h2 className="intro-title">승소사례</h2>
                <h1 className="intro-subtitle">
                    <span className="blue">전문적인 구성원</span>들과 여러 건의{" "}
                    <span className="blue">승소사례</span>를
                    <br />
                    다양한 분야에서 쌓아냈습니다.
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
