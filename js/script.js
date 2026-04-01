/* // Validando se há token
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

document.getElementById("user_logged").textContent = userData.usuario; */

/* ABRIR SIDE BAR */
const sidebar = document.querySelector('.header_sidebar');
const btnOpenSidebar = document.querySelector('.open_sidebar');
const btnCloseSidebar = document.querySelector('.close_sidebar');

btnOpenSidebar.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.add('active');
});

btnCloseSidebar.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.remove('active');
});

document.addEventListener('click', (e) => {
   if (sidebar.classList.contains('active') && !sidebar.contains(e.target)) {
        sidebar.classList.remove('active');
    } 
});



