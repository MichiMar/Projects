let money = 100;

const slotMachine = () => {

    const weels = {
        first: [1,1,1,2,2,2,3,3,3];
        second:[1,1,2,2,3,3];
        third: [1,2,3]
    }

    const money = (money) => {
        newMoney = money + 1
    }

    function twist () {
        if (wallet >= 5) {
            let rand = Math.random(weels.keys)
        } else {
            alert("you don't have enought coins")
        }

        const weelOne = (f) =>{
            f = Math.random()*weels[0].lenght;
            return f;
        }
        let weelTwo = (s) => {
            s = Math.random()*weels[1].lenght;
            return s;
        }
        let weelThree = (t) => {
            t = Math.random()*weels[2].lenght;
            return t;
        }

    }
}

slotMachine();