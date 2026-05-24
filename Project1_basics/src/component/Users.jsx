
import UserCard from "./Userscard";
export default function Users(){



    const users = [
  { id: 1, name: "Arbind", age: 22, address: "Kathmandu" },
  { id: 2, name: "Sujal", age: 21, address: "Pokhara" },
];


    return(

        <div>

            <h2>
                User List
            </h2>
            {
                users.map((user) =>(
                    <UserCard key={user.id} user={user} />
                ))
            }
            {/* 👉 Here we pass entire object as prop (user) */}

            
        </div>
        
    )

}