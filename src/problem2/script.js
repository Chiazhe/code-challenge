document.querySelector("#form").addEventListener("submit", () => {
  let addr = document.getElementById("input-address").value;
  let amount = document.getElementById("input-amount").value;

  if (!addr) {
    document.getElementById("input-address-error").style.display = "block";
  } else {
    document.getElementById("input-address-error").style.display = "none";
  }
  
  if (!amount) {
    document.getElementById("input-amount-error").style.display = "block";
  } else {
    document.getElementById("input-amount-error").style.display = "none";
  }
});
