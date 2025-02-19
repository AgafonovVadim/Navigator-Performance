document.addEventListener("DOMContentLoaded", () => {
    const Yup = window.Yup;

    const openModal = () => {

        const modal = document.createElement("div");
        modal.className = "modal";

        modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>Запись на услугу</h2>
        <form id="appointment-form">
          <label for="name">Имя:</label>
          <input type="text" id="name" name="name" placeholder="Введите ваше имя" />
          <div class="error" id="name-error"></div>

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Введите ваш email" />
          <div class="error" id="email-error"></div>

          <label for="service">Выберите услугу:</label>
          <select id="service" name="service">
            <option value="">Выберите...</option>
            <option value="detailing">Детейлинг</option>
            <option value="power tuning">Мощностной тюнинг</option>
            <option value="inspection">ТО суперкара</option>
            <option value="field service">Выездное обслуживание</option>
            <option value="improvements">Кузовные доработки</option>
            <option value="competition prep">Подготовка к соревнованиям</option>
            <option value="other">Другое</option>
          </select>
          <div class="error" id="service-error"></div>

          <button type="submit">Отправить</button>
        </form>
      </div>
    `;


        modal.querySelector(".close-button").addEventListener("click", () => {
            modal.remove();
        });


        document.body.appendChild(modal);


        const validationSchema = Yup.object({
            name: Yup.string()
                .required("Имя обязательно для заполнения.")
                .min(2, "Имя слишком короткое!")
                .max(50, "Имя слишком длинное!"),
            email: Yup.string()
                .required("Email обязателен для заполнения.")
                .email("Введите корректный email."),
            service: Yup.string().required("Выбор услуги обязателен.")
                .min(1, "Необходимо выбрать услугу"),
        });


        const form = document.getElementById("appointment-form");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();


            const formData = new FormData(form);
            const values = Object.fromEntries(formData.entries());

            try {
                // Валидация данных
                await validationSchema.validate(values, { abortEarly: false });

                modal.remove();
            } catch (validationErrors) {
                alert("Некорректная форма")

                document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

                validationErrors.inner.forEach((error) => {
                    const field = error.path;
                    const errorElement = document.getElementById(`${field}-error`);
                    if (errorElement) {
                        errorElement.textContent = error.message;
                    }
                });
            }
        });
    };

    // Обработчик для кнопки "Записаться"
    const button = document.getElementById("appointment-button");
    if (button) {
        button.addEventListener("click", openModal);
    }
});
