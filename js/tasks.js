// Variaveis para abrir e fechar o forms
const btnOpenCreateTask = document.querySelector('.btn_newtask');
const formCreateTask = document.querySelector('.create_task');
const btnClosedCreateTask = document.querySelector('.closed_form_task');

// Function para abrir ou fechar o formulario
function toggleFormCreateTask () {
    formCreateTask.classList.toggle('open');
    formCreateTask.classList.toggle('closed');
}

btnOpenCreateTask.addEventListener('click', () => {
    toggleFormCreateTask();
});

btnClosedCreateTask.addEventListener('click', () => {
    toggleFormCreateTask();
});



