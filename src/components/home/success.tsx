function Success() {
    return (
        <div data-aos="fade-up">
            <h1 className="success-title">
                <span className="white">전문적인 구성원</span>들과{" "}
                <span className="white">13건 이상의 승소사례</span>를
                <br />
                여러 분야에서 쌓아냈습니다.
            </h1>

            <div className="success-button">
                <a href="/members" target="_blank" title="구성원 더 알아보기">
                    <button className="learn-more" role="button">
                        구성원 더 알아보기
                    </button>
                </a>

                <div className="margin"></div>

                <a href="/success" target="_blank" title="승소사례 더 알아보기">
                    <button className="learn-more" role="button">
                        승소사례 더 알아보기
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Success;
