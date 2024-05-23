const showButton = document.getElementById("showButton")
const closeButton = document.getElementById("closeButton")
const message = document.getElementById("pop-up-message")
const messageInput = document.getElementById("message")
const emailInput = document.getElementById("email")


const showMessage = () => {
    message.classList.add("active");
}

const closeMessage = () => {
    message.classList.remove("active");
}