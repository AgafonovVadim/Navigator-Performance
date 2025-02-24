document.addEventListener('DOMContentLoaded', () => {
  const sessionInfo = document.querySelector('a[href="/login"]');

  if (sessionInfo) {
    sessionInfo.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const result = await response.text();
        const alertWrapper = document.createElement('div');
        alertWrapper.innerHTML = result;

        const alert = alertWrapper.querySelector('.login-alert');
        document.body.appendChild(alert);

        setTimeout(() => alert.classList.add('active'), 50);

        setTimeout(() => {
          alert.classList.remove('active');
          window.location.href = '/?auth=true';
        }, 2000);

      } catch (error) {
        console.error('Ошибка авторизации:', error);
      }
    });
  }
});