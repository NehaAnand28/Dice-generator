//Random dice image generation for first image
var randomNumber1 = Math.ceil( Math.random()*6);
document.getElementsByClassName("img1")[0].setAttribute("src","images/dice" + randomNumber1 +".png");

//Random dice image generation for second image
var randomNumber2 = Math.ceil( Math.random()*6);
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice" + randomNumber2 +".png");


//change h1 text as per condition 🚩
if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩 ";
}
else{
    document.querySelector("h1").innerHTML="Refresh Me";
}

function refresh()
{
    location.reload();
}