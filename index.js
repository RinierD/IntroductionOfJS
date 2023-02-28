const totalDiv = document.getElementById("count-div")
const totalAdd = document.getElementById("count-add")
const totalMul = document.getElementById("count-mul")
const totalSub = document.getElementById("count-sub")
const daysofweeks = ["mon", "tues", "wed", "thurs", "Friday", "Status" ]

const num1 = 80
const num2 = 9
let numTotal = 0
function countElement(){
    numTotal = num1 / num2
    totalDiv.innerText = numTotal + " is the division"

    numTotal = num1 + num2
    totalAdd.innerText = numTotal + " is the addition"

    numTotal = num1 * num2
    totalMul.innerText = numTotal + " is the multiplication"

    numTotal = num1 - num2
    totalSub.innerText = numTotal + " is the subtraction"
}
countElement()


console.log(daysofweeks);
daysofweeks.push("Sunday");
console.log(daysofweeks);





