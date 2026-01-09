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
    switchStatus();
});

btnClosedCreateTask.addEventListener('click', () => {
    toggleFormCreateTask();
    cleanTask();
});

// Variaveis para criar nova tarefa e <ul>
const btnCreateTask = document.getElementById('btn_createNewTask');
const listPendencias = document.getElementById('listPendencias');

//Evento de click no botão criar tarefa
btnCreateTask.addEventListener('click', function (e) {
    e.preventDefault()
    createNewTask();
    cleanTask();
})

// criar pendencia
function createNewTask () {
    // Captura dos valores
    let loja = document.getElementById('taskLoja').value;
    let pendencia = document.getElementById('taskPendencia').value;
    let email = document.getElementById('taskEmail').value;
    let data = document.getElementById('taskDate').value;
    let status = document.getElementById('taskStatus');
    let statusValue = status.value;
    let statusText = status.options[status.selectedIndex].text;

    if (!loja || !pendencia || !email || !statusValue) {
        alert('Preencha os campos obrigatórios!');
        return
    }

    // Formata data
    const dataFormatada = data
        ? new Date(data).toLocaleDateString('pt-BR')
        : 'Não informada'

    // Criação do item
    const li = document.createElement('li');
    li.classList.add('box_pend');

    li.innerHTML = `
        <div class="box_pend_info">
            <div class="info_loja">
                <h2 class="name_loja">${loja}</h2>
                <span class="more_info">Recife - PE | DDD 81</span>
            </div>

            <div class="pend_more_info">
                <span class="pend_name">Pendente:</span>
                <span class="pend_info">${pendencia}</span>
                <span class="pend_date">Data: ${dataFormatada}</span>
                <span class="pend_status">${statusText}</span>
                <a href="${email}" target="_blank" class="pend_link"><i class="fa-solid fa-link"></i> e-mail</a>
            </div>
        </div>

        <div class="pend_right">
            <button class="pend_btn edit"><i class="fa-solid fa-file-pen"></i></button>
            <button class="pend_btn done"><i class="fa-regular fa-circle-check"></i></button>
            <button class="pend_btn delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `

    // Botão excluir
    li.querySelector('.delete').addEventListener('click', () => {
        li.remove();
    })

    listPendencias.appendChild(li);
    toggleFormCreateTask ();
    switchStatus(li, statusValue);
}


// Mudar cor da box de acordo com status
function switchStatus (box, selectValue) {
    if (selectValue[1]) {
        box.style.backgroundColor = '#d13535ff';
    } else if (selectValue[2]) {
        box.style.backgroundColor = '#ffae00ff';
    } else if (selectValue[3]) {
        box.style.backgroundColor = '#fffb00ff';
    } else if (selectValue[4]) {
        box.style.backgroundColor = '#008cffff';
    } else {
        alert('erro');
        return
    }
};

//Função para preencher o formulario automaticamente
function cleanTask () {
    document.getElementById('taskLoja').value = '';
    document.getElementById('taskPendencia').value = '';
    document.getElementById('taskEmail').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskStatus').value = '';
};

