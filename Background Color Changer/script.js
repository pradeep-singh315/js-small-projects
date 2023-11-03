// Accessing elements
let divOne = document.querySelector("#firstDiv")
let divTwo = document.getElementById("secondDiv")
let divThree = document.getElementById("thirdDiv")
let divFour = document.getElementById("fourthDiv")


const colorArray = ["red", "aqua", "sandybrown", "grey"]
// divTwo.addEventListener('click' , () => {
//     document.body.style.backgroundColor = colorArray[0]
// })

function bgChanger(arr, color)
{
    arr.addEventListener("click", () => {
        document.body.style.backgroundColor =color
    })
}
bgChanger(divOne, colorArray[0])
bgChanger(divTwo, colorArray[1])
bgChanger(divThree, colorArray[2])
bgChanger(divFour, colorArray[3])