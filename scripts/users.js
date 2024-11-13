document.addEventListener('DOMContentLoaded', () => {
    const loadButton = document.getElementById('load-users');
    const preloader = document.getElementById('preloader');
    const usersContainer = document.getElementById('users-container');

    let isFirstLoad = true;

    loadButton.addEventListener('click', () => {
        fetchUsers();
    });

    async function fetchUsers() {
        preloader.classList.remove('hidden');
        usersContainer.innerHTML = '';

        // Псевдо-случайная фильтрация для запроса
        let url;
        if (isFirstLoad) {
            url = 'https://jsonplaceholder.typicode.com/users?&_start=0&_limit=5';
        } else {
            url = 'https://jsonplaceholder.typicode.com/users?&_start=5&_limit=5';
        }
        isFirstLoad = !isFirstLoad; // Меняем флаг на противоположный

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${response.status}`);
            }

            const users = await response.json();
            preloader.classList.add('hidden');
            renderUsers(users);
        } catch (error) {
            preloader.classList.add('hidden');
            usersContainer.innerHTML = `<div class="error">⚠ Что-то пошло не так: ${error.message}</div>`;
        }
    }

    function renderUsers(users) {
        usersContainer.innerHTML = users.map(user => `
            <div class="user-card">
                <h3>${user.username} (${user.name})</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Телефон:</strong> ${user.phone}</p>
                <p><strong>Адрес:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
                <p><strong>Вебсайт:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                <p><strong>Компания:</strong> ${user.company.name}</p>
            </div>
        `).join('');
    }
});
