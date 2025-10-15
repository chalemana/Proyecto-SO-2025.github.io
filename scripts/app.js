const bufferSize = 5;
let buffer = [];
let producerCount = 0;
let consumerCount = 0;
let isProducing = true;
let isConsuming = true;

const bufferElement = document.getElementById('buffer');

function updateBufferDisplay() {
    bufferElement.innerHTML = buffer.map(item => `<div class="item">${item}</div>`).join('');
}

function produce() {
    if (isProducing && buffer.length < bufferSize) {
        const item = `Item ${++producerCount}`;
        buffer.push(item);
        updateBufferDisplay();
        setTimeout(produce, Math.random() * 1000);
    }
}

function consume() {
    if (isConsuming && buffer.length > 0) {
        buffer.shift();
        updateBufferDisplay();
        setTimeout(consume, Math.random() * 1000);
    }
}

function startSimulation() {
    isProducing = true;
    isConsuming = true;
    produce();
    consume();
}

function stopSimulation() {
    isProducing = false;
    isConsuming = false;
}

document.getElementById('start').addEventListener('click', startSimulation);
document.getElementById('stop').addEventListener('click', stopSimulation);