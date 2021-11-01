const menu = () => {
    let menu = document.querySelector("menu")
    let scroll = document.querySelector("a[href='#service-block']")
    let body = document.querySelector("body")

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

    body.addEventListener("click", (e) => {
        console.log(!e.target.closest("menu"));
        if (e.target.closest(".menu")) {
            handleMenu()
        } else if (e.target.matches("ul>li>a")) {
            e.preventDefault()
            handleMenu()
            smoothScroll(e.target)
        } else if (!e.target.closest("menu") || e.target.classList.contains("close-btn")) {
            handleMenu()
        } else if (e.target.closest(".menu")) {
            handleMenu()
        } else if (e.target.closest("a[href='#service-block']")) {
            e.preventDefault()
            smoothScroll(scroll)
        } else {
            return
        }
    })
}

export default menu