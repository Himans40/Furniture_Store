const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const btn = document.querySelector('.sgn-btn');
const btn2 = document.querySelector('.sgn2-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function mainpage(event) {
    event.preventDefault();

  window.location.href = 'index.html';
}
btn.addEventListener('click', mainpage);
btn2.addEventListener('click', mainpage);


