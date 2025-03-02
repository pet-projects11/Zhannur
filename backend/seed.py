import sqlite3

DB_PATH = "../real_estate.db"

conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Таблицы в БД:", tables)
conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()
test_data = [
    ("Коттедж", "Жалға алу", 7, 1, "ул. Абая, 15", "+7 777 111 22 33", 75.5, "Алматы", 50000, "Иван Иванов", "ivanov@example.com", "C:\\Users\\user\\zhannur\\image1.png", "Продам квартиру с ремонтом, есть собака породы ТАЗ"),
    ("Пәтер", "Сатылым", 3, 5, "ул. Сейфуллина, 120", "+7 705 222 33 44", 45.0, "Астана", 25000000, "Петр Петров", "petrov@example.com", "C:\\Users\\user\\zhannur\\image2.png", "Трехкомнатная квартира в центре города"),
    ("Үй", "Жалға алу", 5, 2, "ул. Жибек Жолы, 45", "+7 701 333 44 55", 120.0, "Шымкент", 100000, "Сергей Сергеев", "sergeev@example.com", "C:\\Users\\user\\zhannur\\image3.png", "Сдается дом с большим участком"),
    ("Коттедж", "Сатылым", 6, 3, "ул. Назарбаева, 10", "+7 702 444 55 66", 200.0, "Караганда", 40000000, "Алексей Алексеев", "alekseev@example.com", "C:\\Users\\user\\zhannur\\image4.png", "Продается коттедж с видом на горы"),
    ("Пәтер", "Жалға алу", 2, 7, "пр. Достык, 99", "+7 777 555 66 77", 35.0, "Алматы", 120000, "Нуржан Нуржанов", "nurzhan@example.com", "C:\\Users\\user\\zhannur\\image5.png", "Уютная квартира в элитном доме"),
    ("Басқа", "Сатылым", 1, 1, "ул. Байтурсынова, 87", "+7 705 666 77 88", 80.0, "Астана", 60000000, "Владимир Владимиров", "vlad@example.com", "C:\\Users\\user\\zhannur\\image6.png", "Продам офисное помещение в бизнес-центре"),
    ("Пәтер", "Сатылым", 4, 9, "ул. Райымбека, 32", "+7 707 777 88 99", 60.0, "Алматы", 28000000, "Данияр Данияров", "daniyar@example.com", "C:\\Users\\user\\zhannur\\image7.png", "Пәтер с панорамным видом"),
    ("Үй", "Жалға алу", 8, 2, "ул. Мангилик Ел, 5", "+7 701 888 99 00", 150.0, "Астана", 150000, "Асем Асемова", "asem@example.com", "C:\\Users\\user\\zhannur\\image8.png", "Сдается дом с бассейном"),
    ("Коттедж", "Сатылым", 10, 4, "ул. Тауелсиздик, 20", "+7 775 999 00 11", 250.0, "Шымкент", 50000000, "Жанат Жанатов", "janat@example.com", "C:\\Users\\user\\zhannur\\image9.png", "Элитный коттедж с дизайнерским ремонтом"),
    ("Пәтер", "Жалға алу", 1, 12, "ул. Пушкина, 8", "+7 777 123 45 67", 25.0, "Караганда", 70000, "Анна Анненкова", "anna@example.com", "C:\\Users\\user\\zhannur\\image10.png", "Студия в новом жилом комплексе")
]
cursor.executemany('''
    INSERT INTO properties (
        house_type, listing_type, bedrooms, toilets, address, tel_number,
        house_square, city, price, user_full_name, email, image_path, description
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
''', test_data)

conn.commit()
conn.close()

print("Тестовые данные успешно добавлены!")
