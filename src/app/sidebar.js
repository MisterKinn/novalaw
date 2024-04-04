function openMenu() {
    document.querySelector(".sidebar").style.width = "250px";
    document.querySelector(".openbtn").style.display = "none";
}

function closeMenu() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector(".openbtn").style.display = "block";
}

export { openMenu, closeMenu };
