const backtotop = document.getElementById("backtotop");

function checkScroll() {
    const yoffset = window.scrollY;
    if(yoffset === 0) {
        backtotop.classList.remove("show");
    }
    else {
        backtotop.classList.add("show");
    }
 }

function backToTop() {
    window.scroll({
        top:0,
        behavior:"smooth"
    });
}

window.addEventListener("scroll", checkScroll);
backtotop.addEventListener("click", backToTop);