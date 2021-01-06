var b0=document.querySelectorAll("button")[0];
var b1=document.querySelectorAll("button")[1];
var b2=document.querySelectorAll("button")[3];
var b3=document.querySelectorAll("button")[2];
b0.addEventListener("click",playOn);
b1.addEventListener("click",onDiceRoll_1);
b3.addEventListener("click",playAgain);
b3.style.visibility="hidden";

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

function onDiceRoll_1()
{
  var randomDiceImage="dice"+randomNumber1+".png";
  var randomImageSource="images/"+randomDiceImage;
  var image1=document.querySelector(".img1").setAttribute("src",randomImageSource);
  b1.style.visibility="hidden";
  b2.addEventListener("click",onDiceRoll_2);
}

function onDiceRoll_2()
{
  var randomDiceImage="dice"+randomNumber2+".png";
  var randomImageSource="images/"+randomDiceImage;
  var image2=document.querySelector(".img2");
  image2.setAttribute("src",randomImageSource);
  b2.style.visibility="hidden";
  result();
}
function result(){

    if(randomNumber1>randomNumber2)
    {
     msg="Player 1 wins..🤗";
    }
    else if(randomNumber1==randomNumber2)
    {
    msg="Draw..";
    }
    else{
    msg="Player 2 wins..🤗";
    }
      document.querySelector(".result").innerHTML=msg;
      b3.style.visibility="initial";
  }
  function playAgain()
  {
  randomNumber1=Math.floor(Math.random()*6)+1;
  randomNumber2=Math.floor(Math.random()*6)+1;
  b1.style.visibility="initial";
  b2.style.visibility="initial";
  document.querySelector(".result").innerHTML = "";
  b3.style.visibility="hidden";
  }

function playOn()
{
  document.querySelector(".heading2").style.display="none";
  document.querySelector(".part2_page").style.display="inline";
}
function goBack()
{
    document.querySelector(".heading2").style.display="inline";
  document.querySelector(".part2_page").style.display="none";
}
