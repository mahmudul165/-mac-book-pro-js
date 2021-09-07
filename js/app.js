function defaulMemoryCost() {
  document.getElementById("memory-cost").innerText = "000";
  document.getElementById("total-cost").innerText =
    parseFloat(document.getElementById("total-cost").innerText) - 100;

  // last
  document.getElementById("total-price").innerText =
    document.getElementById("total-cost").innerText;
  document.getElementById("memory-cost").disabled = true;
}

function defaultStorageCost() {
  document.getElementById("storage-cost").innerText = "000";
  document.getElementById("total-cost").innerText = "1299";
  const memoryCost = document.getElementById("memory-cost").innerText;
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  document.getElementById("total-cost").innerText =
    1299 + parseFloat(memoryCost) + parseFloat(deliveryCost);
  // last
  document.getElementById("total-price").innerText =
    document.getElementById("total-cost").innerText;
  document.getElementById("storage-cost").disabled = true;
}
function defaulDeliveryCost() {
  document.getElementById("delivery-cost").innerText = "000";
  const storageCost = document.getElementById("storage-cost").innerText;
  const memoryCost = document.getElementById("memory-cost").innerText;
  document.getElementById("total-cost").innerText =
    1299 + parseFloat(storageCost) + parseFloat(memoryCost);
  // last
  document.getElementById("total-price").innerText =
    document.getElementById("total-cost").innerText;
  document.getElementById("delivery-cost").disabled = true;
}
/********* memory ********/
const mamoryStorage = document.getElementById("memory-slot-2");
mamoryStorage.addEventListener("click", function (event) {
  const memoryCost = document.getElementById("memory-cost");
  memoryCost.innerText = "100";
  const storageCost = document.getElementById("storage-cost").innerText;
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  document.getElementById("total-cost").innerText =
    1299 + 100 + parseFloat(storageCost) + parseFloat(deliveryCost);
  // last
  document.getElementById("total-price").innerText =
    document.getElementById("total-cost").innerText;
  document.getElementById("memory-slot-2").disabled = true;
});

/********* storage ********/

const btnStorage2 = document.getElementById("storage-slot-2");
btnStorage2.addEventListener("click", function (event) {
  const storageCost = document.getElementById("storage-cost");
  storageCost.innerText = "100";
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  const memoryCost = document.getElementById("memory-cost").innerText;
  document.getElementById("total-cost").innerText =
    100 + 1299 + parseFloat(memoryCost) + parseFloat(deliveryCost);
  //last
  document.getElementById("total-price").innerText =
    document.getElementById("total-cost").innerText;
  document.getElementById("storage-slot-2").disabled = true;
});

const btnStorage3 = document.getElementById("storage-slot-3");
btnStorage3.addEventListener("click", function (event) {
  const storageCost = document.getElementById("storage-cost");
  storageCost.innerText = "180";
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  const memoryCost = document.getElementById("memory-cost").innerText;
  document.getElementById("total-cost").innerText =
    180 + 1299 + parseFloat(memoryCost) + parseFloat(deliveryCost);

  document.getElementById("total-price").innerText =
    document.getElementById("total-cost").innerText;
  document.getElementById("storage-slot-3").disabled = true;
});

/********* delivery ********/

const btndelivery2 = document.getElementById("delivery-cost-2");
btndelivery2.addEventListener("click", function (event) {
  const deliveryCost = (document.getElementById("delivery-cost").innerText =
    "20");
  const storageCost = document.getElementById("storage-cost").innerText;
  const memoryCost = document.getElementById("memory-cost").innerText;
  document.getElementById("total-cost").innerText =
    1299 + 20 + parseFloat(storageCost) + parseFloat(memoryCost);
  //last
  document.getElementById("total-price").innerText =
    document.getElementById("total-cost").innerText;
  document.getElementById("delivery-cost-2").disabled = true;
});
/*********addeven listener for cupon code********/
const btn = document.getElementById("btn-Cupon");
btn.addEventListener("click", function (event) {
  //console.log(document.getElementById("cupon-code").value);
  const cuponCode = document.getElementById("cupon-code").value;
  if (cuponCode == "stevekaku") {
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
