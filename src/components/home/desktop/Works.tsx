import "@/styles/Desktop/work.css";

function Works() {
    return (
        <div id="works">
            <img
                src="img/works-bg.png"
                alt="노바 업무분야"
                className="works-bg"
            />

            <div className="works-component">
                <h2 className="works-title" data-aos="fade-up">
                    노바 업무분야
                </h2>
                <h3 className="works-subtitle" data-aos="fade-up">
                    풍부한 사건처리 데이터와 노하우를 바탕으로
                    <br />
                    의뢰인의 편에서 솔루션을 제시하는 노바법률사무소입니다.
                </h3>

                <a
                    href="/works"
                    title="업무분야 더 알아보기"
                    className="works-button"
                >
                    <div data-aos="fade-up">
                        <p>업무분야 더 알아보기 {">"}</p>
                    </div>
                </a>

                <div className="container" data-aos="fade-up">
                    <div className="card-container">
                        <div>
                            <div className="card-img">
                                <img
                                    loading="lazy"
                                    src="img/work_1.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">형사사건</div>
                            <div className="card-text">
                                수사단계부터 재판까지 의뢰인의 편에서
                                <br />
                                최선의 결과를 위해 노력합니다.
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div>
                            <div className="card-img">
                                <img
                                    loading="lazy"
                                    src="img/work_2.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">민사소송</div>
                            <div className="card-text">
                                의뢰인의 소중한 권리와 자산 보호를 위해
                                <br />
                                체계적이고 전략적으로 접근합니다.
                            </div>
                        </div>
                    </div>
                    <div className="card-container">
                        <div>
                            <div className="card-img">
                                <img
                                    loading="lazy"
                                    src="img/work_3.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">행정쟁송</div>
                            <div className="card-text">
                                국가로부터 권리를 침해받았을 때
                                <br />
                                구제받을 수 있도록 조력자가 되어 드립니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" data-aos="fade-up">
                    <div className="card-container2">
                        <div>
                            <div className="card-img">
                                <img
                                    loading="lazy"
                                    src="img/work_4.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">노동쟁송</div>
                            <div className="card-text">
                                고문 노무사님과 함께
                                <br />
                                당연한 권리를 누릴 수 있도록 돕습니다.
                            </div>
                        </div>
                    </div>
                    <div className="card-container2">
                        <div>
                            <div className="card-img">
                                <img
                                    loading="lazy"
                                    src="img/work_5.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">법률자문</div>
                            <div className="card-text">
                                정기적인 법률자문이 필요한 경우
                                <br />
                                믿을 수 있는 법률자문 서비스를 제공합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;
