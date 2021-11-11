const menu = () => {
    let menuBtn = document.querySelector(".menu")
    let menu = document.querySelector("menu")
    let scroll = document.querySelector("a[href='#service-block']")

    let handleMenu = () => {
        menu.classList.toggle("active-menu")
    }

    let smoothScroll = (itemScrol) => {
        let blockID = itemScrol.getAttribute('href').slice(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    menuBtn.addEventListener("click", (e) => {
        if (e.target.closest(".menu")) {
            handleMenu()
        }
    })

    scroll.addEventListener("click", (e) => {
        e.preventDefault()
        smoothScroll(scroll)
    })

    menu.addEventListener("click", (e) => {
        let nameTag = e.target
        if (e.target.matches("ul>li>a")) {
            e.preventDefault()
            handleMenu()
            smoothScroll(nameTag)
        } else if (e.target.closest(".close-btn")) {
            e.preventDefault()
            handleMenu()
        } else {
            return
        }
    })
}

export default menu