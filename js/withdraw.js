document.getElementById("withdraw-btn").addEventListener("click", () => {
  const newWithdrawAmout = parseFloat(getInputFromInputField("withdraw-field"));

  const currentWithdrawAmount = parseFloat(
    getInputFromTagField("withdraw-amount")
  );

  const currentBalance = parseFloat(getInputFromTagField("balance"));

  if (newWithdrawAmout >= currentBalance) {
    alert("Unsufficient Balance");
    return;
  }
  const totalWithdraw = currentWithdrawAmount + newWithdrawAmout;
  setNewAmout("withdraw-amount", totalWithdraw);

  const totalBalance = currentBalance - newWithdrawAmout;

  setNewAmout("balance", totalBalance);
});
