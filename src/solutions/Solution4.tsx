import React, { useState, useRef, useEffect } from "react";

export const Solution4: React.FC = () => {
  const [text, setText] = useState<string>("");

  // Реф для ссылки на DOM элемент инпута
  const inputRef = useRef<HTMLInputElement>(null);

  // Реф для хранения количества ререндеров
  const renderCountRef = useRef<number>(1);

  // Обновляем реф на каждом ререндере (не вызывает новый ререндер)
  useEffect(() => {
    renderCountRef.current += 1;
  });

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="grid-2">
      {/* Управление фокусом DOM */}
      <div className="demo-area">
        <h3 style={{ marginBottom: "1rem" }}>
          1. Управление фокусом DOM-элемента
        </h3>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          <input
            ref={inputRef}
            type="text"
            className="input-field"
            placeholder="Нажмите кнопку чтобы сфокусировать..."
            style={{ flex: 1 }}
          />
          <button className="btn" onClick={handleFocus}>
            Сфокусировать
          </button>
        </div>
      </div>

      {/* Хранение ререндеров */}
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
          <strong style={{ color: "var(--accent-purple)" }}>
            {renderCountRef.current}
          </strong>
        </div>
      </div>
    </div>
  );
};
