import timer from "./modules/timer"
import menu from "./modules/menu"
import modal from "./modules/modal"
import validate from "./modules/validate"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"

timer("31 december 2021")
menu()
modal()
validate()
tabs()
slider(".portfolio-content", ".portfolio-item", ".portfolio-dots")
calc(100)