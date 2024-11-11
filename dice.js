onload=alert("Welcome to the DICE GAME");
let name1=prompt("Enter the 1st Player name");
let name2=prompt("Enter the 2nd Player name");
document.querySelectorAll("p")[1].textContent+=name1;
document.querySelectorAll("p")[2].textContent+=name2;

document.querySelector("button").addEventListener("click",function(){
    document.querySelectorAll("p")[0].textContent=" ";
    let rnumber=Math.floor(Math.random()*6+1);
    let rimage="imgs/dice"+rnumber+".jpeg";
    document.querySelectorAll("img")[0].setAttribute("src",rimage);
    let rnumber1=Math.floor(Math.random()*6+1);
    let rimage1="imgs/dice"+rnumber1+".jpeg";
    document.querySelectorAll("img")[1].setAttribute("src",rimage1);

    setTimeout(function show(){
        if(rnumber>rnumber1){
            alert(name1+ " " + "WONED");
        }
        else if(rnumber==rnumber1){
            alert("Draw!!!");
        }
        else{
            alert(name2+ " " +"WONED");
        }
    },100);
});