'use strict';
let secretnumber=(Math.trunc(Math.random()*20))+1;
let highScore=0;
/*document.querySelector(".number").textContent=secretnumber;*/
/*let score=document.querySelector(".score").textContent;*/
document.querySelector(".check").addEventListener("click",function(){
    const guess=Number(document.querySelector(".guess").value);
let score=document.querySelector(".score").textContent;
console.log(guess);

    
    if(score>1)
    {
    if(!guess)
    {
        document.querySelector(".message").textContent="not a number";
    }
    
    else if(guess===secretnumber)
    {
  document.querySelector(".message").textContent="correct!You won";
  document.querySelector("body").style.backgroundColor="#60b347";
  if(score>highScore)
  {
    
    document.querySelector(".highscore").textContent=score;

    }
  }
   else if(guess>secretnumber)
     {
      document.querySelector(".message").textContent="too high";
      console.log("too high");
      score--;
      document.querySelector(".score").textContent=score;
}
     else if(guess<secretnumber)
     {
     document.querySelector(".message").textContent="too low";
     score--;
     document.querySelector(".score").textContent=score;
     console.log("toolow");

}
    }
  
    else{
      document.querySelector(".message").textContent="you lost";
      document.querySelector("body").style.backgroundColor="red";


    }
  
    
    
});
document.querySelector(".again").addEventListener("click",function(){
  document.querySelector(".message").textContent="start guessing...";
  document.querySelector(".score").textContent=20;
  document.querySelector("body").style.backgroundColor="#222";
  document.querySelector(".guess").value="";
   secretnumber=(Math.trunc(Math.random()*20))+1;

});
