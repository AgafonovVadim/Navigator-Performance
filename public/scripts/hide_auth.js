document.addEventListener("DOMContentLoaded", () => {
  const sessionInfo = document.querySelector('.session-info');

  if (localStorage.getItem('sessionPassed') === 'true') {
    sessionInfo.classList.add('passed');
  }


  const sessionLinks = document.querySelectorAll('.session-info a[href="/login"]');
  if (sessionLinks) {
    sessionLinks.addEventListener('click', () => {
      sessionInfo.classList.add('passed');
      localStorage.setItem('sessionPassed', 'true');
    });
  }
});
