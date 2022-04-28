window.onscroll = () => {
    if (window.scrollY > 40) {
        document.querySelector(".header-2").classList.add("active");
    }
    else {
        document.querySelector(".header-2").classList.remove("active");
    }
}