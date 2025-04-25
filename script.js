const PRICE_PER_TON = 25.50;

function calculateBuy() {
    const amount = document.getElementById('buy-amount').value;
    const total = (amount * PRICE_PER_TON).toFixed(2);
    document.getElementById('buy-total').textContent = `$${total}`;
}

function calculateSell() {
    const amount = document.getElementById('sell-amount').value;
    const total = (amount * PRICE_PER_TON).toFixed(2);
    document.getElementById('sell-total').textContent = `$${total}`;
}

function executeBuy() {
    const amount = document.getElementById('buy-amount').value;
    if (amount && amount > 0) {
        alert(`Successfully purchased ${amount} tons of carbon credits for $${(amount * PRICE_PER_TON).toFixed(2)}`);
        updateMarketStats(-amount);
    } else {
        alert('Please enter a valid amount');
    }
}

function executeSell() {
    const amount = document.getElementById('sell-amount').value;
    if (amount && amount > 0) {
        alert(`Successfully sold ${amount} tons of carbon credits for $${(amount * PRICE_PER_TON).toFixed(2)}`);
        updateMarketStats(amount);
    } else {
        alert('Please enter a valid amount');
    }
}

function updateMarketStats(amountChange) {
    const volumeElement = document.getElementById('volume');
    const availableElement = document.getElementById('available');
    
    let currentVolume = parseInt(volumeElement.textContent);
    let currentAvailable = parseInt(availableElement.textContent);
    
    volumeElement.textContent = currentVolume + Math.abs(amountChange);
    availableElement.textContent = currentAvailable - amountChange;
}