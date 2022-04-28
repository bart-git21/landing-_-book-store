function loader() {
    document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
    setTimeout(loader, 2000);
};
fadeOut();