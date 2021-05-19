var output1=((Math.floor(Math.random()*10))%6)+1;
var string1="images/dice"+output1+".png";

var output2=((Math.floor(Math.random()*10))%6)+1;
var string2="images/dice"+output2+".png";

document.querySelectorAll("img")[0].setAttribute("src",string1);
document.querySelectorAll("img")[1].setAttribute("src",string2);

if(output1 === output2){
  document.querySelector("h1").innerHTML="Draw";
}
else if(output1 > output2){
  document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}
else{
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
