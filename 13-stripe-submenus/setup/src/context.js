import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpened, setSidebarOpened] = useState(false);
    const [isSubmenuOpened, setSubmenuOpened] = useState(true);

    const openSidebar = () => {
        setSidebarOpened(true);
    };
    const closeSidebar = () => {
        setSidebarOpened(false);
    };
    
    const openSubmenu = () => {
        setSubmenuOpened(true);
    };
    const closeSubmenu = () => {
        setSubmenuOpened(false);
    };

    return <AppContext.Provider value={{
        isSubmenuOpened, 
        isSidebarOpened, 
        openSubmenu, 
        openSidebar, 
        closeSubmenu, 
        closeSidebar,
        }}
        >
            {children}
        </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
