import { animate } from "./helpers"
const modal = () => {
    let popupBtn = document.querySelectorAll(".popup-btn")
    let modal = document.querySelector(".popup")
    let winWidth = document.documentElement.clientWidth

    popupBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "block"

            if (winWidth < 768) {
                clearInterval(animate)
                modal.style.opacity = ""
            } else {
                animate({
                    duration: 600,
                    timing(timeFraction) {
                        return timeFraction
                    },
                    draw(progress) {
                        modal.style.opacity = progress
                    }
                });
            }
        })
    })

    modal.addEventListener("click", (e) => {
        if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
            if (winWidth < 768) {
                modal.style.display = "none"
            } else {
                if (modal.style.opacity == 1) {
                    animate({
                        duration: 500,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            modal.style.opacity = 1 - progress

                            if (modal.style.opacity == 0) {
                                modal.style.display = "none"
                            }
                        }
                    });
                }
            }
        }
    })
}

export default modal