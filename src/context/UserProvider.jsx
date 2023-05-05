import { UserContext } from "./UserContext"


export const UserProvider = ({ children }) => {
    return (

        <UserContext.Provider>
            {children}
        </UserContext.Provider>

    );
}