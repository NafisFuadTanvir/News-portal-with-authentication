import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


export const Authcontext= createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(true)

        const createUser=(email,password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password)
            
        }
          
        const signIn= (email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
        }

        const logout=()=>{
            setLoading(true);
            return signOut(auth);
            
        }
        useEffect(()=>{

      
           const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
            
                setUser(currentuser);
                setLoading(false);

            });
            return ()=>{
                unsubscribe();
            }



        },[])

        

    const authinfo= {user,createUser,logout,signIn,loading}
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;