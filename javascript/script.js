// script.js
//alert('Hello, World!');

// About對話框
document.getElementById('About').addEventListener('click', function () {
    document.getElementById('dialog').style.display = 'block';
});

document.getElementById('closeDialog').addEventListener('click', function () {
    document.getElementById('dialog').style.display = 'none';
});

document.querySelector('.dialog').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});