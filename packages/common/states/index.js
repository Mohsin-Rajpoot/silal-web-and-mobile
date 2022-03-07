import {useState} from 'react';

const AuthStates = () => {
    const [user,setUser]=useState("helo world")

    const setUserData=(data)=>setUser(data)
  return {user,setUser,setUserData}
}

export default AuthStates