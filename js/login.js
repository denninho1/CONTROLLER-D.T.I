// Seleciona o input de senha e o botão/span
const senhaInput = document.getElementById("pass");
const mostrarBtn = document.getElementById("hide_pass");

// Adiciona o evento de clique
mostrarBtn.addEventListener("click", () => {
    if (senhaInput.type === "password") {
        // Mostra a senha
        senhaInput.type = "text";
        mostrarBtn.textContent = "ESCONDER"; // muda o texto
    } else {
        // Volta a esconder
        senhaInput.type = "password";
        mostrarBtn.textContent = "MOSTRAR"; // volta o texto
    }
});


// usuario e senha temporarios
const userTemp = 'laser'
const passTemp = '123456'

// Variavel do formulario
const formLogin = document.querySelector('#system_login');

// Evento de submit para realizer o login
formLogin.addEventListener('submit', function (e) {
    e.preventDefault();
    login();
})
 
//Function para validar o login
function login() {
    // valor dos input login e senha
    const userValue = document.querySelector('#user').value;
    const passValue = document.querySelector('#pass').value;

    if (userValue != userTemp && passValue != passTemp) {
        const msgError = document.getElementById('msg_error');
        msgError.innerText = 'Usuário não cadastrado';
        msgError.classList.remove('notify');
        void msgError.offsetWidth;
        msgError.classList.add('notify');
        return
    } 
    window.location.href = 'main.html';
}

