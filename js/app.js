function defaultCost() {
  document.getElementById("memory-cost").innerText = "000";
  document.getElementById("storage-cost").innerText = "000";
  document.getElementById("delivery-cost").innerText = "000";
  document.getElementById("total-cost").innerText = "1299";
}
/********* memory ********/
const mamoryStorage = document.getElementById("memory-slot-2");
mamoryStorage.addEventListener("click", function (event) {
  const memoryCost = document.getElementById("memory-cost");
  memoryCost.innerText = "100";
  console.log(typeof memoryCost.innerText);
  const TotalCost = document.getElementById("total-cost");
  console.log(typeof TotalCost.innerText);
  TotalCost.innerText =
    parseFloat(memoryCost.innerText) + parseFloat(TotalCost.innerText);
});

/********* storage ********/
const btnStorage2 = document.getElementById("storage-slot-2");
btnStorage2.addEventListener("click", function (event) {
  //console.log("i miss u");
  const storageCost = document.getElementById("storage-cost");
  storageCost.innerText = "100";
  const TotalCost = document.getElementById("total-cost");
  TotalCost.innerText =
    parseFloat(storageCost.innerText) + parseFloat(TotalCost.innerText);
});

const btnStorage3 = document.getElementById("storage-slot-3");
btnStorage3.addEventListener("click", function (event) {
  const storageCost = document.getElementById("storage-cost");
  storageCost.innerText = "180";
  // console.log(typeof storageCost.innerText);
  const TotalCost = document.getElementById("total-cost");
  // console.log(typeof TotalCost.innerText);
  TotalCost.innerText =
    parseFloat(storageCost.innerText) + parseFloat(TotalCost.innerText);
  // console.log(TotalCost.innerText);
});

/********* delivery ********/
const btndelivery2 = document.getElementById("delivery-cost-2");
btndelivery2.addEventListener("click", function (event) {
  const deliveryCost = (document.getElementById("delivery-cost").innerText =
    "20");
  const TotalCost = document.getElementById("total-cost");
  TotalCost.innerText =
    parseFloat(deliveryCost) + parseFloat(TotalCost.innerText);
});

/*********addeven listener for cupon code********/
const btn = document.getElementById("btn-Cupon");
btn.addEventListener("click", function (event) {
  //console.log(document.getElementById("cupon-code").value);
  const cuponCode = document.getElementById("cupon-code").value;
  if (cuponCode == "hakim") {
    // button disable
    document.getElementById("btn-Cupon").disabled = true;
    // clear input value
    document.getElementById("cupon-code").value = "";
    //total amout after cupon
    const TotalPrice = document.getElementById("total-cost");
    console.log(TotalPrice.value);
    const cuponPrice = parseFloat(TotalPrice.innerText) * 0.2;
    const totalAmount = parseFloat(TotalPrice.innerText) - cuponPrice;
    document.getElementById("total-price").innerText = totalAmount;
  } else {
    // document.getElementById("cupon-code").value = "plz enter valid cuppon";
    alert("please enter valid cupon");
  }
});
