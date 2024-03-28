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
    // Only e values because the built in input accepts numbers only input type number >> line 48 
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
    // Appending it to the live document first try:
    // targetInputContainer.innerHTML += HTMLString;

    // The string 'beforeend' specifies position. HTMLString is what will be added.
    targetInputContainer.insertAdjacentHTML("beforeend",HTMLString);
}
// When the button is used, the function will execute.
addEntryButton.addEventListener("click",addEntry);

function getCaloriesFromInputs(list){
    let calories =0;
    //for var of iterable object.
    for (const item of list){
        const currVal = cleanInputString(item.value);
        let invalidInputMatch = isInvalidInput(currVal);
        // means not null as the return is an array
        if (invalidInputMatch){
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}
function calculateCalories(e){
    // @para e is standard for event listner
    e.preventDefault();
    // will stop the page from reloading
    // the plan is to use e for submit button
    isError = false;

    // query selector to get all number inputs added 
    const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type=number]");
    const lunchNumberInputs = document.querySelectorAll("#lunch input[type=number]");
    const dinnerNumberInputs = document.querySelectorAll("#dinner input[type=number]");
    const snacksNumberInputs = document.querySelectorAll("#snacks input[type=number]");
    const exerciseNumberInputs = document.querySelectorAll("#exercise input[type=number]");

    let breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);

}