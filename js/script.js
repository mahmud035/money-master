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

    // Error Handle
    if (
      isNaN(incomeInputValue) ||
      isNaN(foodInputValue) ||
      isNaN(rentInputValue) ||
      isNaN(clotheInputValue)
    ) {
      return alert('Please input valid amount of money in number format');
    }

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
    // Error Handle
    if (totalExpense > incomeInputValue) {
      return alert(`Your expenses cannot exceed your income`);
    } else {
      total.innerText = totalExpense;
      balance.innerText = incomeInputValue - totalExpense;
    }
  });
