let boxes=document.querySelectorAll(".box");
console.log(boxes);
let reset=document.querySelector("#again");
console.log(reset);
let newgame=document.querySelector("#newgame");
let msgbox=document.querySelector(".msg-box");
let msg=document.querySelector("#msg");
let over=document.querySelector(".over");
let foraudio=document.querySelector(".myaudio");


let turno=true;
let count=0;

const winPatterns=[
          [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
const resetgame=()=>
{
          turno=true;
          count=0;
          enablebox();
          msgbox.classList.add("hide");
          over.classList.add("hide1");
        

}
const myaudio=()=>{
  foraudio.play();
}

boxes.forEach((box)=>
{
        
          box.addEventListener("click",()=>{
            myaudio();
                    console.log("box was clicked");
                    if(turno==='true')
                    {
                              box.innerHTML="O";
                              box.style.
                              color="white";
                              turno=false;
                              //alert("Now 'X' Turn");
                            

                    }
                    else{
                              box.innerHTML="X";
                              box.style.color="black";
                              turno="true"
                              //alert("Now 'O' Turn" );
                             
                            
                    }
                    
                  box.disabled=true;
                  count++;
                  let isWinner= checkWinner();
                  if(count === 9 && !isWinner)
                  {
                    gamedraw();
                  }
                  myaudio();
                 
          });
});
again.addEventListener("click",()=>
{
          console.log("reset box was clicked");

});
const gamedraw = ()=>
{
  msg.innerHTML=`Game was draw.`;
  msgbox.classList.remove("hide");
  disabledboxes();
};

const disabledboxes=()=>
{
          for(let box of boxes )
{
                    box.disabled=true;
                    over.innerHTML="Game Over"
                    over.classList.remove("hide1");
}
}
const enablebox=()=>
{
          for(let box of boxes)

{
          box.disabled=false;
          box.innerHTML="";
}
}



const showWinner = (winner) =>
{
   msg.innerHTML=`Congratulations, Winner is ${winner} `;
   msgbox.classList.remove("hide");
 
   disabledboxes();

}
const checkWinner=()=>
{
      
          for(let pattern of winPatterns )
          {
                  let pos1=boxes[pattern[0]].innerHTML;
                  let pos2= boxes[pattern[1]].innerHTML;
                  let pos3=boxes[pattern[2]].innerHTML;
                  if(pos1!="" && pos2 !="" && pos3 !="")
                  {
                    if(pos1 === pos2 && pos2 === pos3)
                    {
                          console.log("winner",pos1); 
                         
                          showWinner(pos1); 

                          
                    }
                   
                  }
                 
          }
     
          
}
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

