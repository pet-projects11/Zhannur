# 🏡 UyTap

## 📌 О проекте
Проект представляет собой веб-приложение для работы с объявлениями о недвижимости. Включает в себя **бэкенд на Flask** и **фронтенд на React**.

## 🚀 Установка и запуск

### 1️⃣ Установка зависимостей
#### 📌 Бэкенд (Flask)
```sh
pip install Flask
pip install flask-cors
```

#### 📌 Фронтенд (React)
```sh
npm install
```

### 2️⃣ Запуск проекта
1. **Распакуйте архив с проектом**
2. Откройте терминал и перейдите в директорию `backend`:
   ```sh
   cd backend
   ```
3. Установите зависимости бэкенда:
   ```sh
   pip install Flask flask-cors
   ```
4. Откройте **новый терминал**, перейдите в директорию `my-app`:
   ```sh
   cd my-app
   ```
5. Установите зависимости фронтенда:
   ```sh
   npm install
   npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest @types/react @types/react-dom axios cors emailjs-com express pg prop-types react react-dom react-router-dom web-vitals
   ```
6. Запустите фронтенд:
   ```sh
   npm start
   ```
7. После успешного запуска данные будут доступны по адресу:
   ```
   http://localhost:5173/
   ```

---

## 📂 Структура проекта
```
real_estate.db  # База данных
|   structure.txt  # Структура БД
|
+--- backend
|   |-- api.py         # Запуск бэкенда
|   |-- database.py    # Запускать первым (инициализация БД)
|   |-- seed.py        # Заполнение БД тестовыми данными (изменить пути к фотографиям)
|   |
|   \--- __pycache__   # Кешированные файлы Python
|
+--- image             # Фотографии объявлений
|
\--- my-app            # Фронтенд
    |-- .gitignore
    |-- index.html
    |-- package.json
    |-- README.md
    |-- vite.config.mjs
    |
    \--- src           # Исходный код
        |-- App.jsx
        |-- index.jsx
        |-- global.css
        |-- reportWebVitals.jsx
        |
        +--- components        # Компоненты интерфейса
        |   |-- (файлы компонентов)
        |
        +--- footer            # Футер сайта
        |   |-- (файлы футера)
        |
        +--- formblock         # Формы
        |   |-- (файлы форм)
        |
        +--- header            # Хедер
        |   |-- (файлы хедера)
        |
        \--- zharnama          # Объявления
            |-- (файлы компонентов объявлений)
        |
        +--- services          # API-запросы
        |   |-- api.jsx
        |
        \--- utils             # Утилиты и вспомогательные функции
            |-- domManipulation.jsx
```

---

## 🛠 Технологии
- **Backend:** Flask, Flask-CORS, SQLite
- **Frontend:** React, Vite
- **База данных:** SQLite (`real_estate.db`)
