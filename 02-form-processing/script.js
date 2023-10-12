// ALWAYS REMEMBER ESIPO
// Event, State, Input, Processing, Output
// Event driven programming

// Selecting items on the webpage will result in an event
// when the submit button is clicked the 

const button = document.querySelector("#submit-btn")
button.addEventListener("click", function(){
    let firstName;
    let firstNameElement = document.querySelector("#first-name"); // this naming is known as kebab-case
    firstName = firstNameElement.value;
    let lastName = document.querySelector("#last-name").value;    

    let checkedRadioButton = document.querySelector(".fish:checked") // psydo-class of checked
let eatRawFish = null;
if (checkedRadioButton) {
    eatRawFish = checkedRadioButton.value
}

let checkedBoxes = document.querySelectorAll(".countries:checked")
let countries = []

for (c of checkedBoxes) {
    countries.push(c.value)
}

// Print the result
console.log("first name =", firstName);
console.log("last name =", lastName);
console.log("radio button =", eatRawFish)
console.log("checkbox =", countries)
})
// When debugging, open your console first.


