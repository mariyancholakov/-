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
        return {isValid: false};
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
        return {isValid: false};
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

    return {isValid, birthDate: date, gender};
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
    if (typeof eik !== 'string' || (eik.length !== 9 && eik.length !== 13)) {
        return {isValid: false};
    }

    let weights;
    let controlDigitPosition;

    if (eik.length === 9) {
        weights = [1, 2, 3, 4, 5, 6, 7, 8];
        controlDigitPosition = 8;
    } else {
        weights = [2, 7, 3, 5];
        controlDigitPosition = 12;
    }

    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += parseInt(eik[i], 10) * weights[i];
    }

    let remainder = sum % 11;
    if (remainder === 10) {
        sum = 0;
        for (let i = 0; i < weights.length; i++) {
            sum += parseInt(eik[i], 10) * ((weights[i] + 2) % 10);
        }
        remainder = sum % 11;
        if (remainder === 10) {
            remainder = 0;
        }
    }

    let isValid = remainder === parseInt(eik[controlDigitPosition], 10);

    return {isValid, eik};
}

document.getElementById('eik').addEventListener('input', function () {
    let eik = this.value;
    let result = validateEIK(eik);
    let resultElement = document.getElementById('eikResult');
    if (result.isValid) {
        this.classList.remove('invalid');
        resultElement.textContent = `ЕИК е валиден. ЕИК: ${result.eik}.`;
    } else {
        this.classList.add('invalid');
        resultElement.textContent = 'ЕИК не е валиден.';
    }
});

function validateLNCH(lnch) {
    if (typeof lnch !== 'string' || lnch.length !== 10) {
        return false;
    }

    let weights = [21, 19, 17, 13, 11, 9, 7, 3, 1];
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += parseInt(lnch[i], 10) * weights[i];
    }

    let remainder = sum % 10;

    return remainder === parseInt(lnch[9], 10);
}

document.getElementById('lnch').addEventListener('input', function () {
    let lnch = this.value;
    let isValid = validateLNCH(lnch);
    let resultElement = document.getElementById('lnchResult');
    if (isValid) {
        this.classList.remove('invalid');
        resultElement.textContent = 'ЛНЧ е валидно.';
    } else {
        this.classList.add('invalid');
        resultElement.textContent = 'ЛНЧ не е валидно.';
    }
});

// TESTING ONLY
function generateValidLNCH() {
    let lnch = '';
    for (let i = 0; i < 9; i++) {
        lnch += Math.floor(Math.random() * 10);
    }

    let weights = [21, 19, 17, 13, 11, 9, 7, 3, 1];
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += parseInt(lnch[i], 10) * weights[i];
    }

    let remainder = sum % 10;
    lnch += remainder;

    return lnch;
}