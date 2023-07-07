
var array = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
]

var index1 = Math.floor((Math.random() * 6));
var index2 = Math.floor((Math.random() * 6));

document.querySelector(".img1").setAttribute("src", array[index1]);
document.querySelector(".img2").setAttribute("src", array[index2]);

if(index1>index2)
{
    document.querySelector(".container h1").innerHTML="🚩 Player1 Wins";
}
else if(index1<index2)
{
    document.querySelector(".container h1").innerHTML="Player2 Wins 🚩";
}
else{
    document.querySelector(".container h1").innerHTML="Draw: Refrsh Me";
}