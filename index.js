// random number for dice 1
var randomDice1 = Math.floor(Math.random() *6) + 1;
var imageSource1 = "image/Dice-" + randomDice1 +".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src",imageSource1);

// random number for dice 2
var randomDice2 = Math.floor(Math.random() *6) +1;
var imageSource2 = "image/Dice-" + randomDice2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

//check the draw
if(randomDice1 > randomDice2)
document.querySelector("h1").innerHTML =" Player#1 Win";
else if (randomDice1 < randomDice2)
document.querySelector("h1").innerHTML =" Player#2 Win";
else
document.querySelector("h1").innerHTML =" Draw!!!";
