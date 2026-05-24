import UserInfo from "./UserInfo";

export default function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3 style={{color:'#000'}}>User Card</h3>

      {/* passing props to next child */}
      <UserInfo user={user} />
    </div>
  );
}