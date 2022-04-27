import { useRef, useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { useJsApiLoader } from "@react-google-maps/api";
import Navbar from "./components/Navbar/Navbar";
import MapPage from "./components/MapPage/MapPage";
import HomePage from "./components/HomePage/HomePage";
import { Container } from "./App.style";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { getLocalStorage} from "./utils/storage";
import {MapRouteContext} from './context/context'

export const center = { lat: 48, lng: 3 };

function App() {
  //PERFORMANCE ERROR PREVENTION
  const [libraries] = useState(["places"]);
  //CONNECTION WITH GOOGLE MAPS API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });
  let navigate = useNavigate();
  //SETTING MAP FOR GOOGLEMAP COMPONENT
  const [map, setMap] = useState(/** @type google.maps.GoogleMap*/ (null));

  //SETTING GOOGLEMAP DIRECTION RESULTS
  const [directionResponse, setDirectionResponse] = useState(null);
  const [duration, setDuration] = useState("");
  const [durationtxt, setDurationTxt] = useState("");
  const [distance, setDistance] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  

  //LOCALSTORAGE STATE
  const [routesStorage, setRoutesStorage] = useState([]);
  
  //GET LOCAL STORAGE DATA
  useEffect(() => {
    getLocalStorage(setRoutesStorage);
  }, [directionResponse, navigate]);

  /*USING REFS INSTEAD OF USESTATE
   BECOUSE OF PROBLEMS WITH  <AUTOCOMPLETE> COMPONENT*/

  /**@type React.MutableRefObject<HTMLInputElement>*/
  const originRef = useRef();
  /**@type React.MutableRefObject<HTMLInputElement>*/
  const destinationRef = useRef();

  if (!isLoaded) {
    return <Spinner>Loading...</Spinner>;
  }

  


  

  return (
    <MapRouteContext.Provider value={'name'}>
      <Container>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                routesStorage={routesStorage}
                originRef={originRef}
                destinationRef={destinationRef}
                clearRoute={clearRoute}
              />
            }
          />
          <Route
            path="/map"
            element={
              <MapPage
                map={map}
                setMap={setMap}
                distance={distance}
                duration={duration}
                durationtxt={durationtxt}
                directionResponse={directionResponse}
                origin={origin}
                destination={destination}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </MapRouteContext.Provider>
  );
}

export default App;
