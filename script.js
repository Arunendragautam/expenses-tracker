var totalExpenses = 0;

function addExpense() {
    var expenseInput = document.getElementById("expenseInput");
    var amountInput = document.getElementById("amountInput");

    var description = expenseInput.value.trim();
    var amount = parseFloat(amountInput.value);

    if (description !== "" && !isNaN(amount) && amount > 0) {
        var expenseList = document.getElementById("expenseList");
        var listItem = document.createElement("li");
        listItem.textContent = `${description} - Rs.${amount.toFixed(2)}`;
        expenseList.appendChild(listItem);

        totalExpenses += amount;
        document.getElementById("totalExpenses").textContent = totalExpenses.toFixed(2);

        expenseInput.value = "";
        amountInput.value = "";
    } else {
        alert("Please enter a valid description and amount.");
    }
}
