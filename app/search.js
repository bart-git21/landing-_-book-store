
$('#btn-target').click((e) => {
    e.preventDefault();
    // сворачиваем или разворачиваем collapse-элемент
    $('#navbarColor03').collapse('toggle');
});


document.querySelector(".openSearch").addEventListener("click", opensearch);

function opensearch() {
    document.querySelector(".navbar__search").classList.toggle("visibleSearch");
}

document.querySelector(".header-2").addEventListener("click", function() {
    document.querySelector(".navbar__search").classList.remove("visibleSearch");
})