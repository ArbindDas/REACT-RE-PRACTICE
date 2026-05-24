

import { useUserStore } from "./useUserStore";
export default function UserInfo(){


    const users = useUserStore((state) => state.users)

    return(
        <div>
            {users.map((user) => (
                <div key={user.id}>


                     <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.address}</p>

                </div>
            ))}
        </div>
    )

}