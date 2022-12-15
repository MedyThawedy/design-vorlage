console.log(document.getElementById('divImgIcon').style.display);
document.getElementsByClassName("clsNavItem")[0].style.display;

function displayMenu() {
    console.log("It works!");console.log(document.getElementById('divImgIcon').style.display);
    document.getElementById("divImgIcon").style.display="none";
    document.getElementsByClassName("clsNavItem")[0].style.display = "block";   
    document.getElementsByClassName("clsNavItem")[1].style.display = "block"; 
    document.getElementsByClassName("clsNavItem")[2].style.display = "block"; 
    document.getElementsByClassName("clsNavItem")[3].style.display = "block"; 
    
}

function hideIconMenu() {
    console.log("It works!");
    console.log(document.getElementById('divImgIcon').style.display);
    console.log(document.getElementsByClassName("clsNavItem")[0].style.display );
    if(
    (document.getElementById('divImgIcon').style.display=='none')
    &&
    (
    (document.getElementsByClassName("clsNavItem")[0].style.display == "block")
    ||
    (document.getElementsByClassName("clsNavItem")[1].style.display == "block")
    ||
    (document.getElementsByClassName("clsNavItem")[2].style.display == "block")
    ||
    (document.getElementsByClassName("clsNavItem")[3].style.display == "block")
    )
    )
    {
    document.getElementById("divImgIcon").style.display="flex";
    document.getElementsByClassName("clsNavItem")[0].style.display = "none";   
    document.getElementsByClassName("clsNavItem")[1].style.display = "none"; 
    document.getElementsByClassName("clsNavItem")[2].style.display = "none"; 
    document.getElementsByClassName("clsNavItem")[3].style.display = "none"; 
    }
}