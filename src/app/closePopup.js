import Cookies from 'js-cookie';

function closePopup() {
    // 팝업을 닫고 쿠키 설정
    document.querySelector(".popup-container").style.display = "none";
    Cookies.set('popupClosed', 'true', { expires: 1 }); // 쿠키를 1일간 유지하도록 설정
}

function closePopup2() {
    // 다른 팝업 요소를 닫고 쿠키 설정
    document.querySelector(".popup-element2").style.display = "none";
    Cookies.set('popupClosed2', 'true', { expires: 1 }); // 각 팝업마다 다른 쿠키를 설정
}

export { closePopup, closePopup2 };