import menuTpl from './templates/menu-card.hbs'
import './styles.css';
import menu from './menu.json'


const listRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');

listRef.insertAdjacentHTML('beforeend', menuTpl(menu));
checkboxRef.addEventListener('change', onInputChange);
document.body.classList.add('light-theme');

function onInputChange(event) {
  if (document.body.classList.contains('dark-theme')) {
    return document.body.classList.remove('dark-theme');
    
  }
  document.body.classList.add('dark-theme');
  localStorage.setItem('settings', settings);
}
