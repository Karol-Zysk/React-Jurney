import { useState } from "react";
import { createContext } from "react";

export const MapRouteContext = createContext();

export const MapRouteProvider = ({ children }) => {
  //CALCULATE ROUTE STATE
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
