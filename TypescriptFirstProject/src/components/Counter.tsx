import { useEffect, useState } from "react";

import Button from "./Button";
type User = {
  id: number;
  name: string;
  age: number;
  address: string;
  email: string;
};
export default function Counter() {
  const users: User[] = [
    {
      id: 1,
      name: "Arbind",
      age: 22,
      address: "Kathmandu",
      email: "arbind@example.com",
    },

    {
    id: 2,
    name: "Sujal Shrestha",
    age: 21,
    address: "Pokhara",
    email: "sujal@example.com",
  },
  {
    id: 3,
    name: "Ramesh Rai",
    age: 25,
    address: "Biratnagar",
    email: "ramesh@example.com",
  },
  ];

  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const handleIncrement = (): void => {
    if (count >= 10) {
      alert(`you cant add value more then `);
      setError(true);
      return;
    } else {
      setCount((prev) => prev + 1);
      setError(false);
    }
  };

  const handleDecrement = (): void => {
    if (count <= 0) {
      alert("you can't decrease value less then");
      setError(true);
      return;
    } else {
      setCount((prev) => prev - 1);
      setError(false);
    }
  };

  useEffect(() => {
    console.log(`the counter value is : ${count}`);
  }, [count]);

  return (
    <div>
      <h1>hello i am from App.tsx</h1>
      <div className="incrementCounterContainer bg-amber-300">
        <div className="incrementBtn">
          <Button onClick={handleIncrement} title="+" color="bg-red" />
        </div>
      </div>
      <p>Counter value is : </p> <span> {count} </span>
      <div className="decrementCounterContainer">
        <div className="decrementBtn">
          <Button onClick={handleDecrement} title="-" color="bg-red" />

          {error ? (
            <p
              style={{ color: "red", border: "2px" }}
              className="bg-red-500 text-white p-2"
            >
              Invalid value
            </p>
          ) : null}
        </div>

        <button>click</button>
      </div>
      <div className="UserDataContainer">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                id : <span>{user.id}</span>
              </p>
              <p>
                email : <span>{user.email}</span>
              </p>
              <p>
                address : <span>{user.address}</span>
              </p>
              <p>
                name : <span>{user.name}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
