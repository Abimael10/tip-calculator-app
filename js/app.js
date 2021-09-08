// GENERAL SELECTORS
const budget = document.querySelector('.bill-input');
const amountOfPeople = document.querySelector('.amount-people');
const resetBtn = document.querySelector('.reset-btn');

//TIP VALUES
const tipBtns = document.querySelectorAll('.percent-total');

//OUTPUT SELECTORS

const tipAmount = document.querySelector('.tip-amount > .amount');
const total = document.querySelector('.total > .amount');

//LISTENING TO THE INPUTS PROPERLY
billValue = 0.0; // default
crowd = 1; //default

budget.addEventListener('input', setUpBudget);
amountOfPeople.addEventListener('input', setUpCrowd);

function setUpBudget() {
    billValue = Number(budget.value);
};

function setUpCrowd() {
    crowd = Number(amountOfPeople.value);
}

//TIPPINGS
let tipPercent;

tipBtns.forEach(btn => {
    btn.addEventListener('click', calcPercent);
});

function calcPercent(e) {

    tipBtns.forEach(btn => {
        if(e.target.innerHTML === btn.innerHTML) {
            tipPercent = parseFloat(btn.innerHTML)/100;
        }

        calcTip();
    });
};

function calcTip() {
    if(crowd >= 1) {
        let tip = billValue * tipPercent / crowd;
        let wholeThing = billValue * (tipPercent + 1) / crowd;

        tipAmount.innerHTML = '$' + tip.toFixed(2);
        total.innerHTML = '$' + wholeThing.toFixed(2);
    }
}

//RESET VALUES
resetBtn.addEventListener('click', reset);

function reset() {
    budget.value = '0.0';
    setUpBudget();

    tipBtns[2].click();

    amountOfPeople.value = '1';
    setUpCrowd();
}