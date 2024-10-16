function generateSchedule() {
    const scheduleGrid = document.getElementById('scheduleGrid');
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const timeSlots = ['9:00 - 11:00', '11:00 - 13:00', '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00'];
    const timeHeader = document.createElement('div');
    const date = new Date();
    const today = new Date(date);

    timeHeader.classList.add('header');
    timeHeader.classList.add('hide');
    scheduleGrid.appendChild(timeHeader);


    today.setDate(today.getDate() - today.getDate() % 7);

    for (let i = 0; i < daysOfWeek.length; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        const dayHeader = document.createElement('div');
        dayHeader.classList.add('header');

        const dayName = document.createElement('div');
        dayName.textContent = daysOfWeek[i];

        const dateElement = document.createElement('div');
        dateElement.textContent = date.toLocaleDateString('ru-RU').substring(0, 5);

        dayHeader.appendChild(dayName);
        dayHeader.appendChild(dateElement);
        scheduleGrid.appendChild(dayHeader);
    }

    timeSlots.forEach(slot => {
        const timeDiv = document.createElement('div');
        timeDiv.classList.add('time-column');
        timeDiv.textContent = slot;
        scheduleGrid.appendChild(timeDiv);

        for (let i = 0; i < daysOfWeek.length; i++) {
            const statusDiv = document.createElement('div');
            const rand_rec = Math.floor(Math.random() * 2);
            statusDiv.classList.add(rand_rec % 2 === 0 ? 'occupied' : 'free');
            statusDiv.textContent = rand_rec % 2 === 0 ? 'Занято' : 'Свободно';
            scheduleGrid.appendChild(statusDiv);
        }
    });
}
generateSchedule();