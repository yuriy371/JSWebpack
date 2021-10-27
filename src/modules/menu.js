const menu = () => {
    let menuBtn = document.querySelector(".menu")
    let menu = document.querySelector("menu")
    let closeBtn = menu.querySelector(".close-btn")
    let menuItems = menu.querySelectorAll("ul>li>a")

    let handleMenu = () => {
        menu.classList.toggle("active-menu")
    }

    menuBtn.addEventListener("click", handleMenu)
    closeBtn.addEventListener("click", handleMenu)
    menuItems.forEach(menuItem => menuItem.addEventListener("click", handleMenu))
}

export default menu