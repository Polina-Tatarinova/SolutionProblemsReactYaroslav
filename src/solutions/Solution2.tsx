import React, { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
}

export const Solution2: React.FC = () => {
  // Состояния для счетчика
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  // Состояния для товаров и формы
  const [products, setProducts] = useState<Product[]>([
    { id: 1, title: 'Клавиатура Mechanical RGB', price: 4500 },
    { id: 2, title: 'Игровая мышь Wireless', price: 3200 },
  ]);
  const [titleInput, setTitleInput] = useState<string>('');
  const [priceInput, setPriceInput] = useState<string>('');

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleInput.trim() || !priceInput.trim()) return;

    const newProduct: Product = {
      id: Date.now(),
      title: titleInput,
      price: Number(priceInput) || 0,
    };

    setProducts((prev) => [...prev, newProduct]);
    setTitleInput('');
    setPriceInput('');
  };

  return (
    <div className="grid-2">
      {/* Счетчик */}
      <div className="demo-area">
        <h3 style={{ marginBottom: '1rem' }}>1. Счетчик с настраиваемым шагом</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Значение: {count}</span>
          <button className="btn btn-secondary" onClick={() => setCount((c) => c - step)}>-</button>
          <button className="btn" onClick={() => setCount((c) => c + step)}>+</button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Шаг прибавления:</label>
          <input
            type="number"
            className="input-field"
            style={{ width: '80px' }}
            value={step}
            onChange={(e) => setStep(Number(e.target.value) || 1)}
          />
        </div>
      </div>

      {/* Форма товаров */}
      <div className="demo-area">
        <h3 style={{ marginBottom: '1rem' }}>2. Список товаров и форма</h3>
        
        <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
          <input
            type="text"
            className="input-field"
            placeholder="Название товара..."
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
          <input
            type="number"
            className="input-field"
            placeholder="Цена в рублях..."
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
          />
          <button type="submit" className="btn btn-success">Добавить товар</button>
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
  );
};
