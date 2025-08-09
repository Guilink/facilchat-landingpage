// Arquivo: landing.js (VERSÃO ATUALIZADA)

document.addEventListener('DOMContentLoaded', () => {
    // === CONFIGURAÇÕES (As mesmas do seu app.js) ===
    const firebaseConfig = {
        apiKey: "AIzaSyD6KF1OxewXN1gI81Lsm9i82bkps1UxwJ8",
        authDomain: "facilchat-auth.firebaseapp.com",
        projectId: "facilchat-auth",
        storageBucket: "facilchat-auth.appspot.com",
        messagingSenderId: "473078468134",
        appId: "1:473078468134:web:b74df1f1461093bab920e7"
    };

    const APP_URL = 'https://app.facilchat.com.br'; // URL do seu painel

    // === INICIALIZAÇÃO ===
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    // Função que executa o login
    const performLogin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                // SUCESSO! Redireciona para o painel.
                window.location.href = APP_URL;
            })
            .catch((error) => {
                // ERRO ou CANCELAMENTO. Apenas loga o erro, sem ação para o usuário.
                console.error('Erro no login via popup:', error.message);
            });
    };

    // Seleciona TODOS os botões de ação que devem levar ao login
    const loginTriggers = document.querySelectorAll(
        '#login-btn, .cta-primary, .pricing-cta, .final-cta-btn'
    );

    // Adiciona o evento de clique a cada um desses botões
    loginTriggers.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Impede a ação padrão do link/botão
            performLogin(); // Chama a função de login
        });
    });

    // Opcional, mas recomendado: Mudar o botão "Entrar" para "Acessar Painel" se o usuário já estiver logado
    //auth.onAuthStateChanged((user) => {
    //   const headerLoginButton = document.getElementById('login-btn');
    //    if (user && headerLoginButton) {
    //        headerLoginButton.textContent = 'Acessar Painel';
    //        // Atualiza o listener para apenas redirecionar, sem abrir o popup
    //        headerLoginButton.onclick = (e) => {
    //            e.preventDefault();
    //           window.location.href = APP_URL;
    //        };
    //    }
    //});
});