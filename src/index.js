import timer from "./modules/timer"
import menu from "./modules/menu"
import modal from "./modules/modal"
import validate from "./modules/validate"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc"
import sendForm from "./modules/sendForm"

timer("31 december 2021")
menu()
modal()
validate()
tabs()
slider(".portfolio-content", ".portfolio-item", ".portfolio-dots")
calc(100)
sendForm({ 
    formId: "form1", 
    formIdModal: "form3", 
    formIdMess: "form2", 
    someElem: [
        {
            type: "block",
            id: "total"
        }
    ] 
})