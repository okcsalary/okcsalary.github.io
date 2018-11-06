// Logic for tab "Starshi"

function calculate() {
    if ($('#myonoffswitch').is(':checked')) {
        calculateStarshi()
    } else {
        calculateStarshiBezBonus()
    }
}

function arrow() {
    if ($('#myonoffswitch').is(':checked')) {
        arrowLogicStarshi()
    } else {
        arrowLogicStarshiBezBonus()
    }
}

function calculateStarshiBezBonus() {
    let dejSt = document.getElementsByName("dejSt")[0].value;
    let izvanredni = document.getElementsByName("izvanredni")[0].value;
    let otpusk = document.getElementsByName("otpusk")[0].value;
    let praznichni = document.getElementsByName("praznichni")[0].value;
    let proslujeno = document.getElementsByName("proslujeno")[0].value;
    let nagradi = document.getElementsByName("nagradi")[0].value;
    let globi = document.getElementsByName("globi")[0].value;
    let starshiSum = (Number(dejSt) * 12) * 7;
    let izvanredniSum = (Number(izvanredni) * 12) * 6.50;
    let otpuskSum = (Number(otpusk)* 8) * 7;
    let praznichniSum = Number(praznichni) * 2.55;
    let proslujenoSum = Number(proslujeno) * 5;
    let result = (starshiSum + izvanredniSum + otpuskSum + praznichniSum + proslujenoSum + Number(nagradi)) - Number(globi);
    document.getElementsByName("sums")[0].value = `${result.toFixed(2)} лв.`;
}

function calculateStarshi() {
    let dejSt = document.getElementsByName("dejSt")[0].value;
    let izvanredni = document.getElementsByName("izvanredni")[0].value;
    let otpusk = document.getElementsByName("otpusk")[0].value;
    let praznichni = document.getElementsByName("praznichni")[0].value;
    let proslujeno = document.getElementsByName("proslujeno")[0].value;
    let nagradi = document.getElementsByName("nagradi")[0].value;
    let globi = document.getElementsByName("globi")[0].value;
    let starshiSum = (Number(dejSt) * 12) * 7.50;
    let izvanredniSum = (Number(izvanredni) * 12) * 6.50;
    let otpuskSum = (Number(otpusk)* 8) * 7;
    let praznichniSum = Number(praznichni) * 2.55;
    let proslujenoSum = Number(proslujeno) * 5;
    let result = (starshiSum + izvanredniSum + otpuskSum + praznichniSum + proslujenoSum + Number(nagradi)) - Number(globi);
    document.getElementsByName("sums")[0].value = `${result.toFixed(2)} лв.`;
}


function arrowLogicStarshi() {
    $('#tab-nav-4').click()

    if ($('#sums').val() !== '') {
        let dejSt = document.getElementsByName("dejSt")[0].value;
        let izvanredni = document.getElementsByName("izvanredni")[0].value;
        let otpusk = document.getElementsByName("otpusk")[0].value;
        let praznichni = document.getElementsByName("praznichni")[0].value;
        let proslujeno = document.getElementsByName("proslujeno")[0].value;
        let nagradi = document.getElementsByName("nagradi")[0].value;
        let globi = document.getElementsByName("globi")[0].value;
        let starshiSum = (Number(dejSt) * 12) * 7.50;
        let izvanredniSum = (Number(izvanredni) * 12) * 6.50;
        let otpuskSum = (Number(otpusk) * 8) * 7;
        let praznichniSum = Number(praznichni) * 2.55;
        let proslujenoSum = Number(proslujeno) * 5;
        let result = (starshiSum + izvanredniSum + otpuskSum + praznichniSum + proslujenoSum + Number(nagradi)) - Number(globi);
        document.getElementsByName("obshtaZarabotka")[0].value = result.toFixed(2);
    } else {
        $('#obshtaZarabotka').val('')
    }
}

function arrowLogicStarshiBezBonus() {
    $('#tab-nav-4').click()

    if ($('#sums').val() !== '') {
        let dejSt = document.getElementsByName("dejSt")[0].value;
        let izvanredni = document.getElementsByName("izvanredni")[0].value;
        let otpusk = document.getElementsByName("otpusk")[0].value;
        let praznichni = document.getElementsByName("praznichni")[0].value;
        let proslujeno = document.getElementsByName("proslujeno")[0].value;
        let nagradi = document.getElementsByName("nagradi")[0].value;
        let globi = document.getElementsByName("globi")[0].value;
        let starshiSum = (Number(dejSt) * 12) * 7;
        let izvanredniSum = (Number(izvanredni) * 12) * 6.50;
        let otpuskSum = (Number(otpusk) * 8) * 7;
        let praznichniSum = Number(praznichni) * 2.55;
        let proslujenoSum = Number(proslujeno) * 5;
        let result = (starshiSum + izvanredniSum + otpuskSum + praznichniSum + proslujenoSum + Number(nagradi)) - Number(globi);
        document.getElementsByName("obshtaZarabotka")[0].value = result.toFixed(2);
    } else {
        $('#obshtaZarabotka').val('')
    }
}

// Logic for tab "Atestacia"


function calculateAtestacia() {
    let dejursvaA = document.getElementsByName("dejurstvaA")[0].value;
    let otpuskA = document.getElementsByName("otpuskA")[0].value;
    let praznichniA = document.getElementsByName("praznichniA")[0].value;
    let proslujenoA = document.getElementsByName("proslujenoA")[0].value;
    let nagradiA = document.getElementsByName("nagradiA")[0].value;
    let globiA = document.getElementsByName("globiA")[0].value;
    let dejurstvaASum = (Number(dejursvaA) * 12) * 6.50;
    let otpuskSum = (Number(otpuskA)* 8) * 6;
    let praznichniSum = Number(praznichniA) * 2.55;
    let proslujenoSum = Number(proslujenoA) * 5;
    let result = (dejurstvaASum + otpuskSum + praznichniSum + proslujenoSum + Number(nagradiA)) - Number(globiA);
    document.getElementsByName("sumA")[0].value = `${result.toFixed(2)} лв.`;
}

function arrowLogicAtestacia() {
    $('#tab-nav-4').click()

    if ($('#sumA').val() !== '') {
        let dejursvaA = document.getElementsByName("dejurstvaA")[0].value;
        let otpuskA = document.getElementsByName("otpuskA")[0].value;
        let praznichniA = document.getElementsByName("praznichniA")[0].value;
        let proslujenoA = document.getElementsByName("proslujenoA")[0].value;
        let nagradiA = document.getElementsByName("nagradiA")[0].value;
        let globiA = document.getElementsByName("globiA")[0].value;
        let dejurstvaASum = (Number(dejursvaA) * 12) * 6.50;
        let otpuskSum = (Number(otpuskA)* 8) * 6;
        let praznichniSum = Number(praznichniA) * 2.55;
        let proslujenoSum = Number(proslujenoA) * 5;
        let result = (dejurstvaASum + otpuskSum + praznichniSum + proslujenoSum + Number(nagradiA)) - Number(globiA);
        document.getElementsByName("obshtaZarabotka")[0].value = result.toFixed(2);
    } else {
        $('#obshtaZarabotka').val('')
    }
}


// Logic fot tab 'Bez Atestacia'


function calculateBezAtestacia() {
    let dejursvaB = document.getElementsByName("dejurstvaB")[0].value;
    let otpuskB = document.getElementsByName("otpuskB")[0].value;
    let praznichniB = document.getElementsByName("praznichniB")[0].value;
    let proslujenoB = document.getElementsByName("proslujenoB")[0].value;
    let nagradiB = document.getElementsByName("nagradiB")[0].value;
    let globiB = document.getElementsByName("globiB")[0].value;
    let dejurstvaBSum = (Number(dejursvaB) * 12) * 6;
    let otpuskSum = (Number(otpuskB)* 8) * 6;
    let praznichniSum = Number(praznichniB) * 2.55;
    let proslujenoSum = Number(proslujenoB) * 5;
    let result = (dejurstvaBSum + otpuskSum + praznichniSum + proslujenoSum + Number(nagradiB)) - Number(globiB);
    document.getElementsByName("sumB")[0].value = `${result.toFixed(2)} лв.`;
}

function arrowLogicBezAtestacia() {
    $('#tab-nav-4').click()

    if ($('#sumB').val() !== '') {
        let dejursvaB = document.getElementsByName("dejurstvaB")[0].value;
        let otpuskB = document.getElementsByName("otpuskB")[0].value;
        let praznichniB = document.getElementsByName("praznichniB")[0].value;
        let proslujenoB = document.getElementsByName("proslujenoB")[0].value;
        let nagradiB = document.getElementsByName("nagradiB")[0].value;
        let globiB = document.getElementsByName("globiB")[0].value;
        let dejurstvaBSum = (Number(dejursvaB) * 12) * 6;
        let otpuskSum = (Number(otpuskB)* 8) * 6;
        let praznichniSum = Number(praznichniB) * 2.55;
        let proslujenoSum = Number(proslujenoB) * 5;
        let result = (dejurstvaBSum + otpuskSum + praznichniSum + proslujenoSum + Number(nagradiB)) - Number(globiB);
        document.getElementsByName("obshtaZarabotka")[0].value = result.toFixed(2);
    } else {
        $('#obshtaZarabotka').val('')
    }
}

// Logic fot tab 'Chisto'

function calculateChisto() {
    let obshtaZarabotka = document.getElementsByName("obshtaZarabotka")[0].value;
    let prevod = document.getElementsByName("prevod")[0].value;
    let udrajki = document.getElementsByName("udrajki")[0].value;
    let drugiUdrajki = document.getElementsByName("drugiUdrajki")[0].value;
    if (Number(obshtaZarabotka) < 60){
        swal('Грешка',"Грешно въведена стойност в полето обща заработка, не може да е по-малка от ваучерите за получаване (60 лв.)" +
            "\nМоля опитайте отново !", 'error');
        document.getElementsByName("SumChisto")[0].value = this.form.reset();
    }
    let result = Number(obshtaZarabotka) - 60 - Number(prevod) - Number(udrajki) - Number(drugiUdrajki);
    document.getElementsByName("SumChisto")[0].value = `${result.toFixed(2)} лв. и 60 лв. ваучери`;
}