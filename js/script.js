const menu = document.getElementById("topNav");
const showMenu = document.getElementById("btnShowMenu");
const hideMenu = document.getElementById("btnHideMenu");
const btnMenuPart1 = document.getElementById("menuStripe1")
const btnMenuPart2 = document.getElementById("menuStripe2")
const btnMenuPart3 = document.getElementById("menuStripe3")
const cross = document.getElementById("cross")
const btnMenuWrapper = document.getElementById("btn-menuWrapper");
showMenu.addEventListener("click",function()
{
menu.style.display = "flex";
showMenu.style.display="none";
hideMenu.style.display="inline-block";
btnMenuPart1.style.display="none";
btnMenuPart2.style.display="none";
btnMenuPart3.style.display="none";
cross.style.display="inline";
btnMenuWrapper.style.top="30px";
});
hideMenu.addEventListener("click",function()
{
menu.style.display = "none";
showMenu.style.display="inline-block";
hideMenu.style.display="none";
btnMenuPart1.style.display="block";
btnMenuPart2.style.display="block";
btnMenuPart3.style.display="block";
cross.style.display="none";
btnMenuWrapper.style.top="35px";
});