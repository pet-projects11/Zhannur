import sqlite3
import os

class RealEstateDatabase:
    def __init__(self, db_path='../real_estate.db'):
        os.makedirs(os.path.dirname(db_path), exist_ok=True)  # Создаёт папку, если её нет
        self.db_path = db_path
        self._create_tables()
        self._create_indexes()

    def _create_tables(self):
        """Создаёт таблицу properties, если её нет"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS properties (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    house_type TEXT,
                    listing_type TEXT,
                    bedrooms INTEGER,
                    toilets INTEGER,
                    address TEXT,
                    tel_number TEXT,
                    house_square REAL,
                    city TEXT,
                    price REAL,
                    user_full_name TEXT,
                    email TEXT,
                    image_path TEXT,
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                    description TEXT
                )
            ''')
            conn.commit()

    def _create_indexes(self):
        """Создаёт индексы для ускорения поиска"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("CREATE INDEX IF NOT EXISTS idx_properties_city ON properties (city);")
            cursor.execute("CREATE INDEX IF NOT EXISTS idx_properties_price ON properties (price);")
            cursor.execute("CREATE INDEX IF NOT EXISTS idx_properties_bedrooms ON properties (bedrooms);")
            cursor.execute("CREATE INDEX IF NOT EXISTS idx_properties_house_type ON properties (house_type);")
            conn.commit()

    def get_all_properties(self):
        """Получить все объявления"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM properties ORDER BY created_at DESC")
            return [dict(zip([column[0] for column in cursor.description], row)) for row in cursor.fetchall()]

    def get_property(self, property_id):
        """Получить объявление по ID"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM properties WHERE id = ?", (property_id,))
            row = cursor.fetchone()
            if row:
                return dict(zip([column[0] for column in cursor.description], row))
            return None

    def add_property(self, house_type, listing_type, bedrooms, toilets, address, tel_number, house_square, city, price, user_full_name, email, image_path, description):
        """Добавить новое объявление"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute('''
                INSERT INTO properties (house_type, listing_type, bedrooms, toilets, address, tel_number, house_square, city, price, user_full_name, email, image_path, description, created_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            ''', (house_type, listing_type, bedrooms, toilets, address, tel_number, house_square, city, price, user_full_name, email, image_path, description))
            conn.commit()
            return cursor.lastrowid

    def update_property(self, property_id, **updates):
        """Обновить объявление"""
        if not updates:
            return False

        allowed_fields = {"house_type", "listing_type", "bedrooms", "toilets", "address",
                          "tel_number", "house_square", "city", "price", "user_full_name",
                          "email", "image_path", "description"}

        updates = {k: v for k, v in updates.items() if k in allowed_fields}
        if not updates:
            return False

        set_clause = ', '.join([f"{key} = ?" for key in updates.keys()])
        values = list(updates.values()) + [property_id]

        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(f"UPDATE properties SET {set_clause} WHERE id = ?", values)
            conn.commit()
            return cursor.rowcount > 0

    def delete_property(self, property_id):
        """Удалить объявление"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("DELETE FROM properties WHERE id = ?", (property_id,))
            conn.commit()
            return cursor.rowcount > 0

    def search_properties(self, filters, sort_by='created_at', sort_order='DESC'):
        """Фильтрация и сортировка объявлений"""
        query = "SELECT * FROM properties WHERE 1=1"
        params = []

        if 'city' in filters:
            query += " AND city = ?"
            params.append(filters['city'])
        if 'listing_type' in filters:
            query += " AND listing_type = ?"
            params.append(filters['listing_type'])
        if 'price_min' in filters:
            query += " AND price >= ?"
            params.append(filters['price_min'])
        if 'price_max' in filters:
            query += " AND price <= ?"
            params.append(filters['price_max'])
        if 'bedrooms_min' in filters:
            query += " AND bedrooms >= ?"
            params.append(filters['bedrooms_min'])
        if 'house_type' in filters:
            query += " AND house_type = ?"
            params.append(filters['house_type'])

        valid_sort_columns = {"created_at", "price", "bedrooms", "city"}
        valid_sort_orders = {"ASC", "DESC"}

        sort_by = sort_by if sort_by in valid_sort_columns else "created_at"
        sort_order = sort_order if sort_order in valid_sort_orders else "DESC"

        query += f" ORDER BY {sort_by} {sort_order}"

        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(query, params)
            return [dict(zip([column[0] for column in cursor.description], row)) for row in cursor.fetchall()]

    def get_properties_by_type(self, listing_type):
        """Получить объявления по типу (аренда или продажа)"""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM properties WHERE listing_type = ?", (listing_type,))
            return [dict(zip([column[0] for column in cursor.description], row)) for row in cursor.fetchall()]
