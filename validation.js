
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        tabButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        tabContents.forEach(function(content) {
            content.classList.remove('active');
        });

        button.classList.add('active');
        tabContents[index].classList.add('active');
    });
});

validateEGN = (egn) => {

}

validateEIK = (eik) => {

}

validateLNCH = (lnch) => {

}