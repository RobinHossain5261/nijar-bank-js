document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const previousWithdrawAmount = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = previousWithdrawAmount.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);

    const currentWithdrawTotal = withdrawTotalAmount + withdrawAmount;
    previousWithdrawAmount.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = '';
})