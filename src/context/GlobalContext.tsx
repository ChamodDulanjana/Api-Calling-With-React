import React, {createContext, useState} from 'react';



export const GlobalContext = createContext(null);


const GlobalContextProvider = (props) => {
    const [header, setHeader] = useState("Manage Users")

    const contextValue = {header, setHeader};

    return (
        <GlobalContext.Provider value={contextValue}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;