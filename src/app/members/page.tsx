import "@/styles/novalaw.css";
import NavBar from "@/components/home/NavBar";

function Members() {
    return (
        <div>
            <NavBar />
            <h2 className="introduce" data-aos="fade-up">
                업무 소개
            </h2>
            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/handcuffs.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 형사사건</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    수사단계부터 재판까지 의뢰인의 편에서
                                    <br />
                                    <span className="white">최선의 결과</span>를
                                    위해 노력합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/civil.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 민사소송</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    의뢰인의 소중한 권리와 자산 보호를 위해
                                    <br />
                                    <span className="white">
                                        체계적
                                    </span>이고{" "}
                                    <span className="white">전략적</span>으로
                                    접근합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/hammer.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 행정쟁송</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    국가로부터 권리를 침해받았을 경우
                                    <br />
                                    구제받을 수 있도록 행정쟁송의
                                    <br />
                                    <span className="white">조력자</span>가
                                    되어드립니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" data-aos="fade-up">
                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/labor.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 노동쟁송</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    고문 노무사님과 함께
                                    <br />
                                    <span className="white">당연한 권리</span>를
                                    누릴 수 있도록 돕습니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="spec">
                    <div className="card-container spec2">
                        <div>
                            <div className="column-center">
                                <img
                                    loading="lazy"
                                    src="img/consulting.png"
                                    className="card-img"
                                />
                                <span className="card-title">
                                    <strong> 법률자문</strong>
                                </span>
                            </div>
                            <div className="card-text">
                                <strong>
                                    정기적인 법률자문이 필요한 경우
                                    <br />
                                    <span className="white">
                                        믿을 수 있는
                                    </span>{" "}
                                    법률자문 서비스를 진행합니다.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;
