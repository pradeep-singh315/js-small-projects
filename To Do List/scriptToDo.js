let inp = document.querySelector("input")
let ul = document.querySelector("ul")
let listItems = document.querySelectorAll("li")
let addButton = document.querySelector("#adBtn")
let removeBtn = document.querySelector("#rmvBtn")

addButton.addEventListener("click", () =>{
    let newLi = document.createElement("li")
    newLi.innerText = inp.value
    ul.appendChild(newLi)

    let newBtn = document.createElement("button")
    newBtn.innerText = "Remove"
    newBtn.id = "rmvBtn"
    newLi.appendChild(newBtn)

    inp.value = ""
})

removeBtn.addEventListener("click", () =>{
    let prntElement = removeBtn.parentElement
    console.log(prntElement);
    prntElement.style.display = "none"
})