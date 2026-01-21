// Validando se há token
const token = localStorage.getItem('token');

if (!token) {
    window.location.href = 'login.html'
}


//Guardar nome de usuario e exibir no header
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

const userData = parseJwt(token);

document.getElementById("user_logged").textContent = userData.usuario;

//Abrir navbar
const btnToggleNavbar = document.querySelector('.content_user');
const navbar = document.querySelector('.navbar');

btnToggleNavbar.addEventListener('click', () => {
    toggleNavbar()
});
//Abrir e fechar navbar
function toggleNavbar() {
    navbar.classList.toggle('active');
}

