let isLeavePopupEnabled = JSON.parse(localStorage.getItem('leavePopupEnabled'));

if (isLeavePopupEnabled === null) {
    isLeavePopupEnabled = false;
}

window.addEventListener('beforeunload', function (e) {
    if (isLeavePopupEnabled) {
        e.preventDefault();
        e.returnValue = '';
    }
});

const toggleButton = document.getElementById('anti-closing');
toggleButton.addEventListener('click', function () {
    isLeavePopupEnabled = !isLeavePopupEnabled;
    localStorage.setItem('leavePopupEnabled', JSON.stringify(isLeavePopupEnabled));

    if (isLeavePopupEnabled) {
        alert('Anti-Closing Enabled.');
        toggleButton.textContent = 'Disable/Enable A.C';
    } else {
        alert('Anti-Closing Disabled.');
        toggleButton.textContent = 'Disable/Enable A.C';
    }
});