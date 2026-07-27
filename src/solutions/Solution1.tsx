import React from "react";
import { User } from "../tasks/Task1_JSX_Props_Lists";

const initialUsers: User[] = [
  { id: 1, name: "Алексей Иванов", role: "Frontend Developer", isOnline: true },
  { id: 2, name: "Мария Сидорова", role: "UI/UX Designer", isOnline: false },
  { id: 3, name: "Дмитрий Петров", role: "Backend Developer", isOnline: true },
  { id: 4, name: "Елена Смирнова", role: "QA Engineer", isOnline: false },
];

// Компонент карточки пользователя
const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 1rem",
        marginBottom: "0.5rem",
        background: "var(--bg-secondary)",
        border: "1px solid var(--border-color)",
        borderRadius: "8px",
      }}
    >
      <div>
        <strong style={{ color: "var(--text-main)", display: "block" }}>
          {user.name}
        </strong>
        <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
          {user.role}
        </span>
      </div>
      <span
        style={{
          fontSize: "0.8rem",
          padding: "0.2rem 0.6rem",
          borderRadius: "12px",
          background: user.isOnline
            ? "rgba(16, 185, 129, 0.2)"
            : "rgba(148, 163, 184, 0.2)",
          color: user.isOnline ? "#34d399" : "#94a3b8",
          border: `1px solid ${user.isOnline ? "rgba(16, 185, 129, 0.4)" : "rgba(148, 163, 184, 0.3)"}`,
        }}
      >
        {user.isOnline ? "🟢 Онлайн" : "⚪ Оффлайн"}
      </span>
    </div>
  );
};

export const Solution1: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {initialUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
