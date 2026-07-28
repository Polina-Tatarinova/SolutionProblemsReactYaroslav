import React, { useState, useRef } from "react";

// Задание 4: Хук useRef и прямая работа с DOM / хранение значений без ререндеров
// ТЗ:
// 1. Часть A: Создайте реф `inputRef` с помощью `useRef<HTMLInputElement>(null)`.
//    При клике на кнопку "Фокус на инпут" вызывайте `inputRef.current?.focus()`.
// 2. Часть B: Создайте реф `renderCountRef` для подсчета общего количества ререндеров компонента
//    без провоцирования новых бесконечных циклов перерисовок.

export const Task4_useRef: React.FC = () => {
  const [text, setText] = useState<string>("");

  // TODO: 1. Создайте inputRef через useRef
  const inputRef = useRef<HTMLInputElement>(null);
  // TODO: 2. Подсчитайте количество ререндеров через useRef

  return (
    <div className="task-container">
      <div className="instruction-box">
        <h4>📋 Задание 4: Использование useRef</h4>
        <ul>
          <li>
            Получите ссылку на инпут элемент DOM и фокусируйтесь на нем по
            нажатию кнопки.
          </li>
          <li>
            Используйте <code>useRef</code> для хранения переменной, изменение
            которой не вызывает ререндер компонента.
          </li>
        </ul>
      </div>

      <div className="grid-2">
        {/* Фокусировка DOM */}
        <div className="demo-area">
          <h3 style={{ marginBottom: "1rem" }}>
            1. Управление фокусом DOM-элемента
          </h3>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <input
              type="text"
              className="input-field"
              placeholder="Нажмите кнопку чтобы сфокусировать..."
              style={{ flex: 1 }}
            />
            <button className="btn">Сфокусировать</button>
          </div>
        </div>

        {/* Подсчет ререндеров без ререндер-цикла */}
        <div className="demo-area">
          <h3 style={{ marginBottom: "1rem" }}>
            2. Хранение мутабельного значения
          </h3>

          <p style={{ marginBottom: "0.5rem", color: "var(--text-muted)" }}>
            Вводите текст в поле, чтобы вызвать ререндер компонента:
          </p>

          <input
            type="text"
            className="input-field"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите текст для обновления state..."
            style={{ width: "100%", marginBottom: "1rem" }}
          />

          <div
            style={{
              padding: "0.8rem",
              background: "var(--bg-secondary)",
              borderRadius: "6px",
            }}
          >
            Количество ререндеров компонента:{" "}
            <strong style={{ color: "var(--accent-purple)" }}>0</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
