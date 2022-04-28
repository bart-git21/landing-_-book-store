document.querySelector(".openModal").addEventListener("click", popupToggle);
document.querySelector(".loginForm__btn-close").addEventListener("click", popupToggle);
document.querySelector(".loginForm").addEventListener("click", closeLoginForm);


function popupToggle() {
    document.querySelector(".loginForm").classList.toggle("invisible");
    document.body.classList.toggle("vh100");
}

function closeLoginForm(elem) {
    if (elem.target === elem.currentTarget) popupToggle();
}