import React, { Component } from "react";

// Задание 5: Классовые компоненты и методы жизненного цикла
// ТЗ:
// 1. Создайте классовый компонент `CounterLoggerClass` от `React.Component`.
// 2. Инициализируйте состояние `{ count: 0, logs: [] }`.
// 3. Используйте метод `componentDidMount()` для подписки / вывода сообщения в консоль о монтировании.
// 4. Используйте метод `componentDidUpdate(prevProps, prevState)` для записи историй изменения счета в массив `logs`.
// 5. Используйте метод `componentWillUnmount()` для очистки ресурсов при удалении компонента.

interface State {
  count: number;
  logs: string[];
}

export class Task5_ClassComponents extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
      logs: [],
    };
  }

  // TODO: Реализуйте методы жизненного цикла:
  // componentDidMount()
  // componentDidUpdate(prevProps, prevState)
  // componentWillUnmount()

  handleIncrement = () => {
    // TODO: Обновите счетчик с помощью this.setState
  };

  handleDecrement = () => {
    // TODO: Обновите счетчик с помощью this.setState
  };

  render() {
    return (
      <div className="task-container">
        <div className="instruction-box">
          <h4>📋 Задание 5: Классовые компоненты и жизненный цикл</h4>
          <ul>
            <li>
              Реализуйте классовый компонент с <code>this.state</code> и{" "}
              <code>this.setState</code>.
            </li>
            <li>
              Добавьте методы жизненного цикла: <code>componentDidMount</code>,{" "}
              <code>componentDidUpdate</code>, <code>componentWillUnmount</code>
              .
            </li>
            <li>
              Записывайте историю каждого изменения счетчика в массив{" "}
              <code>logs</code> внутри <code>componentDidUpdate</code>.
            </li>
          </ul>
        </div>

        <div className="demo-area">
          <h3 style={{ marginBottom: "1rem" }}>
            Классовый Счетчик с Журналом Событий
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Счетчик: {this.state.count}
            </span>
            <button
              className="btn btn-secondary"
              onClick={this.handleDecrement}
            >
              -1
            </button>
            <button className="btn" onClick={this.handleIncrement}>
              +1
            </button>
          </div>

          <h4
            style={{
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              marginBottom: "0.5rem",
            }}
          >
            Журнал (componentDidUpdate):
          </h4>
          <div
            style={{
              maxHeight: "150px",
              overflowY: "auto",
              background: "var(--bg-secondary)",
              padding: "0.75rem",
              borderRadius: "6px",
            }}
          >
            {this.state.logs.length === 0 ? (
              <p style={{ color: "var(--text-subtle)", fontStyle: "italic" }}>
                Журнал пуст. Нажмите кнопки +1 или -1.
              </p>
            ) : (
              <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                {this.state.logs.map((log, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {log}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}
