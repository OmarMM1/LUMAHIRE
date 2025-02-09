const logout = document.querySelector('.logout-btn');
const userBtn = document.querySelector('.user-btn');
const jobBtn = document.querySelector('.jobColor');

if (localStorage.getItem('user')) {
  userBtn.classList.add('d-none');
  logout.classList.remove('d-none');
  jobBtn.classList.remove('d-none');
}

logout.addEventListener('click', () => {
  localStorage.removeItem('user');
  window.location.reload();
});



