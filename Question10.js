const buttons= document.querySelectorAll(".btn");
let display = document.querySelector("input");

let btnArray= Array.from(buttons);
let inputNum="";

btnArray.forEach(btn => {
    btn.addEventListener("click",(e) => {

      if(e.target.innerHTML=='DEL'){
        
        inputNum = inputNum.substring(0,inputNum.length-1);
        display.value = inputNum;

      }else if(e.target.innerHTML == "AC"){

          inputNum = "";
          display.value= inputNum;
      
      }else if(e.target.innerHTML == "="){
      
        inputNum = eval(inputNum);
        display.value = inputNum;

      }else{
 
         inputNum += e.target.innerHTML;
        display.value = inputNum;
      }
    })
 })

 