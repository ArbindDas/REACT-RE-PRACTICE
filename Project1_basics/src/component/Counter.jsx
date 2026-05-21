import { use, useEffect, useState } from "react";
import Button from "./Button";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const userData = [
    // { id: 1, username: "Arbind" },
    // { id: 2, username: "Aryan" },
    // { id: 3, username: "Ram" },
    // { id: 4, username: "Shyam" },
    // { id: 5, username: "Hari" },
  ];

  //   Counter (Parent)
  //    ↓ passes props
  // Button (Child)
  //    ↓ uses props
  // UI renders button

  //   Parent → sends props (data + functions)
  // Child → destructures props (unpacks them)
  // Child → uses them in UI

  //   Parent → sends props
  //   Child → receives props

  const handleIncrement = () => {
    if (count >= 10) {
      setError(true);
      alert(`you cant add value more than `, count);
      return;
    } else {
      setCount((prev) => prev + 1);
      setError(false);
    }
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setError(true);
      alert(`you cant decrease value less then `, count);
      return;
    } else {
      setCount((prev) => prev - 1);
      setError(false);
    }
  };


  useEffect(() =>{
    console.log(`the value of count is ${count}`);
  },[count])

  useEffect(() =>{
    console.log('the useEffect is running........');
  },[])

  const handleMouseEnter = () => {
    console.log("Hovered on Decrease button");
  };

  return (
    <div className="flex h-screen w-full bg-slate-950 items-center justify-center">
      {/* LEFT SIDE - COUNTER */}
      <div className="w-1/2 flex justify-center items-center ">
        <div className="bg-slate-800 p-6 w-96 flex flex-col h-75 gap-4 items-center justify-center rounded-xl shadow-xl">
          <Button
            title="Increase"
            onClick={handleIncrement}
            color="bg-emerald-500 hover:bg-emerald-600"
          />

          <p className="text-white text-2xl">
            The value of Counter is :{" "}
            <span className="font-bold text-cyan-400">{count}</span>
          </p>

          {error ? (
            <p className="bg-red-700 w-30 text-center text-white px-4 py-2 rounded">
              Invalid value
            </p>
          ) : null}

          <Button
            title="Decrease"
            onClick={handleDecrement}
            color="bg-rose-500 hover:bg-rose-600"
          />
        </div>
      </div>

      {/* RIGHT SIDE - USER DATA */}

      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-slate-800 p-6 w-96 h-75 rounded-xl shadow-xl flex flex-col justify-center items-center">
          <h2 className="text-white text-xl font-bold mb-4 text-center">
            User Data
          </h2>

          <ul className="text-white space-y-2 w-full text-center">
            {/* {userData.map((user) => (
              <li
                key={user.id}
                className="bg-slate-700 px-3 py-2 rounded hover:bg-slate-600 transition"
              >
                {user.id} - {user.username}
              </li>
            ))} */}

            {userData.length > 0 ? (
              userData.map((user) => (
                <li key={user.id}>
                  {user.id} - {user.username}
                </li>
              ))
            ) : (
              <li className="flex items-center justify-center gap-2 text-red-400 px-3 py-2 rounded-lg font-medium ">
                ⚠️ Data is not available
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
