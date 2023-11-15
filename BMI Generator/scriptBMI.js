const ans = document.querySelector("#answer")

function ansDisplay(){
    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    
    if(height == "" || weight == "" || height == 0 || weight == 0)
    {
        ans.innerHTML = "Please enter the valid details..."
    }
    else{
    const bMI = (weight /((height/100)*(height/100))).toFixed(2)

    ans.innerHTML = `Your BMI : ${bMI}`

    if(bMI < 18.6)
    {
        ans.innerHTML += " <br> Under Weight..."
    }
    else if(bMI >= 18.6 && bMI < 25)
    {
        ans.innerHTML += " <br> Normal Weight..."
    }
    else{
        ans.innerHTML += "<br> Over Weight..."
    }
}
}
