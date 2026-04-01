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



/* Eventos para o botão de filtrar */
const filterContainer = document.querySelector('.filter_container');
const filterBtn = document.querySelector('.filter_btn');
const arrowIcon = filterBtn.querySelector('i');

filterBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    filterContainer.classList.toggle('active');

    arrowIcon.classList.toggle('fa-caret-down');
    arrowIcon.classList.toggle('fa-caret-up');
});

document.addEventListener('click', () => {
    filterContainer.classList.remove('active')

    arrowIcon.classList.remove('fa-caret-up');
    arrowIcon.classList.add('fa-caret-down');

})

filterContainer.addEventListener('click', (e) => {
    e.stopPropagation();
})
