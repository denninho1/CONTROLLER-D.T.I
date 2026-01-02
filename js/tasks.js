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


// criar pendencia
const btnCreateTask = document.getElementById('btn_createNewTask')
const listPendencias = document.getElementById('listPendencias')

btnCreateTask.addEventListener('click', function (e) {
    e.preventDefault()

    // Captura dos valores
    const loja = document.getElementById('taskLoja').value
    const pendencia = document.getElementById('taskPendencia').value
    const email = document.getElementById('taskEmail').value
    const data = document.getElementById('taskDate').value
    const status = document.getElementById('taskStatus').value

    if (!loja || !pendencia || !email || !status) {
        alert('Preencha os campos obrigatórios!')
        return
    }

    // Formata data
    const dataFormatada = data
        ? new Date(data).toLocaleDateString('pt-BR')
        : 'Não informada'

    // Criação do item
    const li = document.createElement('li')
    li.classList.add('box_pend')

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
                <span class="pend_status">${status}</span>
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
        li.remove()
    })

    listPendencias.appendChild(li)
    toggleFormCreateTask ();
})


