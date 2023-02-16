import React, { useContext, useEffect, useState} from "react";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

  const [state, setState] = useState({
    visited: {}
  });

  const [lineNumbers, setLineNumbers] = useState(false)


  const visit = (page) => {
    setState(prev => {
      const newState = {...prev};
      newState.visited[page] = true;
      return newState;
    })
  }

  const value = {
    ...state,
    visit,
    lineNumbers,
    setLineNumbers,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  return useContext(AppContext);
}

export const useVisited = (page) => {
  const { visit, visited } = useApp();

  const firstTime = !visited[page];

  useEffect(()=>{
    visit(page);
  },[])

  return { firstTime };
}