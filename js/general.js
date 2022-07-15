//*"*"* DEBUG *"*"*
document.addEventListener("keypress", e => {
    if(e.key = "d") {
        localStorage.clear()
        localStorage.setItem("savedMoney", 5000)
    }
})

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
    buyMultiplier = 25
} else if(buyMultiplierBtnClickCount == 3){
    buyMultiplier = 50
} else if(buyMultiplierBtnClickCount == 4){
    buyMultiplier = 100
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
};
    // button functionality
buyMultiplierBtn.addEventListener("click", () => {
    if(buyMultiplierBtnClickCount == 1){
        buyMultiplierBtnClickCount += 1;
        buyMultiplierBtn.textContent = "25x";
        buyMultiplier = 25;
        localStorage.setItem("buyMultiplierBtnClickCountState", 2);
    } else if(buyMultiplierBtnClickCount == 2){
        buyMultiplierBtnClickCount += 1;
        buyMultiplierBtn.textContent = "50x";
        buyMultiplier = 50;
        localStorage.setItem("buyMultiplierBtnClickCountState", 3);
    } else if(buyMultiplierBtnClickCount == 3){
        buyMultiplierBtnClickCount += 1;
        buyMultiplierBtn.textContent = "100x";
        buyMultiplier = 100;
        localStorage.setItem("buyMultiplierBtnClickCountState", 4);
    } else if(buyMultiplierBtnClickCount == 4){
        buyMultiplierBtnClickCount = 1;
        buyMultiplierBtn.textContent = "1x";
        buyMultiplier = 1;
        localStorage.setItem("buyMultiplierBtnClickCountState", 1);
    };
});
//towers
let towers = {
    t1: {
        upgradePrice: 10,
        priceDisplay: document.getElementById("tower1Buy"),
        levelDisplay: document.getElementById("tower1Lvl"),
        profitDisplay: document.getElementById("tower1Profit"),
        speedDisplay: document.getElementById("tower1Speed"),
    },
    t2: {
        upgradePrice: 20,
        priceDisplay: document.getElementById("tower2Buy"),
        levelDisplay: document.getElementById("tower2Lvl"),
        profitDisplay: document.getElementById("tower2Profit"),
        speedDisplay: document.getElementById("tower2Speed"),
    },
    t3: {
        upgradePrice: 30,
        priceDisplay: document.getElementById("tower3Buy"),
        levelDisplay: document.getElementById("tower3Lvl"),
        profitDisplay: document.getElementById("tower3Profit"),
        speedDisplay: document.getElementById("tower3Speed"),
    },
    t4: {
        upgradePrice: 40,
        priceDisplay: document.getElementById("tower4Buy"),
        levelDisplay: document.getElementById("tower4Lvl"),
        profitDisplay: document.getElementById("tower4Profit"),
        speedDisplay: document.getElementById("tower4Speed"),
    },
    t5: {
        upgradePrice: 50,
        priceDisplay: document.getElementById("tower5Buy"),
        levelDisplay: document.getElementById("tower5Lvl"),
        profitDisplay: document.getElementById("tower5Profit"),
        speedDisplay: document.getElementById("tower5Speed"),
    },
    t6: {
        upgradePrice: 60,
        priceDisplay: document.getElementById("tower6Buy"),
        levelDisplay: document.getElementById("tower6Lvl"),
        profitDisplay: document.getElementById("tower6Profit"),
        speedDisplay: document.getElementById("tower6Speed"),
    },
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
        towers[`t${towerNum}`].level = defStats.level;
        towers[`t${towerNum}`].profit = defStats.profit * towerNum;
        towers[`t${towerNum}`].speed = defStats.speed * towerNum;
        towers[`t${towerNum}`].priceDisplay.textContent = towers[`t${towerNum}`].upgradePrice + " $";
        towers[`t${towerNum}`].levelDisplay.textContent = "Level: " + towers[`t${towerNum}`].level;
        towers[`t${towerNum}`].profitDisplay.textContent ="Profit: " + towers[`t${towerNum}`].profit + "$";
        towers[`t${towerNum}`].speedDisplay.textContent = "Speed: " + towers[`t${towerNum}`].speed + "s";
        localStorage.setItem(`t${towerNum}UpgradePriceStored`, towers[`t${towerNum}`].upgradePrice);
        localStorage.setItem(`t${towerNum}LevelStored`, towers[`t${towerNum}`].level);
        localStorage.setItem(`t${towerNum}ProfitStored`, towers[`t${towerNum}`].profit);
        localStorage.setItem(`t${towerNum}SpeedStored`, towers[`t${towerNum}`].speed);
        localStorage.setItem(`t${towerNum}Generated`, true);
        return [ towers[`t${towerNum}`].level, towers[`t${towerNum}`].profit, towers[`t${towerNum}`].speed];
    } else {
        towers[`t${towerNum}`].upgradePrice = localStorage.getItem(`t${towerNum}UpgradePriceStored`) * 1;
        towers[`t${towerNum}`].level = localStorage.getItem(`t${towerNum}LevelStored`) * 1;
        towers[`t${towerNum}`].profit = localStorage.getItem(`t${towerNum}ProfitStored`) * 1;
        towers[`t${towerNum}`].speed = localStorage.getItem(`t${towerNum}SpeedStored`) * 1; 
        towers[`t${towerNum}`].priceDisplay.textContent = towers[`t${towerNum}`].upgradePrice + " $";
        towers[`t${towerNum}`].levelDisplay.textContent = "Level: " + towers[`t${towerNum}`].level;
        towers[`t${towerNum}`].profitDisplay.textContent ="Profit: " + towers[`t${towerNum}`].profit + "$";
        towers[`t${towerNum}`].speedDisplay.textContent = "Speed: " + towers[`t${towerNum}`].speed + "s";
    }
};

//unlocking towers
let t2BuyBtn = document.getElementById("tower2BuyBtn");
t2BuyBtn.addEventListener("click", () => {
    if(money >= 200) {
        makeTower(2);
        let t2Block = document.getElementById("tower2Locked");
        t2Block.style.display = "none";
        money -= 200; 
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
    };
});
let t3BuyBtn = document.getElementById("tower3BuyBtn");
t3BuyBtn.addEventListener("click", () => {
    if(localStorage.getItem(`t2Generated`) == "true" && money >= 300) {
        makeTower(3);
        let t3Block = document.getElementById("tower3Locked");
        t3Block.style.display = "none";
        money -= 300; 
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
    };
});
let t4BuyBtn = document.getElementById("tower4BuyBtn");
t4BuyBtn.addEventListener("click", () => {
    if(localStorage.getItem(`t3Generated`) == "true" && money >= 400) {
        makeTower(4);
        let t4Block = document.getElementById("tower4Locked");
        t4Block.style.display = "none";
        money -= 400; 
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
    };
});
let t5BuyBtn = document.getElementById("tower5BuyBtn");
t5BuyBtn.addEventListener("click", () => {
    if(localStorage.getItem(`t4Generated`) == "true" && money >= 500) {
        makeTower(5);
        let t5Block = document.getElementById("tower5Locked");
        t5Block.style.display = "none";
        money -= 500; 
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
    };
});
let t6BuyBtn = document.getElementById("tower6BuyBtn");
t6BuyBtn.addEventListener("click", () => {
    if(localStorage.getItem(`t5Generated`) == "true"  && money >= 600) {
        makeTower(6);
        let t6Block = document.getElementById("tower6Locked");
        t6Block.style.display = "none";
        money -= 600; 
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
    };
});

//generate towers on load
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

//upgrade button

function tUpgrade(tower, towerMultiplier, upgradeAmount) {
    for( let i = 1; i < upgradeAmount + 1; i++ ) {
        towers[tower].upgradePrice += (towers[tower].upgradePrice / 10) * 0.5 ;
        towers[tower].upgradePrice = Math.round(towers[tower].upgradePrice)
        towers[tower].level += 1 * towerMultiplier;
        towers[tower].profit += 1 * towerMultiplier; 
        if(towers[tower].level % 15 == 0 &&  towers[tower].speed >= 1) {
            towers[tower].speed -= 1 * towerMultiplier;
        };
        localStorage.setItem(`t${tower.charAt(1)}UpgradePriceStored`, towers[`t${tower.charAt(1)}`].upgradePrice);
        localStorage.setItem(`t${tower.charAt(1)}LevelStored`, towers[`t${tower.charAt(1)}`].level);
        localStorage.setItem(`t${tower.charAt(1)}ProfitStored`, towers[`t${tower.charAt(1)}`].profit);
        localStorage.setItem(`t${tower.charAt(1)}SpeedStored`, towers[`t${tower.charAt(1)}`].speed);
        towers[tower].priceDisplay.textContent = towers[tower].upgradePrice + " $";
        towers[tower].levelDisplay.textContent = "Level: " + towers[tower].level;
        towers[tower].profitDisplay.textContent ="Profit: " + towers[tower].profit + "$";
        towers[tower].speedDisplay.textContent = "Speed: " + towers[tower].speed + "s";
    };
};

//upgarde price

// assign tUpgrade() to buy buttons
let t1UpgradeBtn = document.getElementById("tower1Buy");
t1UpgradeBtn.addEventListener("click", () => {
    if(money >= towers.t1.upgradePrice){
        money -= towers.t1.upgradePrice;
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
        tUpgrade("t1", 1, buyMultiplier);
    };
});

let t2UpgradeBtn = document.getElementById("tower2Buy");
t2UpgradeBtn.addEventListener("click", () => {
    if(money >= towers.t2.upgradePrice){
        money -= towers.t2.upgradePrice;
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
        tUpgrade("t2", 2, buyMultiplier);
    };
});

let t3UpgradeBtn = document.getElementById("tower3Buy");
t3UpgradeBtn.addEventListener("click", () => {
    if(money >= towers.t3.upgradePrice){
        money -= towers.t3.upgradePrice;
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
        tUpgrade("t3", 3, buyMultiplier);
    };
});

let t4UpgradeBtn = document.getElementById("tower4Buy");
t4UpgradeBtn.addEventListener("click", () => {
    if(money >= towers.t4.upgradePrice){
        money -= towers.t4.upgradePrice;
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
        tUpgrade("t4", 4, buyMultiplier);
    };
});

let t5UpgradeBtn = document.getElementById("tower5Buy");
t5UpgradeBtn.addEventListener("click", () => {
    if(money >= towers.t5.upgradePrice){
        money -= towers.t5.upgradePrice;
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
        tUpgrade("t5", 5, buyMultiplier);
    };
});

let t6UpgradeBtn = document.getElementById("tower6Buy");
t6UpgradeBtn.addEventListener("click", () => {
    if(money >= towers.t6.upgradePrice){
        money -= towers.t6.upgradePrice;
        localStorage.setItem("savedMoney", money)
        moneyDisplay.textContent = money + " $";
        tUpgrade("t6", 6, buyMultiplier);
    };
});