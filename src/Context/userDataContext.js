import { createContext, useReducer, useState } from "react";
import githubReducer from "./GIthubReducer";

const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {

    //search box
    const [text, setText] = useState('');

    //initial state of the data 
    const initialState = {users : [], loading : false,}
    //use reducers accept a dev-define function and initial state
    //its gives a state and a function to update the state
    const [state, dispatch] = useReducer(githubReducer, initialState)
    
    //get data from api
    const getUserData = async () => {
        
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?q=${text}`, {
            headers : {
                Authorization : `${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        const {items} = await res.json();

        //dispatch accept a object with a type key and value to its dev-define string related to the state
        //and a payload to the data which you want to update
        //this dispatch work as an action in dev-define reducer function
        dispatch({
            type : "GET_USERS",
            payload : items,
        })
        setText("");
    }

    //clear data
    const clearData = () => {
        dispatch({type : "CLEAR_DATA"})
    }



    return (
      <UserDataContext.Provider value={
            {
                users : state.users,
                loading : state.loading,
                getUserData,
                setText,
                text,
                clearData,
            }
        }
      >
        {children}
      </UserDataContext.Provider>
    )
}

export default UserDataContext;