const calc = (price = 100) => {
    let calcBlok = document.querySelector(".calc-block")
    let calcType = document.querySelector(".calc-type")
    let calcSquare = document.querySelector(".calc-square")
    let calcCount = document.querySelector(".calc-count")
    let calcDay = document.querySelector(".calc-day")
    let total = document.getElementById("total")

    

    let outNum = (num, elem) => {
        let step = 1;
        let n = 0;
        let interval = setInterval(() => {
            n += step;
            if (n == num) {
                clearInterval(interval);
            }
            
            calcBlok.addEventListener("input", (e) => {
                if (e.target === calcType || e.target === calcSquare ||
                    e.target === calcCount || e.target === calcDay) {
                        clearInterval(interval);
                }
            })

            elem.innerHTML = n;
        }, 1);
        console.log(num, elem);
    }

    let coutCalc = () => {
        let calcTypeValue = +calcType.options[calcType.selectedIndex].value
        let calcSquareValue = calcSquare.value

        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
            outNum(totalValue, total)
        } else {
            totalValue = 0
        }
    }

    calcBlok.addEventListener("input", (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            coutCalc()
        }
    })
}

export default calc