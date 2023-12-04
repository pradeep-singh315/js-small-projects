const startBtn = document.querySelector("#startBtn")
const stopBtn = document.querySelector("#stopBtn")
let intervalID

const randomColor = () =>{
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(i = 0; i < 6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

const changeColor = () => {

    document.body.style.backgroundColor = randomColor()
    console.log("object");
}

const changebgColor = () => {
    if(!intervalID)
    {
       intervalID = setInterval(changeColor, 1000)
    }
}

startBtn.addEventListener("click", changebgColor)

stopBtn.addEventListener("click", () =>{
    clearInterval(intervalID)
    intervalID = null
})