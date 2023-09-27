var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
// var searchBoxIMG = document.querySelector(".search-box img")
var searchbox = document.querySelector(".search-box");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}
searchbox.onclick= function(){
    searchbox.classList.toggle("small-searchbox")
}
