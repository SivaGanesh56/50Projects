const input = document.getElementById('searchbox');
const icon = document.getElementById('icon');
const menu = document.getElementById('menu');

input.addEventListener('input', (e) => {
    const { value } = e.target;
    if (value) {
        icon.classList.remove('fa-search');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-search');
    }
});

icon.addEventListener('click', () => {
    if (icon.classList.contains('fa-times')) {
        input.value = '';
    }
})

menu.addEventListener('click', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('collapse');
})