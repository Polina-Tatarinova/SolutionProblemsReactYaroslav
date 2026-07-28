import React, { useState, useEffect } from "react";

// Задание 6: Кастомные хуки (Custom Hooks)
// ТЗ:
// 1. Создайте кастомный хук `useLocalStorage<T>(key: string, initialValue: T)`:
//    - Позволяет сохранять и считывать значение из localStorage.
//    - Автоматически обновляет localStorage при изменении значения state.
// 2. Создайте кастомный хук `useWindowSize()`:
//    - Возвращает `{ width: window.innerWidth, height: window.innerHeight }`.
//    - Подписывается на событие `resize` окна через `useEffect` и чистит подписку.

// TODO: Реализуйте хук useLocalStorage здесь
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

// TODO: Реализуйте хук useWindowSize здесь
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function settingSize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", settingSize);
    return () => window.removeEventListener("resize", settingSize);
  }, []);

  return windowSize;
}

export const Task6_CustomHooks: React.FC = () => {
  // Использование кастомного хука для сохранения темы или текста в localStorage
  const [name, setName] = useLocalStorage<string>("user_name", "Алексей");
  const windowSize = useWindowSize();

  return (
    <div className="task-container">
      <div className="instruction-box">
        <h4>📋 Задание 6: Создание Кастомных Хуков</h4>
        <ul>
          <li>
            Напишите хук <code>useLocalStorage</code> для сохранения состояния
            компонента в памяти браузера.
          </li>
          <li>
            Напишите хук <code>useWindowSize</code> для отслеживания текущего
            размера окна.
          </li>
        </ul>
      </div>

      <div className="grid-2">
        {/* Кастомный хук useLocalStorage */}
        <div className="demo-area">
          <h3 style={{ marginBottom: "1rem" }}>1. useLocalStorage</h3>

          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "var(--text-muted)",
            }}
          >
            Имя (сохраняется в localStorage):
          </label>
          <input
            type="text"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", marginBottom: "1rem" }}
          />

          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            Перезагрузите страницу в браузере: значение сохранится!
          </p>
        </div>

        {/* Кастомный хук useWindowSize */}
        <div className="demo-area">
          <h3 style={{ marginBottom: "1rem" }}>2. useWindowSize</h3>

          <div
            style={{
              padding: "1.2rem",
              background: "var(--bg-secondary)",
              borderRadius: "8px",
            }}
          >
            <div style={{ marginBottom: "0.5rem" }}>
              Ширина экрана:{" "}
              <strong style={{ color: "var(--accent-cyan)" }}>
                {windowSize.width} px
              </strong>
            </div>
            <div>
              Высота экрана:{" "}
              <strong style={{ color: "var(--accent-purple)" }}>
                {windowSize.height} px
              </strong>
            </div>
          </div>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--text-subtle)",
              marginTop: "0.8rem",
            }}
          >
            Попробуйте изменить размер окна браузера.
          </p>
        </div>
      </div>
    </div>
  );
};
