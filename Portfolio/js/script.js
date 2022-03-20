// Menu
var menuClose = document.getElementById("close");
var menuOpen = document.getElementById("open");
var menu = document.querySelector(".aside");
var menuHeader = document.querySelector(".asideHeader");
var menuText = document.querySelectorAll(".text");
var menuIcon = document.querySelectorAll(".icon");

var home = document.querySelector(".u_home");
var about = document.querySelector(".u_reader");
var education = document.querySelector(".u_backpack");
var certificates = document.querySelector(".u_award");
var contact = document.querySelector(".u_at");

menuClose.onclick = function(){
    menu.style.width = "3.8rem";
    menuHeader.style.display = "none";
    var index = 0, length = menuText.length;
    for ( ; index < length; index++) {
        menuText[index].style.display = "none";
    }
    var index = 0, length = menuIcon.length;
    for ( ; index < length; index++) {
        menuIcon[index].style.display = "block";
    }
    menuOpen.style.display = "block";
}
menuOpen.onclick = function(){
    menu.style.width = "19rem";
    menuHeader.style.display = "flex";
    var index = 0, length = menuText.length;
    for ( ; index < length; index++) {
        menuText[index].style.display = "block";
    }
    var index = 0, length = menuIcon.length;
    for ( ; index < length; index++) {
        menuIcon[index].style.display = "none";
    }
    menuOpen.style.display = "none";
}

home.onclick = function(){
    document.querySelector(".home").style.display = "flex";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".education").style.display = "none";
    document.querySelector(".certificates").style.display = "none";
    document.querySelector(".contact").style.display = "none";
}
about.onclick = function(){
    document.querySelector(".home").style.display = "none";
    document.querySelector(".about").style.display = "flex";
    document.querySelector(".education").style.display = "none";
    document.querySelector(".certificates").style.display = "none";
    document.querySelector(".contact").style.display = "none";
}
certificates.onclick = function(){
    document.querySelector(".home").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".education").style.display = "none";
    document.querySelector(".certificates").style.display = "flex";
    document.querySelector(".contact").style.display = "none";
}
education.onclick = function(){
    document.querySelector(".home").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".education").style.display = "flex";
    document.querySelector(".certificates").style.display = "none";
    document.querySelector(".contact").style.display = "none";
}
contact.onclick = function(){
    document.querySelector(".home").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".education").style.display = "none";
    document.querySelector(".certificates").style.display = "none";
    document.querySelector(".contact").style.display = "flex";
}