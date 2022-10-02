import { createContext, useReducer, useState } from "react";
import githubReducer from "./GIthubReducer";

const UserDataContext = createContext();

export const UserDataProvider = ({children}) => {

    //search box
    const [text, setText] = useState('');

    //initial state of the data 
    const initialState = {users : [], user : {}, repos : [],  loading : false,}
    //use reducers accept a dev-define function and initial state
    //its gives a state and a function to update the state
    const [state, dispatch] = useReducer(githubReducer, initialState)
    
    //get data from api
    const getUserData = async () => {
        setLoading();
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

    //get a single user
    const getUser = async (login) => {
        setLoading();
        try {
            const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}`, {
                headers : {
                    Authorization : `${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            });
            const data = await res.json();
            dispatch({
                type : "GET_USER",
                payload : data,
            })
        } catch (error) {
            window.location = '/notfound';
        }
    }

    //get user repos
    const getUserRepos = async (login) => {
        const params = new URLSearchParams({
            sort : "created",
            per_page : 10
        })
        try {
            const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`, {
                headers : {
                    Authorization : `${process.env.REACT_APP_GITHUB_TOKEN}`
                }
            });
            const data = await res.json();
            dispatch({
                type : "GET_REPOS",
                payload : data,
            })
        } catch (error) {
            window.location = '/notfound';
        }

    }

    //clear data
    const clearData = () => {
        dispatch({type : "CLEAR_DATA"})
    }

    //set loading
    const setLoading = () => {
        dispatch({
            type : "SET_LOADING"
        })
    }


    return (
      <UserDataContext.Provider value={
            {
               ...state,
                getUserData,
                setText,
                text,
                clearData,
                getUser,
                getUserRepos,
            }
        }
      >
        {children}
      </UserDataContext.Provider>
    )
}

export default UserDataContext;