document.getElementById('submit-btn').addEventListener('click', function () {
    const emailFiled = document.getElementById('email-usear');
    const email = emailFiled.value;
    const passwordFiled = document.getElementById('password-usear');
    const password = passwordFiled.value;
    if (email === 'robin@gmail.com' && password === 'webdevelopment') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please enter valid email and password')
    }
})

