import React from 'react';
import useQuizCreatorModal from '../hooks/useQuizCreatorModal';
export const GlobalContext = React.createContext<any>({});

const Context = ({children}:{children:React.ReactNode}) => {

    const modalValues = useQuizCreatorModal()

    const value = {
        modalValues
    }
    
    return (
        <>
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
        </>
    );
};

export default Context;