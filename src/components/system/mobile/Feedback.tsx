function Feedback() {
    return (
        <div>
            <h2 className="mobile-feedback-title" data-aos="fade-up">
                말만 그런 것 아니냐구요?
                <br />
                직접 확인해보세요.
            </h2>
            <a
                href="../feedback"
                title="고객후기 바로가기"
                className="mobile-feedback-button"
                data-aos="fade-up"
            >
                <div>
                    <p>고객후기 바로가기 {">"}</p>
                </div>
            </a>
        </div>
    );
}

export default Feedback;
