import React, { useState, useEffect } from 'react';

// Задание 3: Хук useEffect, побочные эффекты и функция очистки (cleanup)
// ТЗ:
// 1. Часть A (Таймер/Часы): Реализуйте живые часы. Используйте `setInterval` внутри `useEffect`.
//    ОБЯЗАТЕЛЬНО возвращайте функцию очистки `clearInterval(timerId)`, чтобы избежать утечек памяти!
// 2. Часть B (Симуляция загрузки данных с сервера):
//    - При выборе категории ('news' или 'sports') запускайте загрузку данных.
//    - Отображайте индикатор загрузки (loading: true).
//    - Задержка симуляции 1 секунда через `setTimeout`.

export const Task3_useEffect: React.FC = () => {
  const [category, setCategory] = useState<'news' | 'sports'>('news');
  const [items, setItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [time, setTime] = useState<string>('');

  // TODO: 1. Добавьте useEffect для секундного таймера (живые часы)
  // TODO: 2. Добавьте useEffect для загрузки данных при изменении состояния `category`

  return (
    <div className="task-container">
      <div className="instruction-box">
        <h4>📋 Задание 3: useEffect и функции очистки</h4>
        <ul>
          <li>Реализуйте секундомер/часы с помощью <code>setInterval</code> внутри <code>useEffect</code> с очисткой при размонтировании.</li>
          <li>Реализуйте асинхронную загрузку списка постов при переключении категорий.</li>
          <li>Обработайте состояния <code>loading</code> и зависимости массива <code>useEffect</code>.</li>
        </ul>
      </div>

      <div className="grid-2">
        {/* Таймер */}
        <div className="demo-area">
          <h3 style={{ marginBottom: '1rem' }}>1. Живые часы (Таймер)</h3>
          <div style={{ padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '8px', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
              {time || '00:00:00'}
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
                {items.length === 0 ? (
                  <li style={{ color: 'var(--text-muted)' }}>Нет данных для отображения</li>
                ) : (
                  items.map((item, idx) => <li key={idx} style={{ margin: '0.3rem 0' }}>{item}</li>)
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
