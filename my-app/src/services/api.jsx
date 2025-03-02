import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Укажите правильный URL вашего бэкенда

export const fetchProperties = async () => {
  try {
    const response = await fetch(`${API_URL}/properties`);
    if (!response.ok) {
      throw new Error('Ошибка при получении данных о недвижимости');
    }
    return await response.json();
  } catch (error) {
    console.error('Ошибка API:', error);
    return [];
  }
};

export const fetchProperty = async (id) => {
  try {
    const response = await fetch(`${API_URL}/properties/${id}`);
    if (!response.ok) {
      throw new Error('Ошибка при получении данных о недвижимости');
    }
    return await response.json();
  } catch (error) {
    console.error('Ошибка API:', error);
    return null;
  }
};

// Экспорт по умолчанию для использования как сервис
export default {
  fetchProperties,
  fetchProperty
};