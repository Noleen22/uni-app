const app = document.getElementById('app');

function showLogin() {
    app.innerHTML = `
    <div class="container">
        <h2>Uni Login</h2>
        <input type="text" id="username" placeholder="Benutzername">
        <input type="password" id="password" placeholder="Passwort">
        <button onclick="login()">Anmelden</button>
    </div>
    `;
}

function showDashboard(username) {
    app.innerHTML = `
    <div class="container">
        <h2>Willkommen, ${username}!</h2>
        <div class="course">
            <strong>Mathematik 1</strong><br>Prof. Dr. Müller
        </div>
        <div class="course">
            <strong>Informatik Grundlagen</strong><br>Prof. Dr. Schmidt
        </div>
        <div class="course">
            <strong>Physik</strong><br>Prof. Dr. Weber
        </div>
        <button onclick="logout()">Logout</button>
    </div>
    `;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password) {
        showDashboard(username);
    } else {
        alert("Bitte Benutzername und Passwort eingeben.");
    }
}

function logout() {
    showLogin();
}

showLogin();