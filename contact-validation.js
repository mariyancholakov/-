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
        setError(Name, "Name is required")
        isValid = false
    }
    else{
        setSuccess(Name)
    }
    
    if(phoneValue.length != 10){
        setError(phone, "Phone number must contain 10 digits")
        isValid = false
    }
    else{
        setSuccess(phone)
    }

    if(emailValue === ''){
        setError(email, "Email is required ")
        isValid = false
    }
    else{
        setSuccess(email)
    }

    if(messageValue === ''){
        setError(message, "Message is required")
        isValid = false
    }
    else{
        setSuccess(message)
    }

    if(isValid){
    const showButton = document.getElementById("showButton")
    const closeButton = document.getElementById("closeButton")
    const popMessage = document.getElementById("pop-up-message")


    showButton.addEventListener('click', (e) => {
    e.preventDefault()
    popMessage.classList.add("active");
    })

    closeButton.addEventListener('click', () => {
        popMessage.classList.remove("active");
    })
    }
}


