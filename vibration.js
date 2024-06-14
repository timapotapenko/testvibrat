function shakeButton(button) {
    button.classList.add('shake');
    button.addEventListener('animationend', () => {
        button.classList.remove('shake');
    });
}
