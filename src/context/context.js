import React from "react";
import { createContext } from "react";

export const MapRouteContext = createContext();

export const MapRouteProvider = ({ children }) => {
  return (
    <MapRouteContext.Provider value={{}}>{children}</MapRouteContext.Provider>
  );
};
