const button = document.querySelector("button");
const ai = document.getElementById("ai");
const x = document.getElementById("x");
const ok = document.querySelectorAll(".ok");
const iconHamburger = document.getElementById("icon-hamburger");
const land = document.getElementById("land");
const facebook = document.getElementById("facebook");
const whatsapp = document.getElementById("Whatsapp");
const web3 = document.getElementById("web3");
const web = document.getElementById("web");
const lan = document.getElementById("lan");
const you = document.querySelectorAll(".you");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const container = document.getElementById("container");
const twi = document.getElementById("twi");
const face = document.getElementById("face");
const email = document.getElementById("email");
const ecc = document.getElementById("ecc");
const experience = document.getElementById("experience");
const complete = document.getElementById("complete");
const support = document.getElementById("Support");
const iconClose = document.getElementById("icon-close");
function downloadPDF() {
    const link = document.createElement('a');
    link.download = 'Abdulmalik-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
    }, {
    threshold: 0.1
});
ok.forEach(section => {
    observer.observe(section);
});

function addUrl(urlin){
    let urlink = "";
    urlink = urlin;
    const link = document.createElement("a");
    link.href = urlink;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

land.onclick = function(){
    addUrl("https://manage-landing-page-vzqe.vercel.app");
}
facebook.onclick = function(){
    addUrl("https://www.facebook.com/base.man.304047");
}

x.onclick = function(){
    addUrl("https://x.com/broskiprop94216");
}
ai.onclick = function(){
    addUrl("https://medicalai-wine.vercel.app");
}
whatsapp.onclick = function(){
    addUrl("https://wa.me/9076956531");
}
web3.onclick = function(){
    addUrl("https://xend-finance-seven.vercel.app");
}
web.onclick = function(){
    addUrl("https://webapp-xi-five.vercel.app");
}
lan.onclick = function(){
    addUrl("https://web3x-app-imranmusaayomides-projects.vercel.app");
}
email.onclick = function(){
    // addUrl("mailto:abdrosheedabdmalikadgmail.com");
    addUrl(window.location.href = "mailto:abdrosheedabdmalikadgmail.com");
}
ecc.onclick = function(){
    addUrl("https://e-ccomerce-website-omega.vercel.app/");
}

sun.onclick = function(){
    sun.style.display = "none";
    moon.style.display = "inline";
    container.style.backgroundColor = "white";
    document.querySelector("body").style.color = "#0f1117";
    twi.src = "img/icon-twitter-dark.svg";
    face.src = "img/icon-facebook-dark.svg";
    experience.src = "img/user-3-svgrepo-com.svg";
    complete.src = "img/complete.webp";
    iconHamburger.src = "img/icon-ham-dark.svg";
    support.src = "img/icons8-support-51.png";
    iconClose.src = "img/icon-close-dark.svg";
    document.querySelector("#mobileView > nav").style.backgroundColor = "#0f1117";
    document.querySelectorAll(".w").forEach(item => {
        item.style.color = "white";
    });
    document.querySelector("#mobileView > nav > a").style.color = "white";
    document.querySelectorAll(".a").forEach(aa => {
        aa.style.color = "#0f1117";
    });
}
moon.onclick = function(){
    sun.style.display = "inline";
    moon.style.display = "none";
    container.style.backgroundColor = "#0f1117";
    document.querySelector("body").style.color = "white";
    document.querySelector("#mobileView > nav").style.backgroundColor = "white";
    document.querySelectorAll(".w").forEach(item => {
        item.style.color = "#0f1117";
    });
    twi.src = "img/icon-twitter.svg";
    face.src = "img/icon-facebook.svg";
    experience.src = "img/icons8-popular-man-50.png";
    complete.src = "img/icons8-check-mark.svg";
    iconHamburger.src = "img/icon-hamburger.svg";
    iconClose.src = "img/icon-close.svg";
    support.src = "img/icons8-support-50.png"
    document.querySelectorAll(".a").forEach(aa => {
        aa.style.color = "white";
    });
}
window.onresize = function(){
    if(window.innerWidth >= "909"){
        iconHamburger.style.display = "none";
        iconClose.style.display = "none";
        document.querySelector("#mobileView").style.display = "none";
    }else{
        iconHamburger.style.display = "block";
    }
}
iconHamburger.onclick = function(){
    iconHamburger.style.display = "none";
    iconClose.style.display = "block";
    document.querySelector("#mobileView").style.display = "block";
}
iconClose.onclick = function(){
    iconHamburger.style.display = "block";
    iconClose.style.display = "none";
    document.querySelector("#mobileView").style.display = "none";
}