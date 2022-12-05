
const billTotalInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeople = document.getElementById("numberOfPeople");
const perPersonTotal = document.getElementById("perPersonTotal");

const calculateBill = () => {

  let bill = Number(billTotalInput.value)
  let tip = Number(tipInput.value) / 100

  let totalTipAmount = bill * tip;

  let totalBill = totalTipAmount + bill
  let totalPerPerson = totalBill / numberOfPeople.innerText;

  perPersonTotal.innerText = "$" + totalPerPerson.toFixed(2);
}

const increasePeople = () => {
  numberOfPeople.innerText++

  calculateBill()
}

const decreasePeople = () => {
  if (numberOfPeople.innerText > 1) {
    numberOfPeople.innerText--
  }
  
  calculateBill()
}