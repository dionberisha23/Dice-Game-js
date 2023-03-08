var n=Math.random();
n=Math.floor(n*6)+1;
var n1=Math.random();
n1=Math.floor(n1*6)+1;


if(n==1){
    document.getElementById("d1").setAttribute("class","fa-solid fa-dice-one fa-10x");
}
if(n==2){
    document.getElementById("d1").setAttribute("class","fa-solid fa-dice-two fa-10x");
}
if(n==3){
    document.getElementById("d1").setAttribute("class","fa-solid fa-dice-three fa-10x");
}
if(n==4){
    document.getElementById("d1").setAttribute("class","fa-solid fa-dice-four fa-10x");
}
if(n==5){
    document.getElementById("d1").setAttribute("class","fa-solid fa-dice-five fa-10x");
}
if(n==6){
    document.getElementById("d1").setAttribute("class","fa-solid fa-dice-six fa-10x");
}


if(n1==1){
    document.getElementById("d2").setAttribute("class","fa-solid fa-dice-one fa-10x");
}
if(n1==2){
    document.getElementById("d2").setAttribute("class","fa-solid fa-dice-two fa-10x");
}
if(n1==3){
    document.getElementById("d2").setAttribute("class","fa-solid fa-dice-three fa-10x");
}
if(n1==4){
    document.getElementById("d2").setAttribute("class","fa-solid fa-dice-four fa-10x");
}
if(n1==5){
    document.getElementById("d2").setAttribute("class","fa-solid fa-dice-five fa-10x");
}
if(n1==6){
    document.getElementById("d2").setAttribute("class","fa-solid fa-dice-six fa-10x");
}

if(n>n1){
    document.getElementById("titulli").innerHTML="The winner is player 1!";
}
else if(n1>n){
    document.getElementById("titulli").innerHTML="The winner is player 2!";
}
else {
    document.getElementById("titulli").innerHTML="Its a draw!";
}
