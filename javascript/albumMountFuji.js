// 公用函数，显示对话框
function showDialog(dialogId) {
    document.getElementById(dialogId).style.display = 'block';
}

// 公用函数，关闭对话框
function closeDialog(dialogId) {
    document.getElementById(dialogId).style.display = 'none';
}

// 事件委托，用于处理所有对话框的点击事件
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('dialog')) {
        event.target.style.display = 'none';
    }
});

// 添加事件监听器，分别为每个图片和对话框添加相应的ID
document.getElementById('fujip1').addEventListener('click', function () {
    showDialog('dialog');
});

document.getElementById('closeDialog').addEventListener('click', function () {
    closeDialog('dialog');
});


document.getElementById('fujip2').addEventListener('click', function () {
    showDialog('dialog2');
});

document.getElementById('closeDialog2').addEventListener('click', function () {
    closeDialog('dialog2');
});


document.getElementById('fujisnow').addEventListener('click', function () {
    showDialog('dialog3');
});

document.getElementById('closeDialog3').addEventListener('click', function () {
    closeDialog('dialog3');
});


document.getElementById('fujisunrise').addEventListener('click', function () {
    showDialog('dialog4');
});

document.getElementById('closeDialog4').addEventListener('click', function () {
    closeDialog('dialog4');
});

// 同样的方式处理 'fujisnow' 和 'fujisunrise' 对应的对话框
