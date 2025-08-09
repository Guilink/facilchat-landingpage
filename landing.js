document.addEventListener('DOMContentLoaded', () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD6KF1OxewXN1gI81Lsm9i82bkps1UxwJ8",
        authDomain: "facilchat-auth.firebaseapp.com",
        projectId: "facilchat-auth",
        storageBucket: "facilchat-auth.appspot.com",
        messagingSenderId: "473078468134",
        appId: "1:473078468134:web:b74df1f1461093bab920e7"
    };

    const APP_URL = 'https://app.facilchat.com.br';

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    const loginButton = document.getElementById('login-btn');

    if (loginButton) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            auth.signInWithPopup(provider)
                .then((result) => {
                    window.location.href = APP_URL;
                })
                .catch((error) => {
                    console.error('Erro no login via popup:', error.message);
                });
        });
    }

    auth.onAuthStateChanged((user) => {
        if (user && loginButton) {
            loginButton.textContent = 'Acessar Painel';
            // Remove o listener de clique para login e apenas age como um link normal
            loginButton.onclick = (e) => {
                e.preventDefault();
                window.location.href = APP_URL;
            };
        }
    });
});