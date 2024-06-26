function Greeting() {
    return (
        <div id="greeting">
            <h2 className="introduce" data-aos="fade-up">
                인사말
            </h2>
            <div className="greeting">
                <img src="img/donho.png" data-aos="fade-up" />
                <p className="intro-text" data-aos="fade-up">
                    <br />
                    <br />
                    안녕하세요.
                    <br />
                    노바법률사무소 대표{" "}
                    <span className="white">이돈호 변호사</span>입니다.
                    <br />
                    대형로펌 소속변호사부터 시작하여
                    <br />
                    파트너변호사가 되기까지{" "}
                    <a
                        href="/success"
                        target="_blank"
                        title="성공 사례"
                        className="white"
                    >
                        많은 사건
                    </a>
                    들을 해결해왔습니다.
                    <br />
                    <br />
                    이제 보다 가까운 곳에서{" "}
                    <span className="white">의뢰인의 힘</span>이 되어드리고자
                    합니다.
                    <br />
                    대형로펌에 의뢰했을 때 결국 사건처리를 맡게 되는 변호사는
                    <br />
                    바로 <span className="white">이돈호 변호사</span>입니다.
                </p>
            </div>
        </div>
    );
}

export default Greeting;
