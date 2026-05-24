export default function UserCard({ user }) {
  const { name, age, address } = user;

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3 style={{color:'#000'}}>{name}</h3>
      <p style={{color:'#000'}}>Age: {age}</p>
      <p style={{color:'#000'}}>Address: {address}</p>
    </div>
  );
}