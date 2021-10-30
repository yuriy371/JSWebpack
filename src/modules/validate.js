const validate = () => {
    let calcItem = document.querySelectorAll(".calc-item")
    let formApplicat = document.querySelectorAll("#form1")
    let formReuest = document.querySelectorAll("#form2")
    let formModal = document.querySelectorAll("#form3")

    let validNumber = /[^\d]/g
    let validTextName = /[^А-Я\s-]/gi
    let validPhone = /[^\d()\-+]/g

    let check = (item) => {
        item.value = item.value.replace(/\s+/, " ")
        item.value = item.value.replace(/-+/, "-")
        item.value = item.value.replace(/(^[\s\-]+)/g, "").replace(/[\s\-]+$/g, "")
    }

    let checkName = (name) => {
        if (!validTextName.test(name.value) && name.value !== "") {
            name.value = name.value[0].toUpperCase() + name.value.slice(1)
            console.log("кирилица");
        } else {
            name.value = name.value.replace(validTextName, "")
        }
    }

    let checkEmail = (email) => {
        let validEmail = /^([A-Z\d_\-\.!~*'])+\@([A-Z\d])+\.([A-Z]{2,3})$/gi

        if (validEmail.test(email.value) && email.value !== "") {
            console.log("правельно");
        } else {
            email.value = ""
        }
    }

    let checkPhone = (phone) => {
        if (!validPhone.test(phone.value) && phone.value !== "") {
            console.log("Правельный телефон");
        } else {
            phone.value = phone.value.replace(validPhone, "")
        }
    }

    formApplicat.forEach(item => {
        let btn = item.querySelector(".form-btn")
        let inputName = item.querySelector(".form-name")
        let inputEmail = item.querySelector(".form-email")
        let inputPhone = item.querySelector(".form-phone")

        inputName.addEventListener("blur", () => {
            check(inputName)
            checkName(inputName)
        })

        inputEmail.addEventListener("blur", () => {
            check(inputEmail)
            checkEmail(inputEmail)
        })

        inputPhone.addEventListener("blur", () => {
            check(inputPhone)
            checkPhone(inputPhone)
        })

        btn.addEventListener("click", (e) => {
            e.preventDefault()
            inputName.value = ""
            inputEmail.value = ""
            inputPhone.value = ""
        })
    })

    formReuest.forEach(item => {
        let btn = item.querySelector(".form-btn")
        let inputName = item.querySelector(".form-name")
        let inputEmail = item.querySelector(".form-email")
        let inputPhone = item.querySelector(".form-phone")
        let inputMess = item.querySelector(".mess")

        inputName.addEventListener("blur", () => {
            check(inputName)
            checkName(inputName)
        })

        inputMess.addEventListener("blur", () => {
            check(inputMess)
            checkName(inputMess)
        })

        inputEmail.addEventListener("blur", () => {
            check(inputEmail)
            checkEmail(inputEmail)
        })

        inputPhone.addEventListener("blur", () => {
            check(inputPhone)
            checkPhone(inputPhone)
        })

        btn.addEventListener("click", () => {
            inputName.value = ""
            inputEmail.value = ""
            inputPhone.value = ""
            inputMess.value = ""
        })
    })

    formModal.forEach(item => {
        let btn = item.querySelector(".form-btn")
        let inputName = item.querySelector(".form-name")
        let inputEmail = item.querySelector(".form-email")
        let inputPhone = item.querySelector(".form-phone")

        inputName.addEventListener("blur", () => {
            check(inputName)
            checkName(inputName)
        })

        inputEmail.addEventListener("blur", () => {
            check(inputEmail)
            checkEmail(inputEmail)
        })

        inputPhone.addEventListener("blur", () => {
            check(inputPhone)
            checkPhone(inputPhone)
        })

        btn.addEventListener("click", () => {
            inputName.value = ""
            inputEmail.value = ""
            inputPhone.value = ""
        })
    })

    calcItem.forEach(item => {
        item.addEventListener("blur", () => {
            if (!validNumber.test(item.value)) {
                console.log("число");
            } else {
                item.value = item.value.replace(validNumber, "")
            }
        })
    })
}

export default validate