const copyTxt = document.querySelector("#copyTxt"),
pasteTxt = document.querySelector("#pasteTxt"),
button = document.querySelector("button"),
toot = document.querySelector(".tooltip");

button.addEventListener('click',function(){
    copyTxt.select();
    pasteTxt.value = "";
    toot.classList.add("show");
    
    setTimeout(function(){
        toot.classList.remove("show");
        toot.style.background = "lightgreen";
    },800);
    if(document.execCommand("copy")){
        pasteTxt.focus();
    } else {
        alert ("Something Wrong!");
    }
});