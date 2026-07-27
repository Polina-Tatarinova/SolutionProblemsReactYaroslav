import { User } from "../../tasks/Task1_JSX_Props_Lists";

const UserCard = ({ user }: { user: User }) => {
  return (
    <>
      <h3 style={{ marginBottom: "1rem", color: "var(--text-main)" }}>
        {user.name}
      </h3>
      <p
        style={{
          padding: "1rem",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "6px",
        }}
      >
        {user.role}
      </p>
      <p style={{ background: user.isOnline ? "#38a804" : "#444643" }}>
        {user.isOnline ? "пользователь в сети" : "пользователь не в сети"}
      </p>
    </>
  );
};

export default UserCard;
