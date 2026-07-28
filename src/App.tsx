import React, { useState } from "react";
import { Task1_JSX_Props_Lists } from "./tasks/Task1_JSX_Props_Lists";
import { Solution1 } from "./solutions/Solution1";

import { Task2_useState } from "./tasks/Task2_useState";
import { Solution2 } from "./solutions/Solution2";

import { Task3_useEffect } from "./tasks/Task3_useEffect";
import { Solution3 } from "./solutions/Solution3";

import { Task4_useRef } from "./tasks/Task4_useRef";
import { Solution4 } from "./solutions/Solution4";

import {
  CounterLoggerClass,
  Task5_ClassComponents,
} from "./tasks/Task5_ClassComponents";
import { Solution5 } from "./solutions/Solution5";

import { Task6_CustomHooks } from "./tasks/Task6_CustomHooks";
import { Solution6 } from "./solutions/Solution6";

import { Task7_CapstoneProject } from "./tasks/Task7_CapstoneProject";

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const modules = [
    { id: 1, title: "Модуль 1: JSX, Props & map/key", badge: "Основы" },
    { id: 2, title: "Модуль 2: Хук useState", badge: "Состояние" },
    { id: 3, title: "Модуль 3: Хук useEffect", badge: "Эффекты" },
    { id: 4, title: "Модуль 4: Хук useRef", badge: "DOM & Рефы" },
    { id: 5, title: "Модуль 5: Классовые компоненты", badge: "Жизненный цикл" },
    { id: 6, title: "Модуль 6: Кастомные хуки", badge: "Reusability" },
    { id: 7, title: "Модуль 7: Итоговый проект", badge: "Практика" },
  ];

  const renderModuleContent = () => {
    switch (activeTab) {
      case 1:
        return showSolution ? <Solution1 /> : <Task1_JSX_Props_Lists />;
      case 2:
        return showSolution ? <Solution2 /> : <Task2_useState />;
      case 3:
        return showSolution ? <Solution3 /> : <Task3_useEffect />;
      case 4:
        return showSolution ? <Solution4 /> : <Task4_useRef />;
      case 5:
        return showSolution ? <Solution5 /> : <CounterLoggerClass />;
      case 6:
        return showSolution ? <Solution6 /> : <Task6_CustomHooks />;
      case 7:
        return <Task7_CapstoneProject />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <header className="header-nav">
        <div className="header-title-section">
          <h1>⚛️ Практический Курс React для Начинающих</h1>
          <p>
            Полное интерактивное руководство: от JSX и хуков до классовых
            компонентов и собственных решений
          </p>
        </div>

        <nav className="tabs-nav">
          {modules.map((m) => (
            <button
              key={m.id}
              className={`tab-btn ${activeTab === m.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(m.id);
                setShowSolution(false);
              }}
            >
              <span>{m.title}</span>
            </button>
          ))}
        </nav>
      </header>

      <main>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">
              {modules.find((m) => m.id === activeTab)?.title}
            </h2>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              <span className="badge badge-cyan">
                {modules.find((m) => m.id === activeTab)?.badge}
              </span>
              {activeTab !== 7 && (
                <button
                  className="btn btn-secondary"
                  style={{ fontSize: "0.8rem", padding: "0.3rem 0.7rem" }}
                  onClick={() => setShowSolution(!showSolution)}
                >
                  {showSolution
                    ? "🙈 Скрыть решение"
                    : "💡 Показать эталонное решение"}
                </button>
              )}
            </div>
          </div>

          {renderModuleContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
