function Point() {
    return (
        <div id="point">
            <img
                src="img/point-bg.png"
                alt="노바법률사무소만의 핵심 포인트"
                className="point-bg"
            />

            <div className="point-container" data-aos="fade-up">
                <h2 className="point-title">
                    노바의 <span className="blue">[시스템]</span> 이란?
                </h2>

                <div className="point-icons">
                    <div className="point-element">
                        <img
                            src="img/point-1.png"
                            alt="노바법률사무소만의 핵심 포인트"
                        />
                        <h4>자문 유튜버 채널</h4>
                        <h3>구독자 수 총 700만</h3>
                    </div>

                    <div className="point-element">
                        <img
                            src="img/point-2.png"
                            alt="노바법률사무소만의 핵심 포인트"
                        />
                        <h4>2024년</h4>
                        <h3>형사 특정 변호사 선정</h3>
                    </div>

                    <div className="point-element">
                        <img
                            src="img/point-3.png"
                            alt="노바법률사무소만의 핵심 포인트"
                        />
                        <h4>대한민국 유일무이</h4>
                        <h3>'인플루언서' 전문 로펌</h3>
                    </div>

                    <div className="point-element">
                        <img
                            src="img/point-4.png"
                            alt="노바법률사무소만의 핵심 포인트"
                        />
                        <h4>해외 전담인력을 통한</h4>
                        <h3>24시간 대응 가능</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Point;
