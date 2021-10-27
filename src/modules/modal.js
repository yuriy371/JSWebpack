const modal = () => {
    let popupBtn = document.querySelectorAll(".popup-btn")
    let modal = document.querySelector(".popup")
    let modalCont = document.querySelector(".popup > .popup-content")
    let popupClose = modal.querySelector(".popup-close")
    let winWidth = document.documentElement.clientWidth

    popupBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block"
            let pos = 0

            let animModal = setInterval(() => {
                if (pos === 38) {
                    clearInterval(animModal)
                } else {
                    pos++
                    modalCont.style.left = pos + "%"
                }
            }, 9)

            if (winWidth < 768) {
                clearInterval(animModal)
            }
        })
    })

    popupClose.addEventListener("click", () => {
        modal.style.display = "none"
    })
}

export default modal