const loginForm = document.getElementById('login-form');
const loginCard = document.getElementById('login-card');
const dashboardCard = document.getElementById('dashboard-card');
const logoutBtn = document.getElementById('logout-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const demoAccount = {
  username: 'pilot',
  password: '123456',
};

function showDashboard() {
  loginCard.classList.add('hidden');
  dashboardCard.classList.remove('hidden');
}

function showLogin() {
  dashboardCard.classList.add('hidden');
  loginCard.classList.remove('hidden');
  loginForm.reset();
  usernameInput.focus();
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === demoAccount.username && password === demoAccount.password) {
    showDashboard();
    return;
  }

  alert('账号或密码不正确，请使用 pilot / 123456');
});

logoutBtn.addEventListener('click', showLogin);

showLogin();
