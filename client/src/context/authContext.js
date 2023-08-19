import axios from "axios"
import {createContext, useEffect, useState} from "react"

export const AuthContext = createContext() 

export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null))

    const login = async(inputs) => {
        const res =await axios.post("http://88.200.63.148:5067/api/auth/login", inputs)
        setCurrentUser(res.data)
        return res.data.role
    }

    const logout = async() => {
        const res =await axios.post("http://88.200.63.148:5067/api/auth/logout")
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
            </AuthContext.Provider>
    )
}