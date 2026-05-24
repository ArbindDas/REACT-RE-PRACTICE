

import ArbindCard from "./ArbindCard";
import { UserContext } from "./createContext";

const ArbindData = ()=>{


   

      const users = [
    { id: 1, name: "Arbind", age: 22, address: "Kathmandu" },
    { id: 2, name: "Sujal", age: 21, address: "Pokhara" },
  ];


    return(

        <UserContext.Provider value={users}>
          <div> 

            <h2>User List</h2>

            <ArbindCard/>

          </div>

        </UserContext.Provider>
    )

}

export  default ArbindData;