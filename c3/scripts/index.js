// Store the wallet amount to your local storage with key "amount"

let array = JSON.parse(localStorage.getItem("amount")) || [];

let btn = document
  .getElementById("add_to_wallet")
  .addEventListener("click", () => {
    let amount = document.getElementById("amount").value;
    array.push (amount);

    let balance = 0;
    for (var i = 0; i < array.length; i++) {
      balance = balance + +array[i];
    }
    let wallet = document.getElementById("wallet");
    wallet.innerText = balance;

    localStorage.setItem("amount", balance);
  });
