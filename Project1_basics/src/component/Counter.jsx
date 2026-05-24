import { useState, useEffect, use } from "react";
import Button from "./Button";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const usersData = [
    { id: 1, name: "Arbind", address: "Birgunj" },
    { id: 2, name: "Sujal", address: "Kathmandu" },
    { id: 3, name: "Aayush", address: "Pokhara" },
    { id: 4, name: "Rohan", address: "Lalitpur" },
    { id: 5, name: "Sita", address: "Bhaktapur" },
    { id: 6, name: "Nabin", address: "Butwal" },
    { id: 7, name: "Priya", address: "Dharan" },
    { id: 8, name: "Anish", address: "Janakpur" },
    { id: 9, name: "Kiran", address: "Chitwan" },
    { id: 10, name: "Ritika", address: "Hetauda" },
  ];

  const handleIncreament = () => {
    if (count >= 10) {
      alert(`you cant add more then 10`);
      setError(true);
      return;
    } else {
      setCount((prev) => prev + 1);
      setError(false);
    }
  };

  const handleDecrement = () => {
    if (count <= 0) {
      alert("you cant decrease value less then ");
      setError(true);
      return;
    } else {
      setCount((prev) => prev - 1);
      setError(false);
    }
  };

  useEffect(() => {
      console.log(`the user data are showing .... ${count}`);
  },[count]);

  return (
    <div className="CounterMainContainer">
      <div className="leftContainer">
        <div className="handleIncrementContainer">
          <Button
            onClick={handleIncreament}
            color="bg-rose-500 hover:bg-rose-600"
            title="increase"
          />
        </div>
        <div className="handleDecrementContainer">
          <Button
            onClick={handleDecrement}
            color="bg-rose-500 hover:bg-rose-600"
            title="Decrease"
          />
        </div>
        <p>The counter value is : </p>{" "}
        <span style={{ marginLeft: "10px" }}> {count}</span>

        {error ? <p style={{color:'black'}}>Invald value</p> : null}
      </div>

      <div className="rightContainer">
        <div className="userDataContainer">
          <h1>The userData : </h1>
            <ul>
          {
            usersData.length>0 ? (
              usersData.map((user) => (
                  <li key={user.id}>
                      {user.id} - {user.name} - {user.address}
                  </li>
              ))
            ):(
              <li style={{color:'#000'}}>
                  currently data is not presented
              </li>
            )
          }
            </ul>
        </div>
      </div>
    </div>
  );
}
