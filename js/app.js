let memoryCost = 0;
let storageCost = 0;
let deliveryCost = 0;
let totalCost = 1299;
let cuponDiscount = 0;

function defaulMemoryCost() {
    memoryCost = 0;
    updateCosts();
}

function defaultStorageCost() {
    storageCost = 0;
    updateCosts();
}

function defaulDeliveryCost() {
    deliveryCost = 0;
    updateCosts();
}

function updateCosts() {
    totalCost = 1299 + memoryCost + storageCost + deliveryCost;
    document.getElementById('memory-cost').textContent = memoryCost;
    document.getElementById('storage-cost').textContent = storageCost;
    document.getElementById('delivery-cost').textContent = deliveryCost;
    document.getElementById('total-cost').textContent = totalCost;
    document.getElementById('total-price').textContent = totalCost - cuponDiscount;
}

document.getElementById('memory-slot-2').addEventListener('click', () => {
    memoryCost = 100;
    updateCosts();
});

document.getElementById('memory-slot-3').addEventListener('click', () => {
    memoryCost = 200;
    updateCosts();
});

document.getElementById('storage-slot-2').addEventListener('click', () => {
    storageCost = 200;
    updateCosts();
});

document.getElementById('storage-slot-3').addEventListener('click', () => {
    storageCost = 400;
    updateCosts();
});

document.getElementById('storage-slot-4').addEventListener('click', () => {
    storageCost = 600;
    updateCosts();
});

document.getElementById('delivery-cost-2').addEventListener('click', () => {
    deliveryCost = 20;
    updateCosts();
});

document.getElementById('btn-Cupon').addEventListener('click', () => {
    const cuponCode = document.getElementById('cupon-code').value;
    if (cuponCode === 'MACBOOK10') {
        cuponDiscount = 129;
        updateCosts();
    } else {
        alert('Invalid cupon code');
    }
});