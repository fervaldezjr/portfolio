let menu = document.getElementById('menu');
let nav = document.getElementById('nav-list');

menu.addEventListener('click', show);

function show() {
    nav.classList.toggle('-translate-x-[100rem]')
};

// Stack
const stacks = [
    {nombre: 'JavaScript', logoTech: '../images/tecnologies/javascript-icon.webp'},
    {nombre: 'CSS', logoTech: '../images/tecnologies/css-icon.webp'},
    {nombre: 'SASS', logoTech: '../images/tecnologies/sass-icon.webp'},
    {nombre: 'Bootstrap', logoTech: '../images/tecnologies/bootstrap-icon.webp'},
    {nombre: 'HTML', logoTech: '../images/tecnologies/html-icon.webp'},
    {nombre: 'React', logoTech: '../images/tecnologies/react-icon.webp'},
    {nombre: 'Tailwind', logoTech: '../images/tecnologies/tailwind-icon.webp'},
    {nombre: 'Git', logoTech: '../images/tecnologies/git-icon.webp'},
    {nombre: 'Node.js', logoTech: '../images/tecnologies/nodejs-icon.webp'}
];

const stackCard = document.getElementById('stack');

stackCard.innerHTML = stacks.map((stacks) => `
    <div class='flex-col items-center justify-center text-center'>
        <img src='${stacks.logoTech}' alt='${stacks.nombre}' class='flex justify-center items-center mx-auto' width='100px'/>
    </div>
`).join('');