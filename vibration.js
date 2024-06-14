function vibrate() {
    // Проверяем, поддерживается ли вибрация
    if ("vibrate" in navigator) {
        // Вибрация на 200 миллисекунд
        navigator.vibrate(200);
    } else {
        alert("Вибрация не поддерживается вашим устройством.");
    }
}
