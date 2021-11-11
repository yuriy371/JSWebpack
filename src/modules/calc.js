const calc = (price = 100) => {
    let calcBlok = document.querySelector(".calc-block")
    let calcType = document.querySelector(".calc-type")
    let calcSquare = document.querySelector(".calc-square")
    let calcCount = document.querySelector(".calc-count")
    let calcDay = document.querySelector(".calc-day")
    let total = document.getElementById("total")

    let outNum = (num, shift = 10, speed = 1) => {
        let interval = setInterval(() => {
            if (total.innerHTML * 1 + shift >= num) {
                total.innerHTML = num
                clearInterval(interval)
            } else {
                total.innerHTML = total.innerHTML * 1 + shift
            }
            calcBlok.addEventListener("input", (e) => {
                if (e.target === calcType || e.target === calcSquare ||
                    e.target === calcCount || e.target === calcDay) {
                    clearInterval(interval);
                }
            })
        }, speed)
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
            outNum(totalValue, 50, 1)
        } else {
            totalValue = 0
            calcSquare.value = ""
            calcCount.value = ""
            calcDay.value = ""
            outNum(totalValue)
            
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