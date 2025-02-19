document.addEventListener("DOMContentLoaded", function() {
  const registrationDiv = document.getElementById("registrationDiv");
  const loggedInDiv = document.getElementById("loggedInDiv");
  const displayUsername = document.getElementById("displayUsername");
  const registerButton = document.getElementById("registerButton");
  const logoutButton = document.getElementById("logoutButton");


  function checkLoginState() {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (isLoggedIn) {
      registrationDiv.style.display = "none";
      loggedInDiv.style.display = "block";
      displayUsername.textContent = localStorage.getItem("username") || "Пользователь";
    } else {
      registrationDiv.style.display = "block";
      loggedInDiv.style.display = "none";
    }
  }


  checkLoginState();


  registerButton.addEventListener("click", async function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();


    if (username === "" || password === "") {
      alert("Пожалуйста, заполните оба поля!");
      return;
    }
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

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);


    checkLoginState();
  });


  logoutButton.addEventListener("click", function() {
    // Удаляем данные авторизации
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");


    checkLoginState();
  });
});
