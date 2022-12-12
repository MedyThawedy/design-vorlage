function displayMenu() {
    console.log("It works!");
    document.getElementById("divImgIcon").style.display="none";
    document.getElementsByClassName("clsNavItem")[0].style.display = "block";   
    document.getElementsByClassName("clsNavItem")[1].style.display = "block"; 
    document.getElementsByClassName("clsNavItem")[2].style.display = "block"; 
    document.getElementsByClassName("clsNavItem")[3].style.display = "block"; 
}

function hideIconMenu() {
    console.log("It works!");
    document.getElementById("divImgIcon").style.display="flex";
    document.getElementsByClassName("clsNavItem")[0].style.display = "none";   
    document.getElementsByClassName("clsNavItem")[1].style.display = "none"; 
    document.getElementsByClassName("clsNavItem")[2].style.display = "none"; 
    document.getElementsByClassName("clsNavItem")[3].style.display = "none"; 
}