const totalmoney = document.querySelector(".totalMoney");
const newMoneyInput = document.querySelector("#newMoney");
totalmoney = parseInt(totalmoney);
newMoneyInput = parseInt(newMoneyInput);

//const addMoneyBtn = document.querySelector("#addMonney");
//const retireMoneyBtn = document.querySelector("#retire");
const numbers = document.querySelector(".numbers");
//const playBtn = document.querySelector("#playBtn");

wallet = () => {
    // input += money
    function addMoneyBtn() {
        totalmoney.innerHTML = totalmoney+newMoneyInput;
        return addMoneyBtn();
    }
    
    function retireMoneyBtn() {
        totalmoney.innerHTML = totalmoney-newMoneyInput;
        return retireMoneyBtn()
    } 
}

function game() {
    if (money >= 10) {
        const jackpot = document.getElementById("playBtn");
        jackpot = () => {
            const bet = totalmoney - 10;
        }
        //play == random numbers
        if (playBtn() == true) {
            
            numbers.forEach(number => {
                number=Math.random() * 100;
            if (number !== number) {
                return alert("Bad luck, try again!!")
            } else {
                totalmoney = totalmoney+bet;
                return alert('WIIINEEEEER!, YOU REALLY ARE LUCKY TODAY, PLAY AGAIN!!')
            }
        })
    
    }
        }
}
