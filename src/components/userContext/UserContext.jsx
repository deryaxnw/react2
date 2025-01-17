import React, {createContext, useState } from "react";

export const UserContext = createContext();

export const StorageContext = ({ children }) => {
const [contar, setContar] = useState(0)


  function handleClick(){

        setContar((contar) => contar + 1)

    }

    function handleClickDois(){

        setContar((contar) => contar + 2)

    }

    function handleClickTres(){

        setContar((contar) => contar + 3)

    }



    return (
    <>
    <UserContext.Provider value={{contar, handleClick, handleClickDois , handleClickTres}}>
    {children}
      </UserContext.Provider>
    
    
    </>

    )


};
