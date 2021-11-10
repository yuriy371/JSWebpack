import { animate } from "./helpers"
const sendForm = ({ formId, formIdModal, formIdMess, someElem = [] }) => {
    let form = document.getElementById(formId)
    let formModal = document.getElementById(formIdModal)
    let formMess = document.getElementById(formIdMess)

    let statusBlock = document.createElement("div")
    let loadText = "Загрузка..."
    let errorText = "Ошибка"
    let successText = "Спасибо! Наш менеджер с вами свяжется."

    let validSuccess = (item) => {
        let validTextName = /[^А-Я\s-]/gi
        let validPhone = /[^\d()\-+]/g
        let validEmail = /^([A-Z\d_\-\.!~*'])+\@([A-Z\d])+\.([A-Z]{2,3})$/gi

        let name = item.querySelector("[name='user_name']")
        let phone = item.querySelector("[name='user_phone']")
        let email = item.querySelector("[name='user_email']")
        let mess = item.querySelector("[name='user_message']")

        if (validEmail.test(email.value) && email.value !== "") {
            statusBlock.remove()
            statusBlock.textContent = ""
            statusBlock.style.color = ""
            email.classList.add("success")
        } else {
            email.classList.remove("success")
            statusBlock.textContent = "Почта введена не правильно"
            statusBlock.style.color = "#ffffff"
            item.append(statusBlock)
        }

        if (!validTextName.test(name.value) && name.value !== "") {
            name.classList.add("success")
            name.value = name.value.replace(validTextName, "")
        } else {
            name.classList.remove("success")
            name.value = name.value.replace(validTextName, "")
        }

        if (mess) {
            if (!validTextName.test(mess.value) && mess.value !== "") {
                mess.classList.add("success")
                mess.value = mess.value.replace(validTextName, "")
            } else {
                mess.classList.remove("success")
                mess.value = mess.value.replace(validTextName, "")
            }
        }

        if (!validPhone.test(phone.value) && phone.value !== "") {
            phone.classList.add("success")
            phone.value = phone.value.replace(validPhone, "")
        } else {
            phone.classList.remove("success")
            phone.value = phone.value.replace(validPhone, "")
        }
    }

    let validate = (list) => {
        let success = true

        list.forEach(input => {
            if (!input.classList.contains("success")) {
                success = false
                console.log(input);
            }
        })

        return success
    }

    let sendData = async (data) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        return await res.json()
    }

    let submitForm = (item) => {
        let formElements = item.querySelectorAll("input")
        let formData = new FormData(item)
        let formBody = {}

        statusBlock.style.cssText = `
        width: 20px;
        height: 20px;
        margin: auto;
        background-color: #337ab7;
        border-radius: 20%;
        color: #ffffff;
        `
        animate({
            duration: 1000,
            timing(timeFraction) {
                return timeFraction
            },
            draw(progress) {
                statusBlock.style.opacity = progress
            }
        });

        item.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            let element = document.getElementById(elem.id)

            if (elem.type === "block") {
                formBody[elem.id] = element.textContent
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.style.cssText = ""
                statusBlock.style.color = "#ffffff"
                statusBlock.textContent = successText
                formElements.forEach(input => {
                    input.value = ""
                })
            })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            console.log("error");
        }
    }

    try {
        if (!form || !formModal || !formMess) {
            throw new Error("Верните форму на место!")
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault()
            submitForm(form)
        })

        formModal.addEventListener("submit", (e) => {
            e.preventDefault()
            submitForm(formModal)
        })

        formMess.addEventListener("submit", (e) => {
            e.preventDefault()
            submitForm(formMess)
        })

        form.addEventListener("input", () => { validSuccess(form) })
        formModal.addEventListener("input", () => { validSuccess(formModal) })
        formMess.addEventListener("input", () => { validSuccess(formMess) })
    } catch (error) {
        console.log(error.message);
    }
}
export default sendForm