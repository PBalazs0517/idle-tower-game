//money

let money;
if(localStorage.getItem("savedMoney") === null) {
    money = 0;
} else {
    money = localStorage.getItem("savedMoney")
};
let moneyDisplay = document.getElementById("money");
moneyDisplay.textContent = money + " $"

//multiplier

let multiplier;
if(localStorage.getItem("savedMultiplier") === null) {
    multiplier = 1;
} else {
    multiplier = localStorage.getItem("savedMultiplier");
};
let multiplierDisplay = document.getElementById("multiplier");
multiplierDisplay.textContent = "Multiplier: " +  multiplier + "x"

// buy multiplier

let buyMultiplierBtnClickCount;
if(localStorage.getItem("buyMultiplierBtnClickCountState") === null){
    buyMultiplierBtnClickCount = 1;
} else {
    buyMultiplierBtnClickCount = localStorage.getItem("buyMultiplierBtnClickCountState") * 1;
};
let buyMultiplier;
    // sets the buyMultiplier on load
if(buyMultiplierBtnClickCount == 1){
    buyMultiplier = 1
} else if(buyMultiplierBtnClickCount == 2){
    buyMultipliert = 25
} else if(buyMultiplierBtnClickCount == 3){
    buyMultiplier = 50
} else if(buyMultiplierBtnClickCount == 4){
    buyMultiplier = 100
} else if(buyMultiplierBtnClickCount == 5){
    buyMultiplier = "Max"
}
let buyMultiplierBtn = document.getElementById("buyMultiplier");
    // sets the buttons text content on load
if(buyMultiplierBtnClickCount == 1){
    buyMultiplierBtn.textContent = "1x"
} else if(buyMultiplierBtnClickCount == 2){
    buyMultiplierBtn.textContent = "25x"
} else if(buyMultiplierBtnClickCount == 3){
    buyMultiplierBtn.textContent = "50x"
} else if(buyMultiplierBtnClickCount == 4){
    buyMultiplierBtn.textContent = "100x"
} else if(buyMultiplierBtnClickCount == 5){
    buyMultiplierBtn.textContent = "Max"
}
    // button functionality
buyMultiplierBtn.addEventListener("click", () => {
    if(buyMultiplierBtnClickCount == 1){
        buyMultiplierBtnClickCount += 1;
        buyMultiplierBtn.textContent = "25x"
        localStorage.setItem("buyMultiplierBtnClickCountState", 2)
    } else if(buyMultiplierBtnClickCount == 2){
        buyMultiplierBtnClickCount += 1;
        buyMultiplierBtn.textContent = "50x"
        localStorage.setItem("buyMultiplierBtnClickCountState", 3)
    } else if(buyMultiplierBtnClickCount == 3){
        buyMultiplierBtnClickCount += 1;
        buyMultiplierBtn.textContent = "100x"
        localStorage.setItem("buyMultiplierBtnClickCountState", 4)
    } else if(buyMultiplierBtnClickCount == 4){
        buyMultiplierBtnClickCount += 1;
        buyMultiplierBtn.textContent = "Max"
        localStorage.setItem("buyMultiplierBtnClickCountState", 5)
    } else if(buyMultiplierBtnClickCount == 5){
        buyMultiplierBtnClickCount = 1;
        buyMultiplierBtn.textContent = "1x"
        localStorage.setItem("buyMultiplierBtnClickCountState", 1)
    }
})