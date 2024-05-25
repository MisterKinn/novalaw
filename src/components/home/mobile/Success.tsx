function Success() {
    return (
        <div>
            <h1 className="mobile-success-title" data-aos="fade-up">
                <span className="white">전문적인 구성원</span>들과
                <br />
                <span className="white">여러 건의 승소사례</span>를
                <br />
                다양한 분야에서
                <br />
                쌓아냈습니다.
            </h1>

            <div className="success-button" data-aos="fade-up">
                <a href="/members" target="_blank" title="구성원 더 알아보기">
                    <button
                        className="learn-more learn-more-mobile"
                        role="button"
                    >
                        <span className="mobile-learn-more-text">
                            구성원 더 알아보기
                        </span>
                    </button>
                </a>

                <div className="margin"></div>

                <a href="/success" target="_blank" title="승소사례 더 알아보기">
                    <button
                        className="learn-more learn-more-mobile"
                        role="button"
                    >
                        <span className="mobile-learn-more-text">
                            승소사례 더 알아보기
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Success;
