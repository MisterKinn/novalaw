import "@/styles/Mobile/success.css";

function Success() {
    return (
        <div id="mobile-success">
            <h2 className="mobile-success-title">
                ㅤ
                <br />
                ㅤ
                <br />
                ㅤ
                <br />
                전문적인 구성원들과
                <br />
                여러 건의 승소사례를
                <br />
                다양한 분야에서 쌓아왔습니다.
            </h2>

            <div className="mobile-success-button">
                <a href="/members" title="구성원 더 알아보기">
                    <div className="mobile-learn-more">
                        <p>구성원 더 알아보기 {">"}</p>
                    </div>
                </a>

                <div className="small-margin" />

                <a href="/success" title="승소사례 더 알아보기">
                    <div className="mobile-learn-more">
                        <p>승소사례 더 알아보기 {">"}</p>
                    </div>
                </a>
            </div>

            <div className="mobile-margin">ㅤ</div>
        </div>
    );
}

export default Success;
