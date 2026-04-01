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