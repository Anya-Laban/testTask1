
const NEWLOGO = 'Oddity';
const btn_lucky = document.getElementById('btn_lucky');
const logo_container = document.getElementById('logo_container');
const form = document.querySelector('.form');
const input = form.querySelector('.form__input');

btn_lucky.addEventListener('click', () => {
  logo_container.innerHTML = [...NEWLOGO].map(l => `<span>${l}</span>`).join('');
})


form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const query = input.value.trim();
  if (!query) return;

  const searchURL = `https://www.google.com/search?q=${query}`;
  
  window.open(searchURL, '_blank');
});