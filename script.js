document.getElementById('generatePassword').addEventListener('click', function() {
    const total = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'];
    const length = 16;
    let password = '';
    for (let i = total.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [total[i], total[j]] = [total[j], total[i]];
    }
    password = total.slice(0, length).join('');
    document.getElementById('passwordDisplay').innerText = `Сгенерированный пароль: ${password}`;

    // Сохранение пароля в переменную для возможности копирования
    window.generatedPassword = password;
});

document.getElementById('copyPassword').addEventListener('click', function() {
    if (window.generatedPassword) {
        const textarea = document.createElement('textarea');
        textarea.value = window.generatedPassword;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Пароль скопирован в буфер обмена');
    } else {
        alert('Сначала сгенерируйте пароль');
    }
});
