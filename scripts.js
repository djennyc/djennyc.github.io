document.getElementById('tipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fixed total amount
    const totalAmount = 100.00;

    // Get the selected tip percentage
    const selectedTip = document.querySelector('input[name="tipPercentage"]:checked');

    // Check if a tip percentage is selected
    if (!selectedTip) {
        alert("Please select a tip percentage.");
        return;
    }

    const tipPercentage = parseFloat(selectedTip.value);

    // Calculate the tip amount
    const tipAmount = (totalAmount).toFixed(2);

    // Display the result
   document.getElementById('tipAmount').textContent = `$${tipAmount}`;
   document.getElementById('result').classList.remove('hidden');
});
