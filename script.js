function calculatePriceWithTax() {
    const totalBill = parseFloat(document.getElementById('totalBill').value);
    const totalTax = parseFloat(document.getElementById('totalTax').value);
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    if (isNaN(totalBill) || isNaN(totalTax) || isNaN(itemPrice)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return false;
    }

    const taxRate = totalTax / (totalBill - totalTax);
    const itemPriceWithTax = itemPrice * (1 + taxRate);

    document.getElementById('result').innerText = `The item price with tax included is: $${itemPriceWithTax.toFixed(2)}`;

    return false; // Prevent form submission
}
