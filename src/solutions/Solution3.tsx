import React, { useState, useEffect } from 'react';

const mockDatabase = {
  news: [
    'Вышла новая версия React 19 с серверными компонентами',
    'Vite 5 признан самым быстрым бандлером года',
    'Разработчики выбирают TypeScript в 2026 году',
  ],
  sports: [
    'Финальный матч Лиги Чемпионов пройдет в субботу',
    'Установлен новый мировой рекорд по марафону',
    'Сборная одержала победу со счетом 3:1',
  ],
};

export const Solution3: React.FC = () => {
  const [category, setCategory] = useState<'news' | 'sports'>('news');
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  // 1. useEffect для секундного таймера с очисткой
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Функция очистки (cleanup) при размонтировании
    return () => {
      clearInterval(timerId);
    };
  }, []); // Пустой массив зависимостей = запускается 1 раз при монтировании

  // 2. useEffect для загрузки данных при изменении категории
  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setItems(mockDatabase[category]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [category]); // Запускается при изменении категории

  return (
    <div className="grid-2">
      {/* Таймер */}
      <div className="demo-area">
        <h3 style={{ marginBottom: '1rem' }}>1. Живые часы (Таймер)</h3>
        <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '8px', textAlign: 'center' }}>
          <span style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
            {time}
          </span>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '0.5rem' }}>
            Обновляется каждую секунду через setInterval
          </p>
        </div>
      </div>

      {/* Симуляция API */}
      <div className="demo-area">
        <h3 style={{ marginBottom: '1rem' }}>2. Асинхронная загрузка категорий</h3>
        
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <button
            className={`btn ${category === 'news' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setCategory('news')}
          >
            📰 Новости
          </button>
          <button
            className={`btn ${category === 'sports' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setCategory('sports')}
          >
            ⚽ Спорт
          </button>
        </div>

        <div style={{ minHeight: '120px', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
          {loading ? (
            <div style={{ color: 'var(--accent-amber)', fontStyle: 'italic' }}>⏳ Загрузка данных категории "{category}"...</div>
          ) : (
            <ul style={{ paddingLeft: '1.2rem' }}>
              {items.map((item, idx) => (
                <li key={idx} style={{ margin: '0.3rem 0' }}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
