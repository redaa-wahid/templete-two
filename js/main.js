let sc = document.querySelector(".up");

window.onscroll = function() {
    // console.log(this.scrollY);
    if (this.scrollY >= 800) {
        sc.classList.add("show");
    } else {
        sc.classList.remove("show");
    }
}

sc.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};