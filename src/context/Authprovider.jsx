import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";


export const Authcontext= createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user,setUser]= useState(null);

        const createUser=(email,password)=>{

            return createUserWithEmailAndPassword(auth,email,password)
        }
          
        const signIn= (email,password)=>{

            return signInWithEmailAndPassword(auth,email,password);
        }
        useEffect(()=>{

      
           const unsubscribe= onAuthStateChanged(auth,(currentuser)=>{
                
                setUser(currentuser);


            });
            return ()=>{
                unsubscribe();
            }



        },[])

        const logout=()=>{
            return signOut(auth);
        }

    const authinfo= {user,createUser,logout,signIn}
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;