function calculatePriceWithTax() {
    const totalBill = parseFloat(document.getElementById('totalBill').value);
    const totalTax = parseFloat(document.getElementById('totalTax').value);
    const itemPriceInput = document.getElementById('itemPrice').value;

    if (isNaN(totalBill) || isNaN(totalTax)) {
        document.getElementById('result').innerText = 'Please enter valid numbers for total bill and total tax.';
        return false;
    }

    // Evaluate the item price input as an expression
    let itemPrice;
    try {
        itemPrice = eval(itemPriceInput);
    } catch (e) {
        document.getElementById('result').innerText = 'Please enter a valid item price expression.';
        return false;
    }

    if (isNaN(itemPrice)) {
        document.getElementById('result').innerText = 'Please enter a valid item price.';
        return false;
    }

    const taxRate = totalTax / (totalBill - totalTax);
    const itemPriceWithTax = itemPrice * (1 + taxRate);

    document.getElementById('result').innerText = `The item price with tax included is: $${itemPriceWithTax.toFixed(2)}`;

    return false; // Prevent form submission
}
