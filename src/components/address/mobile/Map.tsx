function Map() {
    return (
        <div id="mobile-addresses">
            <div data-aos="fade-up">
                <div className="mobile-addresses-title-container">
                    <h2 className="mobile-addresses-title">
                        노바(NOVA)법률사무소
                    </h2>
                </div>
                <div className="mobile-addresses-blank" />
                <div className="mobile-addresses-container">
                    <div>
                        <h3>오시는 길</h3>
                        <h4>
                            인천광역시 연수구 컨벤시아대로 165 (송도동) 2609호
                        </h4>
                    </div>
                </div>
                <div className="mobile-addresses-container">
                    <div>
                        <h3>Tel.</h3>
                        <h4>032-212-4047</h4>
                    </div>
                </div>
                <div className="mobile-addresses-container">
                    <div>
                        <h3>E-mail</h3>
                        <h4>nova@novalaw.kr</h4>
                    </div>
                </div>
            </div>

            <div className="mobile-map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.0275938271066!2d126.64129798325222!3d37.38917970271468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca26050075ca7%3A0x387f7facb43e0e1d!2sPosco%20International!5e0!3m2!1sen!2skr!4v1720223606418!5m2!1sen!2skr"
                    loading="lazy"
                    data-aos="fade-up"
                />
            </div>
            <div className="mobile-addresses-blank2" />
        </div>
    );
}

export default Map;
