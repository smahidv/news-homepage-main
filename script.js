var navBar = document.getElementById("nav-bar");
function openMenu(){
     navBar.style.display="block";
     document.body.style.overflowY="hidden";
}
function closeMenu(){
    navBar.style.display="none";
    document.body.style.overflowY="auto";
}