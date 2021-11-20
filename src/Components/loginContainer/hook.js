import React, {useContext} from "react";
import SessionContext from "../../Contextos/SessionContext";

export function useUser() {
  const {state, user} = useContext(SessionContext);



  return (user); 
}