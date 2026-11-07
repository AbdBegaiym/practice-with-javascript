// Переменная для сохранения данных пользователя после успешной регистрации
let user = null;

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // ЗАДАНИЕ №4: Форма подписки в футере
    // ==========================================
    const subscribeForm = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Отменяем стандартную отправку страницы

            // Проверяем валидность поля email
            if (!emailInput.checkValidity()) {
                alert('Пожалуйста, введите корректный Email!');
                return;
            }

            // Выводим объект в консоль при успешной отправке
            const subscribeData = {
                email: emailInput.value
            };
            console.log('Подписка оформлена:', subscribeData);

            // Очищаем поле ввода
            subscribeForm.reset();
        });
    }

    // ==========================================
    // ЗАДАНИЕ №5: Модальное окно и Регистрация
    // ==========================================
    const registrBtn = document.getElementById('registr-btn');
    const modal = document.getElementById('registr-modal');
    const modalCloseBtn = modal ? modal.querySelector('.modal__close') : null;
    const modalOverlay = modal ? modal.querySelector('.modal__overlay') : null;
    const registrationForm = document.getElementById('registration-form');

    // Функция открытия модального окна
    const openModal = () => {
        if (modal) {
            modal.classList.add('modal-showed');
        }
    };

    // Функция закрытия модального окна
    const closeModal = () => {
        if (modal) {
            modal.classList.remove('modal-showed');
        }
    };

    // События для открытия и закрытия
    if (registrBtn) {
        registrBtn.addEventListener('click', openModal);
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Обработка формы регистрации
    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const birthDate = document.getElementById('birth-date').value;
            const login = document.getElementById('login').value;
            const password = document.getElementById('password').value;
            const repeatPassword = document.getElementById('repeat-password').value;

            // 1. Проверка встроенной валидации браузера
            if (!registrationForm.checkValidity()) {
                alert('Регистрация отклонена: пожалуйста, заполните все поля корректно.');
                return;
            }

            // 2. Проверка совпадения паролей
            if (password !== repeatPassword) {
                alert('Регистрация отклонена: пароли не совпадают!');
                return;
            }

            // 3. Создание объекта пользователя
            user = {
                firstName: firstName,
                lastName: lastName,
                birthDate: birthDate,
                login: login,
                password: password,
                createdOn: new Date()
            };

            // Создаем копию объекта для консоли БЕЗ поля пароля
            const { password: _, ...userWithoutPassword } = user;

            // Вывод данных в консоль без пароля
            console.log('Пользователь успешно зарегистрирован:', userWithoutPassword);

            // Сброс формы и закрытие модального окна
            registrationForm.reset();
            closeModal();
            alert('Регистрация прошла успешно!');
        });
    }
});