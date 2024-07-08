import "@/styles/Desktop/stickynav.css";

function StickyNav() {
    return (
        <div>
            <nav id="sticky-nav">
                <div className="sticky-img">
                    <a
                        href="https://www.lawtalk.co.kr/directory/profile/5517-%EC%9D%B4%EB%8F%88%ED%98%B8"
                        target="_blank"
                        title="이돈호 변호사 로톡"
                    >
                        <img
                            src="img/sticky-lawtalk.png"
                            alt="이돈호 변호사 로톡"
                            id="lawtalk"
                        />
                    </a>

                    <a
                        href="https://pf.kakao.com/_CXxhwG"
                        target="_blank"
                        title="노바법률사무소 카카오톡 플러스친구"
                    >
                        <img
                            src="img/sticky-kakaotalk.png"
                            alt="노바법률사무소 카카오톡 플러스친구"
                        />
                    </a>

                    <a href="../#home" title="사이트 최상단으로 이동">
                        <img
                            src="img/sticky-arrow.png"
                            alt="사이트 최상단으로 이동"
                        />
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default StickyNav;
