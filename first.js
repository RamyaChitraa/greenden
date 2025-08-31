
var sideNav = document.getElementById("sideNav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sideNav.style.right = 0 
})

closeNav.addEventListener("click",function(){
    sideNav.style.right = "-50%";
})
