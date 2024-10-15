const scheduleGrid = document.getElementById('scheduleGrid');
const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const timeSlots = ['9:00 - 11:00', '11:00 - 13:00', '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00'];

const timeHeader = document.createElement('div');
timeHeader.classList.add('header');
timeHeader.textContent = 'Время';
scheduleGrid.appendChild(timeHeader);


const today = new Date();

for (let i = 0; i < daysOfWeek.length; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i); // Добавляем дни к сегодняшней дате
    const dayHeader = document.createElement('div');
    dayHeader.classList.add('header');
    dayHeader.textContent = `${daysOfWeek[i]} (${date.toLocaleDateString('ru-RU')})`;
    scheduleGrid.appendChild(dayHeader);
}