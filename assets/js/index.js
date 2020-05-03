function openNav() {
    document.querySelector(".navbar").classList.toggle("navbar--open");
    document.querySelector(".off-container-close").classList.toggle("is-active");
    // document.querySelector(".main-container").classList.toggle("is-active");
}

var modal = document.getElementById('outside-modal');

window.onclick = function(event) {
    if (event.target == modal) {
      this.openNav();
    }
}

function openGitHub() {
    window.open("https://github.com/alexanderzhong");
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/alexander-zhong-331b79173/");
}

function openResume() {
    window.open("assets/documents/SophomoreResumeFinal.pdf");
    // window.location.href="assets/documents/SophomoreResumeFinal.pdf";
}

function openPortfolio() {
    window.location.href = "portfolio.html";
}