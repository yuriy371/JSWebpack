const modal = () => {
    let popupBtn = document.querySelectorAll(".popup-btn")
    let modal = document.querySelector(".popup")
    let popupClose = modal.querySelector(".popup-close")
    let winWidth = document.documentElement.clientWidth

    popupBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            let item = 0
            modal.style.display = "block"
            modal.style.opacity = 0

            if (modal.style.opacity == 0) {
                let animOp = setInterval(() => {
                    if (item >= 1) {
                        clearInterval(animOp)
                    }
                    modal.style.opacity = item
                    item += 0.1
                }, 40)
                
                if (winWidth < 768) {
                    clearInterval(animOp)
                    modal.style.opacity = ""
                }
            }
        })
    })

    popupClose.addEventListener("click", () => {
        let item = 1
        modal.style.opacity = 1

        if (modal.style.opacity == 1) {
            let animOp = setInterval(() => {
                if (item <= 0.1) {
                    clearInterval(animOp)
                    modal.style.display = "none"
                }
                modal.style.opacity = item
                item -= item * 0.1
            }, 20)
            
            if (winWidth < 768) {
                clearInterval(animOp)
                modal.style.opacity = ""
                modal.style.display = "none"
            }
        }
    })
}

export default modal