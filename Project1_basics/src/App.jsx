import { use, useEffect, useState } from "react";

import "./App.css";
import Counter from "./component/Counter";

function App() {
  // const [count, setCount] = useState(0);
  // const [error, setError] = useState(false);

  // const userData = [
  //   {id: 1, username: "Arbind"},
  //   {id: 2, username: "Aryan"},
  //   {id: 3, username: "Ram"},
  //   {id: 4, username: "Shyam"},
  //   {id: 5, username: "Hari"},
  // ];


  // Render means React re-executes your component function to calculate the UI again.

//   So when we say “component re-renders”, it means:
// ✔ React runs your App() function again
// ✔ It recalculates JSX
// ✔ It updates the Virtual DOM
// ✔ Then updates the real DOM if something changed

  // useEffect(()=>{
  //   console.log("running userEffect.......")
  // })
// So it runs when:
// page loads (initial render)
// you click increment / decrement (state changes → re-render)
// any state updates (count, error)
// parent re-renders (if any)

  // useEffect(() =>{
  //   console.log("running userEffect.......")
  // },[]) // ✔ Page loads first time  // ✔ Component appears on screen first time


  // useEffect(() => {
  //   console.log(`the count values is : ${count}`)
  // },[count])
//It also runs once at start because React always runs effects after the first render.
// So sequence is:
// First render → runs once
// count changes → runs again
// count changes again → runs again

  return (
    
          <Counter/>
  );
}

export default App;
