import React from "react";
//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
//import react-router-dom v6
//import API Context
import { AppContextProvider } from "./context/AppContextProvider";

const Index = ({ children }) => {

    return (

        <AppContextProvider>
            {children}
        </AppContextProvider>
    );
};
export default Index;
