function Recruit() {
    return (
        <div className="center" data-aos="fade-up">
            <h1 className="title">
                도움이 필요하시면
                <br />
                언제든 연락주세요
            </h1>
            <h2 className="footer-sub-title">
                저희는 항상 의뢰인만을 위하여 일합니다.
                <br />
                법률적 도움이 필요하시면 언제나 부담없이 연락주세요
            </h2>

            <a
                href="https://www.lawtalk.co.kr/directory/profile/5517-%EC%9D%B4%EB%8F%88%ED%98%B8"
                target="_blank"
                title="로톡 상담"
            >
                <button className="join">
                    <span>로톡 상담</span>
                </button>
            </a>

            <span style={{margin: "1em"}}></span>

            <a
                href="https://pf.kakao.com/_CXxhwG"
                target="_blank"
                title="카카오톡 상담"
            >
                <button className="join">
                    <span>카카오톡 상담</span>
                </button>
            </a>
        </div>
    );
}

export default Recruit;
