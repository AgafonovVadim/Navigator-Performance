document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('schedule-form');
    const daysSelect = document.getElementById('days');
    const lessonsInput = document.getElementById('lessons');
    const languageSelect = document.getElementById('language');
    const scheduleContainer = document.getElementById('schedule-container');
    const saveSettingsBtn = document.getElementById('save-settings');
    const loadSettingsBtn = document.getElementById('load-settings');
    const clearSettingsBtn = document.getElementById('clear-settings');
    const section = document.getElementById('constructor');


    function generateSchedule() {
        const days = parseInt(daysSelect.value);
        const lessons = parseInt(lessonsInput.value);
        const language = languageSelect.value;

        scheduleContainer.innerHTML = '';

        for (let i = 1; i <= days; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.innerHTML = `<h3>${language === 'ru' ? 'День' : 'Day'} ${i}</h3>`;

            for (let j = 1; j <= lessons; j++) {
                const lessonInput = document.createElement('input');
                lessonInput.type = 'text';
                lessonInput.placeholder = `${language === 'ru' ? 'Урок' : 'Lesson'} ${j}`;
                lessonInput.className = 'lesson-input';
                dayDiv.appendChild(lessonInput);
            }
            scheduleContainer.appendChild(dayDiv);
        }
    }


    function saveSettings() {
        const settings = {
            days: daysSelect.value,
            lessons: lessonsInput.value,
            language: languageSelect.value,
            schedule: getScheduleData()
        };
        localStorage.setItem('scheduleSettings', JSON.stringify(settings));
        alert('Настройки и расписание сохранены!');
    }


    function loadSettings() {
        const savedSettings = JSON.parse(localStorage.getItem('scheduleSettings'));
        if (savedSettings) {
            daysSelect.value = savedSettings.days;
            lessonsInput.value = savedSettings.lessons;
            languageSelect.value = savedSettings.language;
            generateSchedule();
            setScheduleData(savedSettings.schedule);
        }
    }


    function clearSettings() {
        styling();
        localStorage.removeItem('scheduleSettings');
        scheduleContainer.innerHTML = '';
    }


    function getScheduleData() {
        const scheduleData = [];
        const dayDivs = document.querySelectorAll('.day');

        dayDivs.forEach(dayDiv => {
            const lessons = [];
            const lessonInputs = dayDiv.querySelectorAll('.lesson-input');
            lessonInputs.forEach(input => lessons.push(input.value));
            scheduleData.push(lessons);
        });

        return scheduleData;
    }

    function styling() {
        section.classList.remove('constructor-new');
        section.classList.add('constructor');
    }

    function setScheduleData(scheduleData) {
        const dayDivs = document.querySelectorAll('.day');

        dayDivs.forEach((dayDiv, index) => {
            const lessonInputs = dayDiv.querySelectorAll('.lesson-input');
            scheduleData[index].forEach((lesson, i) => {
                lessonInputs[i].value = lesson;
            });
        });
    }


    form.addEventListener('submit', (event) => {
        section.classList.remove('constructor');
        section.classList.add('constructor-new');
        event.preventDefault();
        generateSchedule();
    });

    saveSettingsBtn.addEventListener('click', saveSettings);
    loadSettingsBtn.addEventListener('click', loadSettings);
    clearSettingsBtn.addEventListener('click', clearSettings);
});
