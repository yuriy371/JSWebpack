const slider = () => {
    let sliderBlock = document.querySelector(".portfolio-content")
    let slides = document.querySelectorAll(".portfolio-item")
    let portfolioDots = document.querySelector(".portfolio-dots")
    let dots = []

    let timeInterval = 2000

    let currentSlide = 0
    let interval

    let creatDot = () => {
        slides.forEach((item, index) => {
            let liDot = document.createElement("li")

            if (index === 0) {
                liDot.className = "dot dot-active"
            } else {
                liDot.className = "dot"
            }

            portfolioDots.append(liDot)

            dots.push(liDot)
        })
    }

    let prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    let nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    let autoSlide = () => {
        prevSlide(slides, currentSlide, "portfolio-item-active")
        prevSlide(dots, currentSlide, "dot-active")

        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        nextSlide(slides, currentSlide, "portfolio-item-active")
        nextSlide(dots, currentSlide, "dot-active")
    }

    let startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    let stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener("click", (e) => {
        e.preventDefault()

        if (!e.target.matches(".dot, .portfolio-btn")) {
            return
        }

        prevSlide(slides, currentSlide, "portfolio-item-active")
        prevSlide(dots, currentSlide, "dot-active")

        if (e.target.matches("#arrow-right")) {
            currentSlide++
        } else if (e.target.matches("#arrow-left")) {
            currentSlide--
        } else if (e.target.classList.contains("dot")) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, "portfolio-item-active")
        nextSlide(dots, currentSlide, "dot-active")
    })

    sliderBlock.addEventListener("mouseenter", (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener("mouseleave", (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
            startSlide(timeInterval)
        }
    }, true)

    creatDot()
    startSlide(timeInterval)
}

export default slider