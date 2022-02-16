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

    // Error Handle: input isn't number
    if (
      isNaN(incomeInputValue) ||
      isNaN(foodInputValue) ||
      isNaN(rentInputValue) ||
      isNaN(clotheInputValue)
    ) {
      return alert('Please input valid amount of money in number format');
    }
    // Error Handle: negative input
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
    // Error Handle: total expenses is higher than income
    if (totalExpense > incomeInputValue) {
      return alert(`Your expenses cannot exceed your income`);
    } else {
      total.innerText = totalExpense;
      balance.innerText = incomeInputValue - totalExpense;
    }
  });

//Handle Save button event
document.getElementById('save-button').addEventListener('click', function () {
  const saveInput = document.getElementById('saving-percent');
  const saveInputValue = parseFloat(saveInput.value);
  const incomeInput = document.getElementById('income-value');
  const incomeInputValue = parseFloat(incomeInput.value);

  const savingAmount = incomeInputValue * (saveInputValue / 100);

  const amount = document.getElementById('saving-amount');
  amount.innerText = savingAmount;
});
