import './dropdown.js';

const dropdown = document.querySelector('x-dropdown');

// let me know when dropdown is opened
dropdown.addEventListener('show', e => console.log(e));

dropdown.title = 'Custom Title';
setTimeout(() => dropdown.title = 'New Custom Title', 3000);