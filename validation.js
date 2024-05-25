const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        tabButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });
        tabContents.forEach(function (content) {
            content.classList.remove('active');
        });

        button.classList.add('active');
        tabContents[index].classList.add('active');
    });
});

function validateEGN(egn) {
    if (typeof egn !== 'string' || egn.length !== 10) {
        return { isValid: false };
    }

    let year = parseInt(egn.slice(0, 2), 10);
    let month = parseInt(egn.slice(2, 4), 10);
    let day = parseInt(egn.slice(4, 6), 10);

    if (month > 40) {
        year += 2000;
        month -= 40;
    } else if (month > 20) {
        year += 1800;
        month -= 20;
    } else {
        year += 1900;
    }

    let date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        return { isValid: false };
    }

    let genderDigit = parseInt(egn.slice(8, 9), 10);
    let gender = genderDigit % 2 === 0 ? 'Мъж' : 'Жена';

    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += parseInt(egn[i], 10) * weights[i];
    }

    let remainder = sum % 11;
    if (remainder === 10) {
        remainder = 0;
    }

    let isValid = remainder === parseInt(egn[9], 10);

    return { isValid, birthDate: date, gender };
}

document.getElementById('egn').addEventListener('input', function () {
    let egn = this.value;
    let result = validateEGN(egn);
    let resultElement = document.getElementById('egnResult');
    if (result.isValid) {
        this.classList.remove('invalid');
        resultElement.textContent = `ЕГН е валидно. Дата на раждане: ${result.birthDate.toLocaleDateString()}. Пол: ${result.gender}.`;
    } else {
        this.classList.add('invalid');
        resultElement.textContent = 'ЕГН не е валидно.';
    }
});

function validateEIK(eik) {

}

function validateLNCH(lnch) {

}
