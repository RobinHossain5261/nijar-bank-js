document.getElementById('submit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);

    const previousDepositElement = document.getElementById('deposite-total');
    const previousDepositTotalString = previousDepositElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositeTotal = previousDepositTotal + depositAmount;
    previousDepositElement.innerText = currentDepositeTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';

})