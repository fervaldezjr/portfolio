let menu = document.getElementById('menu');
let nav = document.getElementById('nav-list');

menu.addEventListener('click', show);

function show() {
    nav.classList.toggle('-translate-x-[100rem]')
};

// Stack
const stack = [
    {nombre: 'JavaScript', logoTech: '../images/tecnologies/javascript-icon.png'},
    {nombre: 'CSS', logoTech: '../images/tecnologies/css-icon.png'},
    {nombre: 'SASS', logoTech: '../images/tecnologies/sass-icon.png'},
    {nombre: 'Bootstrap', logoTech: '../images/tecnologies/bootstrap-icon.png'},
    {nombre: 'HTML', logoTech: '../images/tecnologies/html-icon.png'},
    {nombre: 'React', logoTech: '../images/tecnologies/react-icon.png'},
    {nombre: 'Tailwind', logoTech: '../images/tecnologies/react-icon.png'},
    {nombre: 'Node.js', logoTech: '../images/tecnologies/react-icon.png'}
];