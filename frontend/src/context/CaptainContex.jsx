import React, { createContext, useState, useContext } from "react";

// Create CaptainContext
export const CaptainDataContext = createContext();


// Create a provider component
export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
 const [isLoading, setisLoading] = useState(null)
 const [error, seterror] = useState(null)

 const  updateCaptain=(captainData)=>{
    setCaptain(captainData)
 }
 const value ={
    captain,
    setCaptain,
    isLoading,
    setisLoading,
    error,
    seterror,
    updateCaptain
 }
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext
// Custom hook to use CaptainContext