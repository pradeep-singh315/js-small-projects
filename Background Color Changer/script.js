// Accessing elements
let divContainer = document.querySelector(".container")
let secondHeading = document.querySelector(".second-heading")


divContainer.addEventListener("click", (event) => {
    const clickedBtnColor = event.target.id
    document.body.style.backgroundColor = clickedBtnColor
    secondHeading.style.color = "#fff"
    console.log("clicked");
})