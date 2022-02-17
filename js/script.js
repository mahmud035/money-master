//-----------Handle Calculate button event-------------
document
  .getElementById('calculate-button')
  .addEventListener('click', function () {
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
      return alert('Please input valid amount of money in number format');
    }
    // -----Error Handle: negative input-----
    if (
      incomeInputValue < 0 ||
      foodInputValue < 0 ||
      rentInputValue < 0 ||
      clotheInputValue < 0
    ) {
      return alert('You must give a positive number.');
    }

    const totalExpense = foodInputValue + rentInputValue + clotheInputValue;
    const total = document.getElementById('total-expenses');

    const balance = document.getElementById('balance');
    const balanceAmount = incomeInputValue - totalExpense;
    // -----Error Handle: total expenses is higher than income-----
    if (totalExpense > incomeInputValue) {
      return alert(`Your expenses cannot exceed your income`);
    } else {
      total.innerText = totalExpense;
      balance.innerText = balanceAmount;
    }
  });

//--------------Handle Save button event----------------
document.getElementById('save-button').addEventListener('click', function () {
  // -----remaining balance-----
  const incomeInput = document.getElementById('income-value');
  const incomeInputValue = parseFloat(incomeInput.value);
  const foodInput = document.getElementById('food-value');
  const foodInputValue = parseFloat(foodInput.value);
  const rentInput = document.getElementById('rent-value');
  const rentInputValue = parseFloat(rentInput.value);
  const clotheInput = document.getElementById('clothe-value');
  const clotheInputValue = parseFloat(clotheInput.value);

  const totalExpense = foodInputValue + rentInputValue + clotheInputValue;
  const total = document.getElementById('total-expenses');
  total.innerText = totalExpense;

  const balance = document.getElementById('balance');
  const balanceAmount = incomeInputValue - totalExpense;
  balance.innerText = balanceAmount;

  // -----saving amount-----
  const saveInput = document.getElementById('saving-percent');
  const saveInputValue = parseFloat(saveInput.value);

  const savingAmount = incomeInputValue * (saveInputValue / 100);
  const amount = document.getElementById('saving-amount');
  // -----Error Handle: saving amount greater than balance-----
  if (savingAmount > balanceAmount) {
    return alert(`You can't save more than your balance`);
  } else {
    amount.innerText = savingAmount;
  }
  // -----remaining balance-----
  const remainingBalance = balanceAmount - savingAmount;
  document.getElementById('remaining-balance').innerText = remainingBalance;
});
