let form = document.getElementById( 'signupform' );
let message = document.getElementById( 'message' );
let close = document.getElementById( 'close' );

form.addEventListener("submit", (e) => {
    e.preventDefault();

    message.classList.add('open');
});

close.addEventListener( 'click', (e) => {
    message.style.display = 'none';
});

