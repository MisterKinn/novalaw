function Feedback() {
    return (
        <div>
            <h2 className="feedback-title" data-aos="fade-up">
                말만 그런 것 아니냐구요?
                <br />
                직접 확인해보세요.
            </h2>

            <div className="container" data-aos="fade-up">
                <div className="card-container">
                    <img
                        src="img/success-logo.png"
                        alt="NovaLaw Logo"
                        className="nova-logo"
                    />
                    <h3 className="card-subtitle">손해배상</h3>
                    <h2 className="card-title">자상하고 따뜻한 상담</h2>
                    <p className="card-text">
                        처음에 상담 신청을 할 때 법과 변호사에 대한 딱딱하고
                        엄격한 이미지가 있어서 긴장했으나 정말 따뜻하게 상담을
                        진행해주셨고 사건까지 잘 경청해주셔서 더 적극적으로
                        이야기를 나누고 질문할 수 있었습니다.
                        <br />
                        마지막에 이야기 내용까지 잘 정리해서 의견까지 간략하게
                        문서로 작성해서 주셨는데 너무 큰 도움이 됐습니다! 완전
                        강추합니다.
                        <br />
                    </p>

                    <div className="card-bottom">
                        <p>2024.06</p>
                        <p>의뢰인 ju******</p>
                    </div>
                </div>

                <div className="card-container">
                    <img
                        src="img/success-logo.png"
                        alt="NovaLaw Logo"
                        className="nova-logo"
                    />
                    <h3 className="card-subtitle">고소/소송절차</h3>
                    <h2 className="card-title">
                        꼼꼼하게 내용을 진단해주셨습니다.
                    </h2>
                    <p className="card-text">
                        제가 질문드린 내용에 대해서 거의 대부분 답변을 해주셔서
                        걱정하고 있던 부분이 해소되었습니다.
                        <br />
                        조언주신 내용대로 우선 대응을 진행하고, 진행하면서
                        추가로 필요한 내용이 있으면 변호사님과 상담받으며 진행할
                        예정입니다.
                        <br />
                        <br />
                        <br />
                    </p>

                    <div className="card-bottom">
                        <p>2024.06</p>
                        <p>의뢰인 th******</p>
                    </div>
                </div>

                <div className="card-container">
                    <img
                        src="img/success-logo.png"
                        alt="NovaLaw Logo"
                        className="nova-logo"
                    />
                    <h3 className="card-subtitle">고소/소송절차</h3>
                    <h2 className="card-title">
                        이돈호 변호사님과의 상담은
                        <br />
                        빛과 소금이었습니다.
                    </h2>
                    <p className="card-text">
                        살면서 죄를 짓고 살아본 적이 없는 상태라서 아무것도
                        모르고 있는 상태였습니다.
                        <br />
                        그러다 이돈호 변호사님과의 15분 전화 상담을 하였고,
                        원리원칙에 의해서 너무 정확하게 찝어주시면서
                        이야기해주셨습니다.
                        <br />
                        너무 감사드립니다.
                        <br />
                    </p>

                    <div className="card-bottom">
                        <p>2024.06</p>
                        <p>의뢰인 db******</p>
                    </div>
                </div>
            </div>

            <a
                href="../feedback"
                title="고객후기 전체보기"
                className="feedback-button"
                data-aos="fade-up"
            >
                <div>
                    <p>고객후기 전체보기 {">"}</p>
                </div>
            </a>
        </div>
    );
}

export default Feedback;
