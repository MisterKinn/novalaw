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
                                    src="img/work_5.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">형사사건</div>
                            <div className="card-text">
                                사건별 맞춤형 법률 서비스를 통해
                                <br />
                                여러분의 권리를 지킵니다.
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
                            <div className="card-title">명예훼손</div>
                            <div className="card-text">
                                의뢰인이 명예 회복과 안정을 위한
                                <br />
                                철저하고 신속한 대응을 제공합니다.
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <div>
                            <div className="card-img">
                                <img
                                    loading="lazy"
                                    src="img/work_4.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">성범죄</div>
                            <div className="card-text">
                                의뢰인이 일상으로 돌아갈 수 있도록
                                <br />
                                보호 및 강력한 법적 대응을 도와드립니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container2" data-aos="fade-up">
                    <div className="card-container">
                        <div>
                            <div className="card-img">
                                <img
                                    loading="lazy"
                                    src="img/work_6.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">이혼</div>
                            <div className="card-text">
                                절차에 따라 의뢰인이 누릴 수 있는
                                <br />
                                권리를 위해 최선의 법률 지원을 제공합니다.
                            </div>
                        </div>
                    </div>

                    <div className="card-container">
                        <div>
                            <div className="card-img">
                                <img
                                    loading="lazy"
                                    src="img/work_1.png"
                                    className="cardimg"
                                />
                            </div>
                            <div className="card-title">통신매체 이용음란</div>
                            <div className="card-text">
                                온라인 성폭력 피해에 있어
                                <br />
                                의뢰인의 당연히 누려야 할 권리를 지킵니다.
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
                            <div className="card-title">온라인 사건 대응</div>
                            <div className="card-text">
                                유명 유튜버, 인플루언서를 포함
                                <br />
                                온라인에서 각종 댓글, 게시글로 인해
                                <br />
                                고통받는 분들의 명예회복을 도와드리겠습니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;
