(function () {
    let isPasswordProtectionEnabled = JSON.parse(localStorage.getItem('passwordProtectionEnabled'));
    let savedPassword = localStorage.getItem('password');

    if (isPasswordProtectionEnabled === null) {
        isPasswordProtectionEnabled = false;
    }

    if (isPasswordProtectionEnabled) {
        const currentPath = window.location.pathname;
        const loggedIn = sessionStorage.getItem('loggedIn');

        if (!savedPassword) {
            sessionStorage.setItem('redirectAfterLogin', currentPath);
            window.location.href = '/login.html#register';
        } else if (!loggedIn) {
            sessionStorage.setItem('redirectAfterLogin', currentPath);
            window.location.href = '/login.html';
        }
    }

    if (window.location.pathname === '/login.html') {
        const hash = window.location.hash;

        if (hash === '#register') {
            document.body.innerHTML = `
                <h1>Register</h1>
                <input type="password" id="password" placeholder="Set Password">
                <button id="register-btn">Register</button>
            `;

            document.getElementById('register-btn').addEventListener('click', function () {
                const password = document.getElementById('password').value;

                if (password) {
                    localStorage.setItem('password', btoa(password)); 
                    alert('Password set successfully. Redirecting to login...');
                    window.location.href = '/login.html';
                } else {
                    alert('Please enter a password.');
                }
            });
        } else {
            document.body.innerHTML = `
                <h1>Login</h1>
                <input type="password" id="password" placeholder="Enter Password">
                <button id="login-btn">Login</button>
            `;

            document.getElementById('login-btn').addEventListener('click', function () {
                const password = document.getElementById('password').value;

                if (btoa(password) === savedPassword) {
                    sessionStorage.setItem('loggedIn', true);
                    alert('Login successful. Redirecting.');
                    const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
                    window.location.href = redirectPath;
                } else {
                    alert('Incorrect password. Please try again.');
                }
            });
        }
    }

    const passwordProtectionButton = document.getElementById('password-protection');
    if (passwordProtectionButton) {
        passwordProtectionButton.addEventListener('click', function () {
            isPasswordProtectionEnabled = !isPasswordProtectionEnabled;
            localStorage.setItem('passwordProtectionEnabled', JSON.stringify(isPasswordProtectionEnabled));

            if (isPasswordProtectionEnabled) {
                alert('Password Protection Enabled.');
                window.location.href = savedPassword ? '/login.html' : '/login.html#register';
            } else {
                alert('Password Protection Disabled.');
                sessionStorage.removeItem('loggedIn');
            }
        });
    }
})();