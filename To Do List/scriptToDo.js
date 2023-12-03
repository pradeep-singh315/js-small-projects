let inp = document.querySelector("input")
let ul = document.querySelector("ul")
let listItems = document.querySelectorAll("li")
let addButton = document.querySelector("#adBtn")
let removeBtn = document.querySelectorAll("#rmvBtn")

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

    ul.addEventListener("click", (event) =>{
    let prntElement = event.target.parentElement
    console.log(prntElement);
    prntElement.style.display = "none"
})
