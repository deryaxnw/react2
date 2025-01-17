import React ,{ createContext, useEffect, useState } from "react";

export const UseContext = createContext();

export const StorageContexto = ({ children }) => {
const [dados, setDados] = useState(null)

useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`).then((response) => response.json()).then((json) => setDados(json))
}, [])


    function LimaparDados(){
        setDados(null)
    }

    function VoltarDados(){
        fetch(`https://ranekapi.origamid.dev/json/api/produto`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }



  return (
    <>
      <UseContext.Provider value={{dados, LimaparDados, VoltarDados}}>
        {children}
        </UseContext.Provider>
    </>
  );
};
