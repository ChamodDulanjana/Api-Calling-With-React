import React, {createContext, useState} from 'react';



export const GlobalContext = createContext(null);


const GlobalContextProvider = (props) => {
    const [header, setHeader] = useState("Manage Users");
    const [id, setId] = useState(0);

    const contextValue = {header, setHeader, id, setId};

    return (
        <GlobalContext.Provider value={contextValue}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;