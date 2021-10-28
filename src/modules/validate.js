const validate = () => {
    let calcItem = document.querySelectorAll(".calc-item")
    let formApplicat = document.getElementById("form1")
    let formReuest = document.getElementById("form2")
    let formModal = document.getElementById("form3")

    let validNumber = /[^\d]/g
    let validTextName = /[^А-Я" "-]/gi
    let validEmail = /[^A-Z@-_.!~*']/gi
    let validPhone = /[^\d()-]/
    
    let mess = ""

    let validForm = (name, email, phone, mess) => {
        let isError = false
        let nameMess = (mess !== "") ? name.value + mess.value : name.value

        if (!validTextName.test(nameMess) && nameMess !== "") {
            console.log("кирилица");
        } else {
            alert("Ведите текст на русском, поле не должно быть пустым");
            isError = true
        }

        if (validEmail.test(email.value) && email.value !== "") {
            console.log("Правельная почта");
        } else {
            alert("Ведите почту, поле не должно быть пустым");
            isError = true
        }

        if (validPhone.test(phone.value) && phone.value !== "") {
            console.log("Правельный телефон");
        } else {
            alert("Ведите телефон, поле не должно быть пустым");
            isError = true
        }

        if (!isError) {
            alert("Заявка принета");
        }
    }

    calcItem.forEach(item => {
        item.addEventListener("keyup", () => {
            if (!validNumber.test(item.value)) {
                console.log("число");
            } else {
                alert("Введите число");
            }
        })
    })

    formApplicat.addEventListener("submit", (e) => {
        e.preventDefault()

        let itemName = formApplicat.querySelector(".form-name")
        let itemEmail = formApplicat.querySelector(".form-email")
        let itemPhome = formApplicat.querySelector(".form-phone")

        validForm(itemName, itemEmail, itemPhome, mess)
        itemName.value = ""
        itemEmail.value = ""
        itemPhome.value = ""
    })

    formModal.addEventListener("submit", (e) => {
        e.preventDefault()

        let itemName = formModal.querySelector(".form-name")
        let itemEmail = formModal.querySelector(".form-email")
        let itemPhome = formModal.querySelector(".form-phone")

        validForm(itemName, itemEmail, itemPhome, mess)
        itemName.value = ""
        itemEmail.value = ""
        itemPhome.value = ""
    })
    formReuest.addEventListener("submit", (e) => {
        e.preventDefault()

        let itemName = formReuest.querySelector(".form-name")
        let itemEmail = formReuest.querySelector(".form-email")
        let itemPhome = formReuest.querySelector(".form-phone")
        let itemMess = formReuest.querySelector(".mess")

        validForm(itemName, itemEmail, itemPhome, itemMess)
        itemName.value = ""
        itemEmail.value = ""
        itemPhome.value = ""
        itemMess.value = ""
    })

}

export default validate