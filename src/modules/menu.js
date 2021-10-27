const menu = () => {
    let menuBtn = document.querySelector(".menu")
    let menu = document.querySelector("menu")
    let closeBtn = menu.querySelector(".close-btn")
    let menuItems = menu.querySelectorAll("ul>li>a")
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

    menuBtn.addEventListener("click", handleMenu)
    closeBtn.addEventListener("click", handleMenu)
    menuItems.forEach(menuItem => {
        menuItem.addEventListener("click", (e) => {
            e.preventDefault()
            handleMenu()
            smoothScroll(menuItem)
        })
    })

    scroll.addEventListener("click", (e) => {
        e.preventDefault()
        smoothScroll(scroll)
    })
}

export default menu