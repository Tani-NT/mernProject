import {createContext, useContext, useState, useEffect} from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const [service,setService] = useState("");
    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");

    const storeTokenInLS = (serverToken)=>{
        return localStorage.setItem("token",serverToken);
    }

    let isLoggedIn = !!token;

    const LogoutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token");
    }

    const userAuthentication = async() => {
        try{
            const response = await fetch(`http://localhost:3000/user`,{
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`
                },
            })
            if(response.ok){
                const data = await response.json();
                console.log(data.userData);
                setUser(data.userData);
            }
        }
        catch(error){
            console.log("error while fetching..");
        }
    }

    // to fetch data for services
    const getService = async() =>{
        try {
            const response = await fetch("http://localhost:3000/api/data/service",{
                method: "GET"
            });
            if(response.ok){
                const data = await response.json();
                setService(data.msg);
            }
            else{
                console.log("error while fetching data..")
            }

        } catch (error) {
            console.log(`error from services: ${error}`);
        }
    }

    useEffect(()=>{
        getService();
        userAuthentication();
    },[]);

    return(
        <AuthContext.Provider value={{isLoggedIn,storeTokenInLS, LogoutUser, user, service}}>{children}</AuthContext.Provider>
    );
};

export const useAuth =()=> {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth is used outside of the Provider");
    }
    return authContextValue;
}


