function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function redirectPortfolioSite () {
    window.location.href = 'https://github.com/glenntm/portfolio-site';
}

function redirectLiveWebsite () {
    window.location.href = 'https://glenn-telus-mensah.netlify.app/';
}