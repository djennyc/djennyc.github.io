document.getElementById('tippingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    // Validate inputs
    if (isNaN(totalAmount) || isNaN(tipPercentage) || totalAmount <= 0 || tipPercentage < 0) {
        alert("Please enter valid numbers.");
        return;
    }

    // Calculate tip
    const tipAmount = (totalAmount * (tipPercentage / 100)).toFixed(2);

    // Display result
    document.getElementById('tipAmount').textContent = `$${tipAmount}`;
    document.getElementById('result').classList.remove('hidden');
});
