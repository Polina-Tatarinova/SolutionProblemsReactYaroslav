import React from "react";
import UserCard from "../components/UserCard/UserCard";

// Модель данных для пользователя
export interface User {
  id: number;
  name: string;
  role: string;
  isOnline: boolean;
}

// Задание 1: JSX, Props, map и key
// ТЗ:
// 1. Создайте компонент `UserCard`, который принимает объект `user` через props.
// 2. Отобразите name, role и статус (Онлайн / Оффлайн) с соответствующим цветом (зеленый/серый).
// 3. Отрендерите список пользователей с помощью массива `users.map(...)`.
// 4. Обязательно укажите уникальный `key` для каждого элемента списка.

const initialUsers: User[] = [
  { id: 1, name: "Алексей Иванов", role: "Frontend Developer", isOnline: true },
  { id: 2, name: "Мария Сидорова", role: "UI/UX Designer", isOnline: false },
  { id: 3, name: "Дмитрий Петров", role: "Backend Developer", isOnline: true },
  { id: 4, name: "Елена Смирнова", role: "QA Engineer", isOnline: false },
];

export const Task1_JSX_Props_Lists: React.FC = () => {
  return (
    <div className="task-container">
      <div className="instruction-box">
        <h4>📋 Задание 1: JSX, Props, map и key</h4>
        <ul>
          <li>
            Отрендерите список пользователей ниже, используя функцию{" "}
            <code>.map()</code>.
          </li>
          <li>
            Для каждого пользователя отобразите его имя, роль и статус
            активности.
          </li>
          <li>
            Не забудьте добавить атрибут <code>key</code> к корневому элементу
            списка.
          </li>
        </ul>
      </div>

      <div className="demo-area">
        {initialUsers.map((user) => (
          <UserCard key={user.id} user={user}>
            {user.name}
          </UserCard>
        ))}
      </div>
    </div>
  );
};
