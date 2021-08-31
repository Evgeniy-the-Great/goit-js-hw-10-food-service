import menuTpl from './templates/menu-card.hbs'
import './styles.css';
import menu from './menu.json'
import LS from './LS'


const listRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');

listRef.insertAdjacentHTML('beforeend', menuTpl(menu));
checkboxRef.addEventListener('change', onInputChange);
// document.body.classList.add('light-theme');


function onInputChange(e) {
  const input = e.target;
  const isChanged = input.checked;
  

  document.body.classList.toggle('dark-theme');
  LS.save('isChecked', isChanged);

  // const isInputChecked = LS.load('isChecked');
  // console.log(isInputChecked);
  // if (isInputChecked) {
  //   document.body.classList.add('dark-theme');
  //   checkboxRef.checked = isInputChecked;
  // }
}
const changeCheck = () => {
  const isInputChecked = LS.load('isChecked');
  console.log(isInputChecked);
  if (isInputChecked) {
    document.body.classList.add('dark-theme');
    checkboxRef.checked = isInputChecked;
  }
}

changeCheck();
