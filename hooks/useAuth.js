import { createContext, useContext, useEffect, useState } from "react"
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth, GoogleAuthProvider, signInWithCredential } from './../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext({
    // initial state
});

WebBrowser.maybeCompleteAuthSession();

export const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [initialLoading,setInitialLoading] = useState(true)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [_, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '459970747737-j1dul81dk09av1r8ponv18fg80n609f5.apps.googleusercontent.com',
      androidClientId: '459970747737-j1dul81dk09av1r8ponv18fg80n609f5.apps.googleusercontent.com',
      iosClientId:'459970747737-8lqbk2lmf0f943d17t6ujqg0nvibdun7.apps.googleusercontent.com'
    },
  );

    useEffect(
      ()=> onAuthStateChanged(auth, (user)=>{
        if(user)setUser(user)
        else setUser(null)
        setInitialLoading(false)
      }),[])

    useEffect(() => {
      if (response?.type === 'success') {
        const { id_token } = response.params;
        const credential = GoogleAuthProvider.credential(id_token);
        try{
          signInWithCredential(auth, credential);
        }catch(err){
          setError(err)
        }finally{
          setLoading(false)
        }
      }
    }, [response]);

    const logout = () =>{
      setLoading(true);
      signOut(auth).catch((error)=>console.log(error)).finally(()=>setLoading(false))
    }

    return (
        <AuthContext.Provider value={{ user,signInWithGoogle: promptAsync,error,loading,logout}}>
           {!initialLoading && children}
        </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext)
}