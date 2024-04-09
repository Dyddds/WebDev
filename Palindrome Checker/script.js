const button = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

button.addEventListener("click",()=>{

  var text = document.getElementById("text-input");
  if (!text.value){
    alert("Please input a value");
    return;
  }
  const textVal = text.value;
  const regexnot = /[a-zA-Z1-9]g/;
  const regex = /[\s-_.,]g+/
  var workingString = textVal.toLowerCase();
  // from here bug
 // workingString = workingString.replace(regex,"");
  console.log("init: " +workingString);
  
  workingString = (workingString.replace(/\s/g,""))?workingString.replace(/\s/g,""):workingString;
  
  console.log("no space" + workingString);
 
 workingString = (workingString.replace(/-/g,""))?workingString.replace(/-/g,""):workingString;
 
 console.log("no dash" + workingString);
  
  workingString = (workingString.replace(/\./g,""))?workingString.replace(/\./g,""):workingString;
  
  console.log("no dot" + workingString);

 workingString = (workingString.replace(/,/g,""))?workingString.replace(/,/g,""):workingString;

 console.log("no comma" + workingString);
  workingString = (workingString.replace(/_/g,""))?workingString.replace(/_/g,""):workingString;

  console.log("no underscore" + workingString);
  
  workingString = (workingString.replace(/[(]/g,""))?workingString.replace(/[(]/g,""):workingString;
  workingString = (workingString.replace(/[)]/g,""))?workingString.replace(/[)]/g,""):workingString;
  workingString = (workingString.replace(/\\/g,""))?workingString.replace(/\\/g,""):workingString;
    workingString = (workingString.replace(/\//g,""))?workingString.replace(/\//g,""):workingString;

  console.log("no () or /\ " + workingString);
  
  console.log("final" +workingString);

  var comparasonString = workingString.split("").reverse()
  .join("");
  console.log("compare to:"+comparasonString);
  
  const res = workingString.localeCompare(comparasonString);
  const result = res === 0 ? true:false;
  var tf = result ? ' a ':' not a ';
  resultDiv.innerText = `${textVal} is`+tf+`palindrome`;
  
});
