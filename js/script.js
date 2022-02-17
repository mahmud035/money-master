//-----------Handle Calculate button event-------------
document
  .getElementById('calculate-button')
  .addEventListener('click', function () {
    // totalExpense();
    balance();
  });

// -----Calculate total Expenses-----
function totalExpense() {
  const incomeInput = document.getElementById('income-value');
  const incomeInputValue = parseFloat(incomeInput.value);
  const foodInput = document.getElementById('food-value');
  const foodInputValue = parseFloat(foodInput.value);
  const rentInput = document.getElementById('rent-value');
  const rentInputValue = parseFloat(rentInput.value);
  const clotheInput = document.getElementById('clothe-value');
  const clotheInputValue = parseFloat(clotheInput.value);
  // -----Error Handle: input isn't number-----
  if (
    isNaN(incomeInputValue) ||
    isNaN(foodInputValue) ||
    isNaN(rentInputValue) ||
    isNaN(clotheInputValue)
  ) {
    return alert('Please input valid amount of money in Number format');
    // return false;
  }
  // -----Error Handle: negative input-----
  if (
    incomeInputValue < 0 ||
    foodInputValue < 0 ||
    rentInputValue < 0 ||
    clotheInputValue < 0
  ) {
    return alert('You must give a positive number.');
    // return false;
  }

  const totalExpense = foodInputValue + rentInputValue + clotheInputValue;
  const total = document.getElementById('total-expenses');

  // -----Error Handle: total expenses is higher than income-----
  if (totalExpense > incomeInputValue) {
    return alert(`Your expenses cannot exceed your income`);
    // return false;
  } else {
    total.innerText = totalExpense;
  }

  return totalExpense;
}

// -----Calculate Balance-----
function balance() {
  const incomeInput = document.getElementById('income-value');
  const incomeInputValue = parseFloat(incomeInput.value);

  const expenses = totalExpense();
  const balanceAmount = incomeInputValue - expenses;

  const balance = document.getElementById('balance');
  if (incomeInputValue > expenses && expenses >= 0) {
    balance.innerText = balanceAmount;
  }
  return balanceAmount;
}

//--------------Handle Save button event----------------
document.getElementById('save-button').addEventListener('click', function () {
  // saveAmount();
  remainingBalance();
});

// -----Calculate Saving Amount-----
function saveAmount() {
  const incomeInput = document.getElementById('income-value');
  const incomeInputValue = parseFloat(incomeInput.value);
  const saveInput = document.getElementById('saving-percent');
  const saveInputValue = parseFloat(saveInput.value);
  const balanceAmount = balance();

  const savingAmount = incomeInputValue * (saveInputValue / 100);
  const amount = document.getElementById('saving-amount');
  // -----Error Handle: saving amount greater than balance-----
  if (savingAmount > balanceAmount) {
    alert(`You can't save more than your balance`);
  } else {
    amount.innerText = savingAmount;
  }

  return savingAmount;
}

// -----Calculate Remaining Balance-----
function remainingBalance() {
  const leftOverMoney = document.getElementById('remaining-balance');
  const balanceAmount = balance();
  const savingAmount = saveAmount();

  const remainingBalance = balanceAmount - savingAmount;
  if (balanceAmount > savingAmount) {
    leftOverMoney.innerText = remainingBalance;
  }
}
