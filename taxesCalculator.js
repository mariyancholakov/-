

function displayResults(){
    const brutSalary = parseFloat(document.getElementById("brutSalary").value)
    const resultsDiv = document.getElementById("results")
    const closeButton = document.getElementById("closeButton")
    const healthInsurance = 0.032 * brutSalary; // Обикновено здравната осигуровка на служителя е около 3.2% от заплатата
    const pensionInsurance = 0.0838 * brutSalary; // Обикновено пенсионната осигуровка на служителя е около 8.38% от заплатата
    const additionalInsurances = 0.022 * brutSalary; // Обикновено допълнителното осигуряване е около 2.2% от заплатата
    const allInsurances = healthInsurance + pensionInsurance + additionalInsurances
    const taxableAmount = brutSalary - allInsurances // Облагаемата основа
    const incomeTax = 0.1 * taxableAmount // Данък общ доход - в България е 10%
    const netSalary = taxableAmount - incomeTax

const errorMessage = document.getElementById("errorMessage")

    const input = document.getElementById("brutSalary")
    if(brutSalary <= 0 || isNaN(brutSalary)){
        errorMessage.innerHTML = "Моля въведете валидна заплата"
        input.style.border = "1px solid #FF675C"
    }
    else{
        errorMessage.innerHTML = ""
        input.style.border = "1px solid #5dcd6a"
        const netSalaryResult = document.getElementById("netSalaryResult")
        const healthInsuranceResult = document.getElementById("healthInsuranceResult")
        const pensionInsuranceResult = document.getElementById("pensionInsuranceResult")
        const additionalInsurancesResult = document.getElementById("additionalInsurancesResult")
        const taxableAmountResult = document.getElementById("taxableAmountResult")
        const incomeTaxResult = document.getElementById("incomeTaxResult")

    resultsDiv.classList.add("active")
    closeButton.classList.add("active")
    netSalaryResult.innerHTML = `${netSalary.toFixed(2)}лв.`
    healthInsuranceResult.innerHTML = `${healthInsurance.toFixed(2)}лв.`
    pensionInsuranceResult.innerHTML = `${pensionInsurance.toFixed(2)}лв.`
    additionalInsurancesResult.innerHTML = `${additionalInsurances.toFixed(2)}лв.`
    taxableAmountResult.innerHTML = `${taxableAmount.toFixed(2)}лв.`
    incomeTaxResult.innerHTML = `${incomeTax.toFixed(2)}лв.`
    }
}

const closeActiveResults = () => {

    const resultsDiv = document.getElementById("results")
    const closeButton = document.getElementById("closeButton")

    resultsDiv.classList.remove("active")
    closeButton.classList.remove("active")
    window.location.reload(true)
}
