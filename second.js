
var sideNav = document.getElementById("sideNav")
var menuicon = document.getElementById("menuicon")
var closeNav = document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sideNav.style.right = 0 
})

closeNav.addEventListener("click",function(){
    sideNav.style.right = "-50%";
})
 
var productContainer = document.getElementById("productContainer")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enterValue = event.target.value.toUpperCase()

    for(count=0; count<productList.length; count++){
        
        productName = productList[count].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(enterValue)<0){
            productList[count].style.display = "none"
        }
        else{
            productList[count].style.display = "block"
        }
    }
})
