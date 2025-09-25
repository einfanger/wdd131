let selectElem = document.querySelector('#themeSelect');
let logo = document.querySelector('#logo');
let body = document.body;

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
  let current = selectElem.value;

  if (current === 'dark') {
    body.classList.remove('light');
    body.classList.add('dark');
    logo.src = "byui-logo-white.png";
  } else if (current === 'light') {
    body.classList.remove('dark');
    body.classList.add('light');
    logo.src = "download.png";
  }
}
