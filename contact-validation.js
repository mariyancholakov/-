const form = document.getElementById("form")
const Name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")


form.addEventListener('submit', (e) => {
    e.preventDefault()

    validateInputs()
})

const setError = (element, message) => {
    const inputElement = element.parentElement
    const errorDisplay = inputElement.querySelector('.error')

    errorDisplay.innerText = message;
    inputElement.classList.add('error')
    inputElement.classList.remove('success')
}

const setSuccess = (element) => {
    const inputElement = element.parentElement
    const errorDisplay = inputElement.querySelector('.error')

    errorDisplay.innerText = ''
    inputElement.classList.add('success')
    inputElement.classList.remove('error')
}

const validateInputs = () => {
    const NameValue = Name.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const messageValue = message.value.trim()
    let isValid = true

    if(NameValue === ''){
        setError(Name, "Необходимо е име")
        isValid = false
    }
    else{
        setSuccess(Name)
    }

    if(phoneValue === ''){
        setError(phone, "Необходим е телефонен номер")
        isValid = false
    }
    else if(phoneValue.length === 10 || phoneValue.length === 13){
        setSuccess(phone)
    }
    else{
        setError(phone, "Телефонният номер e невалиден")
        isValid = false
    }

    if(emailValue === ''){
        setError(email, "Необходим е имейл")
        isValid = false
    }
    else{
        setSuccess(email)
    }

    if(messageValue === ''){
        setError(message, "Необходимо е съобщение")
        isValid = false
    }
    else{
        setSuccess(message)
    }

    if(isValid){
    const closeButton = document.getElementById("closeButton")
    const popMessage = document.getElementById("pop-up-message")
    let sec = 0
    const counter = document.getElementById("counter")
    
    popMessage.classList.add("active");

    setInterval(() => {
            counter.innerHTML = '5' - sec
            sec++
            if(counter.innerHTML === '0'){
                popMessage.classList.remove("active");
                window.location.reload(true)
            }
    }, 1000)

    closeButton.addEventListener('click', () => {
        popMessage.classList.remove("active");
        window.location.reload(true)
    })
    }
}


