const bill = document.getElementById('bill');
const tipButton = document.querySelectorAll('.btn_tip');
const tipInput = document.getElementById('tip');
const people = document.getElementById('people');
const errorMessage = document.querySelector('.error_message');
const results = document.querySelectorAll('.value');
const resetButton = document.querySelector('.btn_reset');

bill.addEventListener('input', setBillValue);
tipButton.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
tipInput.addEventListener('input', setTipInputValue);
people.addEventListener('input', setPeopleValue);
resetButton.addEventListener('click', reset);

let billValue = 0.0; //default value
let tipValue = 0.15; //default value -> 15% button is active
let peopleValue = 1;

function validateFloat(s) {
  var rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}

function validateInt(s) {
  var rgx = /^[0-9]*$/;
  return s.match(rgx);
}

function setBillValue() {
  if (bill.value.includes(',')) {
    bill.value = bill.value.replace(',', '.');
  }

  if (!validateFloat(bill.value)) {
    bill.value = bill.value.substring(0, bill.value.length - 1);
  }

  billValue = parseFloat(bill.value);

  calculateTip();
  //console.log(billValue);
}

function handleClick(event) {
  tipButton.forEach(btn => {
    //clear active state
    btn.classList.remove('btn-active');

    //set active state 
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add('btn-active');
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });

  //clear Input tip
  tipInput.value = '';

  calculateTip();

  //console.log(tipValue);
}

function setTipInputValue() {
  if (!validateInt(tipInput.value)) {
    tipInput.value = tipInput.value.substring(0, tipInput.value.length - 1);
  }

  tipValue = parseFloat(tipInput.value / 100);

  //remove active state from buttons
  tipButton.forEach(btn => {
    btn.classList.remove('btn-active');
  });

  if (tipInput.value !== '') {
    calculateTip();
  }

  //console.log(tipValue);
}

function setPeopleValue() {
  if (!validateInt(people.value)) {
    people.value = people.value.substring(0, people.value.length - 1);
  }

  peopleValue = parseFloat(people.value);

  if (peopleValue <= 0) {
    errorMessage.classList.add('show-error-msg');
    setTimeout(function () {
      errorMessage.classList.remove('show-error-msg');
    }, 3000);
  }

  calculateTip();
  //console.log(peopleValue);
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = billValue * tipValue / peopleValue;
    let total = billValue * (tipValue + 1) / peopleValue;
    results[0].innerHTML = '$' + tipAmount.toFixed(2);
    results[1].innerHTML = '$' + total.toFixed(2);
  }
}

function reset() {
  bill.value = '0.0';
  setBillValue();

  tipButton[2].click();

  people.value = '1';
  setPeopleValue();
}