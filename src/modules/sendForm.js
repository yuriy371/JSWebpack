import { animate, avtoCloseModal } from "./helpers"
const sendForm = ({ formId, formIdModal, formIdMess, someElem = [] }) => {
    let form = document.getElementById(formId)
    let formModal = document.getElementById(formIdModal)
    let formMess = document.getElementById(formIdMess)

    let statusBlock = document.createElement("div")
    let loadText = "Загрузка..."
    let errorText = "Ошибка"
    let successText = "Спасибо! Наш менеджер с вами свяжется."

    let check = (item) => {
        item.value = item.value.replace(/\s+/, " ")
        item.value = item.value.replace(/-+/, "-").replace(/\++/, "+")
        item.value = item.value.replace(/(^[\s\-]+)/g, "").replace(/[\s\-]+$/g, "")
    }

    let validSuccess = (item) => {
        let validTextName = /[^А-Я\s-]/gi
        let validPhone = /[^\d\+]/g
        let validEmail = /^([A-Z\d_\-\.!~*'])+\@([A-Z\d])+\.([A-Z]{2,3})$/gi

        let name = item.querySelector("[name='user_name']")
        let phone = item.querySelector("[name='user_phone']")
        let email = item.querySelector("[name='user_email']")
        let mess = item.querySelector("[name='user_message']")

        if (validEmail.test(email.value) && email.value !== "") {
            check(email)
            statusBlock.remove()
            email.classList.add("success")
        } else {
            check(email)
            email.classList.remove("success")
            statusBlock.textContent = "Почта введена не правильно"
            statusBlock.style.cssText = `
            color: #eeff00;
            font-size: 19px;
            padding: 10px 0;
            `
            item.append(statusBlock)
        }

        if (!validTextName.test(name.value) && name.value !== "") {
            check(name)
            name.classList.add("success")
            name.value = name.value.replace(validTextName, "")
        } else {
            name.classList.remove("success")
            name.value = name.value.replace(validTextName, "")
        }

        if (mess) {
            if (!validTextName.test(mess.value) && mess.value !== "") {
                check(mess)
                mess.classList.add("success")
                mess.value = mess.value.replace(validTextName, "")
            } else {
                mess.classList.remove("success")
                mess.value = mess.value.replace(validTextName, "")
            }
        }

        if (!validPhone.test(phone.value) && phone.value !== "") {
            check(phone)
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

        statusBlock.textContent = loadText
        statusBlock.style.color = "#ffffff"
        item.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            let element = document.getElementById(elem.id)

            if (elem.type === "block" && element.textContent !== "0") {
                formBody[elem.id] = element.textContent
            } else if (elem.type === "input" && element.textContent !== 0) {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements, item)) {
            sendData(formBody).then(data => {
                let clearStatBlock = setInterval(() => {
                    if (statusBlock) {
                        avtoCloseModal({
                            elemModal(modal) {
                                if (modal.style.opacity == 1) {
                                    animate({
                                        duration: 500,
                                        timing(timeFraction) {
                                            return timeFraction;
                                        },
                                        draw(progress) {
                                            modal.style.opacity = 1 - progress
                
                                            if (modal.style.opacity == 0) {
                                                modal.style.display = "none"
                                            }
                                        }
                                    });
                                }
                            }
                        })
                        statusBlock.remove()
                        clearInterval(clearStatBlock)
                    }
                }, 3000)
                
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