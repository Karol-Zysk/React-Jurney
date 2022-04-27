import { useState } from "react";
import { createContext } from "react";

export const MapRouteContext = createContext();

//CALCULATE ROUTE STATE
export const MapRouteProvider = ({ children }) => {
  const [directionResponse, setDirectionResponse] = useState();

  return (
    <MapRouteContext.Provider
      value={{
        directionResponse,
        setDirectionResponse,
      }}
    >
      {children}
    </MapRouteContext.Provider>
  );
};
