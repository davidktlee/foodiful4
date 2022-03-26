function setMenu(_menu) {
  const lis = document.querySelectorAll('ul li')
  lis.forEach((li) => li.classList.remove('on'))

  document.querySelector('ul li.' + _menu).classList.add('on')
  document.querySelector('main').className = _menu
}
