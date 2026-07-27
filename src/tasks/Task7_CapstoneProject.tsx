import React, { useState, useRef, useEffect } from 'react';
import { useLocalStorage } from '../solutions/Solution6';

// Задание 7: Итоговый проект - Интерактивный Менеджер Задач (Task Dashboard)
// ТЗ:
// 1. Используйте кастомный хук `useLocalStorage` для хранения списка задач `todos`.
// 2. Добавление задачи: Поле ввода title + приоритет (Низкий, Средний, Высокий).
//    Автоматически фокусируйте инпут с помощью `useRef` при клике на "Добавить задачу".
// 3. Фильтрация задач по статусу: "Все", "Активные", "Завершенные".
// 4. Удаление и переключение статуса выполнения (completed).
// 5. Статистика задач: подсчет общего числа задач, выполненных и невыполненных.

export interface TodoItem {
  id: number;
  text: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

export const Task7_CapstoneProject: React.FC = () => {
  // Вы можете использовать собственный или готовый useLocalStorage
  const [todos, setTodos] = useLocalStorage<TodoItem[]>('course_todos_v1', [
    { id: 1, text: 'Изучить хуки useState и useEffect', priority: 'high', completed: true },
    { id: 2, text: 'Понять разницу между рефами и стейтом', priority: 'medium', completed: false },
    { id: 3, text: 'Написать кастомный хук useLocalStorage', priority: 'low', completed: false },
  ]);

  const [textInput, setTextInput] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const newTodo: TodoItem = {
      id: Date.now(),
      text: textInput,
      priority,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setTextInput('');
    inputRef.current?.focus();
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="task-container">
      <div className="instruction-box">
        <h4>🚀 Задание 7: Итоговый Проект (Task Manager Dashboard)</h4>
        <ul>
          <li>Объедините знания <code>useState</code>, <code>useRef</code>, <code>map/key</code> и <code>custom hooks</code>.</li>
          <li>Реализовано добавление, удаление, фильтрация и автосохранение задач в localStorage.</li>
        </ul>
      </div>

      <div className="demo-area">
        {/* Форма добавления */}
        <form onSubmit={handleAddTodo} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <input
            ref={inputRef}
            type="text"
            className="input-field"
            placeholder="Введите описание новой задачи..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            style={{ flex: 1, minWidth: '220px' }}
          />
          <select
            className="input-field"
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
          >
            <option value="low">Приоритет: Низкий</option>
            <option value="medium">Приоритет: Средний</option>
            <option value="high">Приоритет: Высокий</option>
          </select>
          <button type="submit" className="btn btn-success">+ Добавить</button>
        </form>

        {/* Панель фильтров и статистики */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFilter('all')}>Все ({todos.length})</button>
            <button className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFilter('active')}>Активные ({activeCount})</button>
            <button className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFilter('completed')}>Завершенные ({todos.length - activeCount})</button>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
            Осталось задач: <strong style={{ color: 'var(--accent-cyan)' }}>{activeCount}</strong>
          </span>
        </div>

        {/* Список задач */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {filteredTodos.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>Задачи отсутствуют в этой категории.</p>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  opacity: todo.completed ? 0.6 : 1,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.text}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    className={`badge ${
                      todo.priority === 'high'
                        ? 'badge-amber'
                        : todo.priority === 'medium'
                        ? 'badge-cyan'
                        : 'badge-emerald'
                    }`}
                  >
                    {todo.priority}
                  </span>
                  <button className="btn btn-danger" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }} onClick={() => deleteTodo(todo.id)}>
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
