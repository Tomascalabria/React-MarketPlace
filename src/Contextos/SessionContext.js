import React, {useState} from "react";
import auth from "../Components/loginContainer/api";
import Login from "../Components/loginContainer/login";

const SessionContext = React.createContext(null);

const SessionProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = useState("init");

  React.useEffect(() => {
    auth.onChange(user => {
      setUser(user);

      setStatus("restored");
    });
  }, []);

  

  if (!user) return <Login signIn={auth.signIn} signOut={auth.signOut} status={status} />;

  const state = { user };
  const actions = { signOut: auth.signOut, signIn: auth.signIn };

  return <SessionContext.Provider value={{ state, actions,user }}>{children}</SessionContext.Provider>;
};

export { SessionProvider as Provider, SessionContext as default };  