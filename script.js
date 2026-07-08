var sidebar = document.querySelector(".side-navbar");

function showNavbar() {
    sidebar.style.left = "0";
}
function closeNavbar() {
    sidebar.style.left = "-50%";
}
var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productList = document.querySelectorAll("div");
search.addEventListener("keyup", function () {
    var enteredValue = event.target.toUppercase()
    for (count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelectorAll("p").textContent
        if(productList.toUppercase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"
        }
    }
})