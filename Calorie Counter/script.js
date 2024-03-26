const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
// Boolean 
let isError = false;

function cleanInputString(str){
    const regex = /[+-\s]/g;
    return str.replace(regex,"");}
    // replaced all regular expression matches with empty lateral.
    /* // g to keep searching after first match found.
    // /regex/ , [] characterset : match any char in the set. 
    // \s any white space character
    // >> the following does it without regex 
    strArray = str.split('');
    let cleanStrArray = [];
    for (let i=0;i<strArray.length;i++){
        if(!["+","-"," "].includes(strArray[i])){
            cleanStrArray.push(strArray[i]);
        }
    } 
    */
function isInvalidInput(str){
    const regex= /\d+e\d+/i;
    //case insensitive
    // \d any digit
    // + repeated 
    return str.match(regex);
}
function addEntry(){
    // We are setting up to write more html in the document when this method is called.
    // Target input container will find which section we are going to append to from the dropdown value.
    // It will find the choice from the dropdown and prep to append to the choice's container.
    // Entry number will find from the inputs in the html section how many it already has for indexing purposes.
      
    let targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    let entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;

    // This lateral is the addition to the html document.

    let HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder ="name" id="${entryDropdown.value}-${entryNumber}-name"</input>
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"</input>`;
    // Appending it to the live document.
    //targetInputContainer.innerHTML += HTMLString;
    targetInputContainer.insertAdjacentHTML();
}
// When the button is used, the function will execute.
addEntryButton.addEventListener("click",addEntry);