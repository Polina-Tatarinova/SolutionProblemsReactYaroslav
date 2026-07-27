import React, { useState, useEffect } from 'react';

// Кастомный хук useLocalStorage
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

// Кастомный хук useWindowSize
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export const Solution6: React.FC = () => {
  const [name, setName] = useLocalStorage<string>('user_name_sol', 'Алексей');
  const windowSize = useWindowSize();

  return (
    <div className="grid-2">
      <div className="demo-area">
        <h3 style={{ marginBottom: '1rem' }}>1. useLocalStorage</h3>
        
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
          Имя (сохраняется в localStorage):
        </label>
        <input
          type="text"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', marginBottom: '1rem' }}
        />

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Перезагрузите страницу в браузере: значение сохранится!
        </p>
      </div>

      <div className="demo-area">
        <h3 style={{ marginBottom: '1rem' }}>2. useWindowSize</h3>
        
        <div style={{ padding: '1.2rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            Ширина экрана: <strong style={{ color: 'var(--accent-cyan)' }}>{windowSize.width} px</strong>
          </div>
          <div>
            Высота экрана: <strong style={{ color: 'var(--accent-purple)' }}>{windowSize.height} px</strong>
          </div>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginTop: '0.8rem' }}>
          Попробуйте изменить размер окна браузера.
        </p>
      </div>
    </div>
  );
};
