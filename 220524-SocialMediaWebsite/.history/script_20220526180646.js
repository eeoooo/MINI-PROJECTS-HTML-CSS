const settingsmenu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("#dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onClick = function(){
    darkBtn.classList.toggle("dark-btn-on");
}
