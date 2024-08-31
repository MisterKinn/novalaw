import Cookies from "js-cookie";

function closePopup() {
    const popupContainer = document.querySelector(".popup-container");
    if (popupContainer) {
        popupContainer.style.display = "none";
        Cookies.set("popupClosed", "true", { expires: 1 });
    }
}

export { closePopup };
