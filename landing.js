// Arquivo: landing.js (VERSÃO FINAL E SIMPLIFICADA)

document.addEventListener('DOMContentLoaded', () => {
    // URL da sua aplicação principal
    const APP_LOGIN_URL = 'https://app.facilchat.com.br';

    // Seleciona TODOS os botões que devem levar para o login/app
    const loginTriggers = document.querySelectorAll(
        '#login-btn, .cta-primary, .pricing-cta, .final-cta-btn'
    );

    // Adiciona o evento de clique a cada um desses botões
    loginTriggers.forEach(button => {
        // Remove qualquer listener de popup que possa existir
        button.onclick = null; 

        button.addEventListener('click', (e) => {
            e.preventDefault(); // Impede a ação padrão
            
            // Simplesmente redireciona o usuário para o app para fazer o login lá
            window.location.href = APP_LOGIN_URL;
        });
    });

    // Nós não precisamos mais da lógica do Firebase nesta página,
    // pois o login será centralizado no app principal.
    // Isso torna sua landing page ainda mais leve e rápida!
});