# Документація до проекту `Deli`

## Вступ
Цей проєкт є частиною навчальної роботи в рамках дисципліни **"Веб-розробка"** **Київського Політехнічного Інституту**. Основною метою проекту є створення фронтенд-рішення для сучасного веб-додатка із використанням передових технологій. Проект спрямований на вдосконалення практичних навичок студентів у створенні веб-інтерфейсів, їх оптимізації та інтеграції з бекенд-частиною.

## Тема сайту
Ми взяли за тему проекту **"Сайт доставки їжі"**. Для референсів та ідей використовували такі сайти, як "Glovo", "Bolt Food", "Uber Eats".

## Цілі проекту
- Забезпечення функціонального та інтуїтивно зрозумілого інтерфейсу користувача.
- Інтеграція з бекенд-системою через RESTful API.
- Реалізація адаптивного дизайну для підтримки різних пристроїв.
- Надання зручної структури для розширення функціоналу.
- Використання сучасних бібліотек і технологій для ефективного рендерингу.

## Огляд функціональності

### Основні можливості
- **Головна сторінка:** відображення базової інформації про додаток із динамічним контентом.
- **Форми для взаємодії:** збирання даних користувачів, валідовані форми.
- **Робота з API:** отримання та відправка даних через HTTP-запити.
- **Анімації:** плавний перехід між компонентами для покращення UX.

### Технології, що використовуються
- **React.js:** основний фреймворк для розробки компонентів.
- **React Router:** для маршрутизації між сторінками.
- **React Lazy Loading:** для оптимізації продуктивності застосунку.
- **Axios:** для виконання HTTP-запитів.
- **CSS (SCSS):** для стилізації компонентів.
- **Webpack:** збірка проекту та оптимізація ресурсів.

## Технічні вимоги
- **Мова програмування:** JavaScript (ES6 і новіші).
- **Менеджер пакетів:** npm.
- **Система контролю версій:** Git.
- **Середовище розробки:** Node.js v16+.
- **Підтримувані браузери:** Google Chrome, Firefox, Edge.

## Структура проекту

### Основні нинішні директорії
1. **`src/`** — головний каталог із вихідним кодом.
   - `api/axios_queries/` — функції для виконання запитів до API.
     - `axios.js` — базове налаштування клієнта Axios.
     - `requests.js` — специфічні запити до API.
   - `context/` — контексти для керування глобальним станом.
     - `AppContext.jsx` — основний контекст додатку.
   - `hooks/` — кастомні хуки для спрощення логіки.
     - `useClickOutside.js` — хук для обробки кліків поза елементом.
     - `useForm.js` — хук для роботи з формами.
     - `useWindowWidth.js` — хук для відстеження ширини вікна.
   - `pages/` — сторінки додатку.
     - `main/` — головна сторінка.
     - `menu/` — сторінка меню.
     - `profile/` — сторінка профілю користувача.
     - `order/` - сторінка замовлення
     - `delivery_orders` - сторінка для кур'єрів з замовленнями клієнтів
   - `shared/` — спільні стилі й компоненти.
   - `App.css` — стилі для головного компонента.
   - `App.js` — основний компонент додатку.
   - `App.test.js` — модульні тести для компонентів.
   - `index.js` — точка входу в додаток.
   - `index.css` — глобальні стилі проекту.
2. **`public/`** — файли, доступні клієнту напряму (наприклад, favicon).
3. **`package.json`** — конфігурація проекту та список залежностей.
4. **`.gitignore`** — список файлів, що ігноруються Git.

### Основні файли
- **`App.js`** — основний компонент, де підключаються маршрути.
- **`index.js`** — точка входу в додаток.
- **`api.js`** — базові налаштування для HTTP-запитів.

## Інструкція по встановленню

1. **Клонування репозиторію:**
   ```bash
   git clone https://github.com/LD-Lepricon-DIgitals/del_front.git
   ```

2. **Перехід до директорії проекту:**
   ```bash
   cd del_front
   ```

3. **Встановлення залежностей:**
   ```bash
   npm install
   ```

4. **Запуск проекту:**
   ```bash
   npm start
   ```

5. **Збірка проекту для продакшена:**
   ```bash
   npm run build
   ```

## Опис основного функціоналу та сторінок

### Головна сторінка
- Відображення базової інформації про проект із використанням інтерактивних елементів.
- Динамічна зміна контенту на основі API-запитів.

### Поп-ап авторизації/реєстрації
- Реалізація системи входу/реєстрації.
- Захищені запити до бекенду з використанням токенів.

### Кабінет користувача
- Відображення особистих даних користувача.
- Можливість редагування профілю та даних про юзера.

### Кабінет кур'єра
- Відображення особистих даних працівника.
- Можливість редагування профілю та даних про нього.
- Перехід до замовлень, котрі зробили юзери.

### Меню
- Список для юзерів, де вони можуть обрати певні позиції, що їм подобаються, закидуючи їх у власний кошик.
- Реалізовано фільтрацію по групам їжі, а також пошук по назвам блюд.
- Створення замовлення за допомогою кошика, для подальшої переадресації кур'єрам.

### Список усіх замовлень
- Відображення для кур'єрів усіх актуальних замовлень, з можливістью обрати якесь для роботи.
- Перехід до деталей замовлення, де також вказані його статус та інформація про юзера.

### Інтерактивний пошук
- Реалізація функції пошуку з нативним дизайном.
- Оптимізація запитів для великої бази даних.

### Робота з API
- Використання бібліотеки Axios для взаємодії із сервером.
- Підтримка кешування даних для зменшення навантаження на сервер.

## Приклади коду

### Ініціалізація проекту
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Налаштування API
```javascript
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "https://gamch1k.v6.navy/delivery",
  timeout: 10000,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
```

### React Lazy Loading
```javascript
import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";
const Main = lazy(() => import("./pages/main/Main.jsx"));
const Profile = lazy(() => import("./pages/profile/Profile.jsx"));
const Menu = lazy(() => import("./pages/menu/Menu.jsx"));
const CartModalContent = lazy(() =>
  import("./pages/shared/navigation/CartModalContent/CartModalContent.jsx")
);

function App() {
  return (
    <AppProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            {/*           <Route path="/cart" element={<CartModalContent />} />
             */}{" "}
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/orders" element={<Orders />} /> */}
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </Suspense>
      </Router>
    </AppProvider>
  );
}

export default App;
```

### Кастомний хук для обробки кліків поза елементом
```javascript
import {useEffect} from "react";

function useClickOutside(elementRefs, isOpen, onClickOutside){
    useEffect(() => {
        const handleClickOutside = (event) => {
            const isClickOutside = elementRefs.every(ref => {
                return ref.current && !ref.current.contains(event.target);
            });

            if (isOpen && isClickOutside) {
                onClickOutside();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
       
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [elementRefs, isOpen, onClickOutside]);
}

export default useClickOutside;
```

### Кастомний хук для роботи з формами
```javascript
import {useState} from "react";

function useForm(initialValues) {
    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = (name, value) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return { formValues, handleInputChange, setFormValues  };
}

export default useForm;
```

### Кастомний хук для відстеження ширини вікна
```javascript
import { useState, useEffect } from 'react';

function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (newWidth !== windowWidth) {
                setWindowWidth(newWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]); 

    return windowWidth; 
}

export default useWindowWidth
```

### Валідація інпутів
```javascript
function ValidateRegisterInput(formValues){
    const emptyField = findEmptyField(formValues);
    if (emptyField) {
        return {success: false, message: `Заповніть поле "${emptyField}"!`}
    }

    if (!ValidateAdressLength(formValues['address'])){
        return { success: false, message: 'Адреса закоротка або відсутня' };
    }

    if (!ValidateNumber(formValues['phone_number'])){
        return { success: false, message: 'Неправильний формат номеру!' };
    }
    if (!ValidateLoginLength(formValues['login'])){
        return { success: false, message: 'Логін має містити не менше 8 символів!'};
    }
    if (!ValidatePasswordLength(formValues['password'])){
        return { success: false, message: 'Пароль має містити більше 8 символів'};
    }

    if (formValues['password'] !== formValues['submit_password']){
        return { success: false, message: 'Паролі не співпадають!' };
    }

    if (!formValues['personal_data_allow']){
        return { success: false, message: 'Ви маєте дати згоду на обробку персональних даних.'};
    }

    return {success: true} 
}
function ValidateLoginInput(formValues){
    if (!ValidateLoginLength(formValues['login'])){
        return { success: false, message: 'Логін має містити не менше 8 символів!'};
    }
    if (!ValidatePasswordLength(formValues['password'])){
        return { success: false, message: 'Неправильний пароль!'};
    }

    return {success: true} 
}

function ValidateNumber(phoneNumber){
    const phoneRegex = /^\+?3?8?(0\d{9})$/; 
    return phoneRegex.test(phoneNumber);
}
function findEmptyField(formValues) {
    for (let key in formValues) {
        if (formValues[key].length <= 0) {
            return key; 
        }
    }
    return null; 
}
function ValidatePasswordLength(password){
    if (password.length < 8){
        return false;
    }

    return true;
}
function ValidateAdressLength(address){
    if (address.length < 10){
        return false;
    }
    return true
}
function ValidateLoginLength(login){
    if (login.length < 8){
        return false;
    }
    return true
}
export {ValidateLoginInput, ValidateRegisterInput}
```

## Додаткова інформація про роботу

1. **Можливість розширення:** структура проекту дозволяє легко додавати новий функціонал.
2. **Кросбраузерна підтримка:** оптимізація для роботи в усіх популярних браузерах.
3. **Тестування:** базове тестування компонентів із використанням Jest.
4. **Дизайн:** для створення дизайну використовували [**Figma**](https://www.figma.com/design/GRp6eS2Ox2T0ZdW1LcOkbX/Delivery-Service?node-id=0-1&p=f&t=edYUBGTI4Ya71uFv-0).
5. **Постановка задач:** для детального перегляду прогресу та поставлених задач використовували сервіс [**Trello**](https://trello.com/b/n2CWhBvS/web-kpi), котрий підходить нам через непостійний графік роботи та для більш зручного використання **методології KanBan**.
6. **Ревью коду:** наш код був додатково переглянутий [**FullStack Developer "Nick Tubolyev"**](https://github.com/NickolasKemp).

## Інформація про команду

### Члени команди, їх досвід чи проходження курсів
- **Євген Ткаченко** ([LinkedIn](https://www.linkedin.com/in/hang-petrov/)):
*(FrontEnd TeamLead, Designer)*
-- RetroStyle Games (RSG)
-- FictAdvisor
-- HOMEE

- **Максим Рибалко** ([LinkedIn](https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D1%80%D0%B8%D0%B1%D0%B0%D0%BB%D0%BA%D0%BE-8216b9311/)):
*(Main FrontEnd Developer, BackEnd Advisor)*
-- EPAM .NET fullstack Courses 
-- Ukrainian RUST community RUST bootcamp 
-- UDEMY OOP Courses

- **Кирило Липовюк** ([LinkedIn](https://www.linkedin.com/in/kyrylo-lipovok-5b922029a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app))
*(FullStack Developer)*
-- Meduzzen FullStack Internship
-- Python: from Zero to Hero

- **Едуард Міхрін** ([LinkedIn](https://www.linkedin.com/in/eduard-mikhrin-9b6a1a299/))
*(BackEnd TeamLead, Deployment, FrontEnd (partly))*
-- Golang Software Engineer Distributed Lab
-- AWS Academy

- **Анастасія Данська** (LinkedIn)
*(Head of Design, FrontEnd Developer)*

- **Дарія Хоменко** (LinkedIn)
*(FrontEnd Developer)*

## Приємного користування сервісом!
