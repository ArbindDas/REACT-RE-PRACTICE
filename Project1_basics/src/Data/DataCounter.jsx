import { useState } from "react";
import Button from "./Button";
import Counter from "../component/Counter";


export default function DataCounter(){


    const[count, setCount] = useState(0)
    const[error, setError] = useState(false)


       const users = [
//   { id: 1, name: "Arbind", age: 22, address: "Kathmandu" },
//   { id: 2, name: "Sujal", age: 21, address: "darvang" },
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


    return (
        <div className="bg-amber-800">



          <ul className="flex justify-center ">
            {/* {
                users.map((user) => 
                    <li key={user.id}>
                        {user.id} - {user.age} - {user.address} - {user.name}
                    </li>
                )
            } */}

            {
                users.length>0 ? (
                    users.map((user) => (
                        <li key={user.id}>
                             {user.id} - {user.age} - {user.address} - {user.name}
                        </li>
                    ))
                ):(
                    <p className="text-black">Data is not presented currently</p>
                )
            }
          </ul>

            <div className="CounterContainer flex justify-center flex-col">

                 <Button
                onClick={handleIncreament}
                title="+"
                color="bg-red"
            />
            <br />

            <p>counter : </p> <span>{count}</span>
            <br />

            <Button
            onClick={handleDecrement}
            title="-"
            color="bg-red"
            />

            {error ? <p className="bg-red">invalid data</p>: null}

            </div>
            
        </div>
    )


}