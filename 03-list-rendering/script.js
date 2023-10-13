const name = ["Abel", "Barry", "Charlie", "Daniel"]
document.querySelector('#display-btn')
.addEventListener('click', function(){
    const nameListElement= document.querySelector("#names")
    for (let n of names) {
        nameListElement.innerHTML += `<li>${n}</li>`
    }
})