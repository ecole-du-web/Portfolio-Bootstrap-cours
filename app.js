const allNavItems = document.querySelectorAll('.nav-item');
const navbar = document.querySelector('.navbar-collapse');


allNavItems.forEach(item => item.addEventListener('click', () => {

    navbar.classList.toggle('show');

}));