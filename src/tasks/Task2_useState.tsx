import React, { useState } from 'react';

// Задание 2: Хук useState
// ТЗ:
// 1. Создайте состояние `counter` (число) и `step` (число).
// 2. Реализуйте кнопки "+" и "-", которые изменяют `counter` на величину `step`.
// 3. Создайте форму добавления нового товара: поле инпута `title` и `price`.
// 4. При отправке формы добавляйте новый товар в состояние `products` (массив объектов).
// 5. Выведите список товаров.

interface Product {
  id: number;
  title: string;
  price: number;
}

export const Task2_useState: React.FC = () => {
  // Заготовка состояния товаров
  const [products, setProducts] = useState<Product[]>([
    { id: 1, title: 'Клавиатура Mechanical RGB', price: 4500 },
    { id: 2, title: 'Игровая мышь Wireless', price: 3200 },
  ]);

  // TODO: Добавьте необходимые `useState` для счетчика, шага и полей ввода формы

  return (
    <div className="task-container">
      <div className="instruction-box">
        <h4>📋 Задание 2: Состояние с useState</h4>
        <ul>
          <li>Реализуйте счетчик с возможностью настраивать шаг (step).</li>
          <li>Создайте контролируемую форму для добавления товаров в список.</li>
          <li>Обработайте сабмит формы и очистите поля ввода после добавления.</li>
        </ul>
      </div>

      <div className="grid-2">
        {/* Часть A: Интерактивный счетчик */}
        <div className="demo-area">
          <h3 style={{ marginBottom: '1rem' }}>1. Счетчик с настраиваемым шагом</h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Значение: 0</span>
            <button className="btn btn-secondary">-</button>
            <button className="btn">+</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Шаг прибавления:</label>
            <input
              type="number"
              className="input-field"
              style={{ width: '80px' }}
              defaultValue={1}
            />
          </div>
        </div>

        {/* Часть B: Форма товаров */}
        <div className="demo-area">
          <h3 style={{ marginBottom: '1rem' }}>2. Список товаров и форма</h3>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
            <input
              type="text"
              className="input-field"
              placeholder="Название товара..."
            />
            <input
              type="number"
              className="input-field"
              placeholder="Цена в рублях..."
            />
            <button type="button" className="btn btn-success">Добавить товар</button>
          </form>

          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Товары в корзине:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {products.map((p) => (
              <li key={p.id} style={{ padding: '0.4rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between' }}>
                <span>{p.title}</span>
                <strong style={{ color: 'var(--accent-emerald)' }}>{p.price} ₽</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
