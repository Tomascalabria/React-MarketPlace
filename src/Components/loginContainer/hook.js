import React from "react";

import SessionContext from "../../Contextos/SessionContext";

export function useUser() {
  const {
    state: { user },
  } = React.useContext(SessionContext);

  return user;
}