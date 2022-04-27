import { useState } from "react";
import { createContext } from "react";

export const MapRouteContext = createContext();

//CALCULATE ROUTE STATE
export const MapRouteProvider = ({ children }) => {
  const [duration, setDuration] = useState("");
  const [durationtxt, setDurationTxt] = useState("");
  const [distance, setDistance] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [directionResponse, setDirectionResponse] = useState(null);

  return (
    <MapRouteContext.Provider
      value={{
        duration,
        setDuration,
        durationtxt,
        setDurationTxt,
        distance,
        setDistance,
        destination,
        setDestination,
        origin,
        setOrigin,
        directionResponse,
        setDirectionResponse,
      }}
    >
      {children}
    </MapRouteContext.Provider>
  );
};
