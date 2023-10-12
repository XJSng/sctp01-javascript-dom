const h1Element = document.querySelector("#title")
h1Element.style.backgroundColor = "pink"

const listItems = document.querySelectorAll(".selling")
for (let item of listItems) { // using for loop because list items are an array object 
// The CSS property will be in camel case
// if we are using JavaScript to change them
item.style.fontSize = "42px"

}