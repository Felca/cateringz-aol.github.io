function openNav(){
    document.getElementById("sidenav").style.width = "100%";
}
function closeNav(){
    document.getElementById("sidenav").style.width = "0";
}

// This one is for toggle between tabs
// cannt use opacity because we want it gone not just unseen
function opentab(evt, packName){
    var tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(var i = 0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    
    var tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    for(var i = 0; i<tablinks.length; i++){
        tablinks[i].classList.remove("active");
    }
    document.getElementById(packName).style.display = "flex";
    evt.currentTarget.classList.add("active");   
}
document.getElementById("defaultOpen").click();
