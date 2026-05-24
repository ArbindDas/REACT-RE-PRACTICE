// import { useContext } from "react"
import { useContext } from "react"
import { UserContext } from "./createContext"
export default function ArbindInfo(){


    const users = useContext(UserContext)

    return(
        <div>
           {users.map((user) => (
                <div key={user.id}>
                          <p><b>name : </b>{user.name}</p>
                          <p><b>name : </b>{user.age}</p>
                          <p><b>name : </b>{user.address}</p>
                    
                </div>
              
           ))}
        </div>
    )

}