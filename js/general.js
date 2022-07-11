//money

let money;
if(localStorage.getItem("savedMoney") === null) {
    money = 0;
} else {
    money = localStorage.getItem("savedMoney")
};
let moneyDisplay = document.getElementById("money");
moneyDisplay.textContent = money + " $";

//multiplier

let multiplier;
if(localStorage.getItem("savedMultiplier") === null) {
    multiplier = 1;
} else {
    multiplier = localStorage.getItem("savedMultiplier");
};
let multiplierDisplay = document.getElementById("multiplier");
multiplierDisplay.textContent = "Multiplier: " +  multiplier + "x";

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
};
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
};
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
    };
});
//towers
let towers = {
    t1: {},
    t2: {},
    t3: {},
    t4: {},
    t5: {},
    t6: {},
};

//default tower stats
let defStats = {
    level: 1,
    profit: 1,
    speed: 10,
};

//function that makes the towers
function makeTower(towerNum) {
    if(localStorage.getItem(`t${towerNum}Generated`) === null) {
        towers[`t${towerNum}`].level = defStats.level * towerNum;
        towers[`t${towerNum}`].profit = defStats.profit * towerNum;
        towers[`t${towerNum}`].speed = defStats.speed * 1.5 * towerNum;
        let lvlDisplay = document.getElementById(`tower${towerNum}Lvl`);
        let profitDisplay = document.getElementById(`tower${towerNum}Profit`);
        let speedDisplay = document.getElementById(`tower${towerNum}Speed`);
        lvlDisplay.textContent = "Level: " + towers[`t${towerNum}`].level;
        profitDisplay.textContent ="Profit: " + towers[`t${towerNum}`].profit + "$";
        speedDisplay.textContent = "Speed: " + towers[`t${towerNum}`].speed + "s";
        localStorage.setItem(`t${towerNum}LevelStored`, towers[`t${towerNum}`].level);
        localStorage.setItem(`t${towerNum}ProfitStored`, towers[`t${towerNum}`].profit);
        localStorage.setItem(`t${towerNum}SpeedStored`, towers[`t${towerNum}`].speed);
        localStorage.setItem(`t${towerNum}Generated`, true);
        return [ towers[`t${towerNum}`].level, towers[`t${towerNum}`].profit, towers[`t${towerNum}`].speed];
    } else {
        towers[`t${towerNum}`].level = localStorage.getItem(`t${towerNum}LevelStored`);
        towers[`t${towerNum}`].profit = localStorage.getItem(`t${towerNum}ProfitStored`);
        towers[`t${towerNum}`].speed = localStorage.getItem(`t${towerNum}SpeedStored`); 
        let lvlDisplay = document.getElementById(`tower${towerNum}Lvl`);
        let profitDisplay = document.getElementById(`tower${towerNum}Profit`);
        let speedDisplay = document.getElementById(`tower${towerNum}Speed`);
        lvlDisplay.textContent = "Level: " + towers[`t${towerNum}`].level;
        profitDisplay.textContent ="Profit: " + towers[`t${towerNum}`].profit + "$";
        speedDisplay.textContent = "Speed: " + towers[`t${towerNum}`].speed + "s";
    }
};

//unlocking towers
let t2BuyBtn = document.getElementById("tower2BuyBtn");
t2BuyBtn.addEventListener("click", () => {
    makeTower(2);
    let t2Block = document.getElementById("tower2Locked");
    t2Block.style.display = "none";
});
let t3BuyBtn = document.getElementById("tower3BuyBtn");
t3BuyBtn.addEventListener("click", () => {
    if(localStorage.getItem(`t2Generated`) == "true") {
        makeTower(3);
        let t3Block = document.getElementById("tower3Locked");
        t3Block.style.display = "none";
    };
});
let t4BuyBtn = document.getElementById("tower4BuyBtn");
t4BuyBtn.addEventListener("click", () => {
    if(localStorage.getItem(`t3Generated`) == "true") {
        makeTower(4);
        let t4Block = document.getElementById("tower4Locked");
        t4Block.style.display = "none";
    };
});
let t5BuyBtn = document.getElementById("tower5BuyBtn");
t5BuyBtn.addEventListener("click", () => {
    if(localStorage.getItem(`t4Generated`) == "true") {
        makeTower(5);
        let t5Block = document.getElementById("tower5Locked");
        t5Block.style.display = "none";
    };
});
let t6BuyBtn = document.getElementById("tower6BuyBtn");
t6BuyBtn.addEventListener("click", () => {
    if(localStorage.getItem(`t5Generated`) == "true") {
        makeTower(6);
        let t6Block = document.getElementById("tower6Locked");
        t6Block.style.display = "none";
    };
});

//generate towers
makeTower(1);
if(localStorage.getItem(`t2Generated`) == "true") {
    makeTower(2);
    let t2Block = document.getElementById("tower2Locked");
    t2Block.style.display = "none";
};
if(localStorage.getItem(`t3Generated`) == "true") {
    makeTower(3);
    let t3Block = document.getElementById("tower3Locked");
    t3Block.style.display = "none";
};
if(localStorage.getItem(`t4Generated`) == "true") {
    makeTower(4);
    let t4Block = document.getElementById("tower4Locked");
    t4Block.style.display = "none";
};
if(localStorage.getItem(`t5Generated`) == "true") {
    makeTower(5);
    let t5Block = document.getElementById("tower5Locked");
    t5Block.style.display = "none";
};
if(localStorage.getItem(`t6Generated`) == "true") {
    makeTower(6);
    let t6Block = document.getElementById("tower6Locked");
    t6Block.style.display = "none";
};