import { useRef, useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { useJsApiLoader } from "@react-google-maps/api";
import Navbar from "./components/Navbar/Navbar";
import MapPage from "./components/MapPage/MapPage";
import HomePage from "./components/HomePage/HomePage";
import { Container } from "./App.style";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { storeRoutes } from "./utils/storage";
import {
  emptyInputAlert,
  ErrorAlert,
  incorrectInputAlert,
} from "./utils/ErrorsHandling";

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

  //ERROR HANDLING STATE
  const [errorMessage, setErrorMessage] = useState("");

  //LOCALSTORAGE STATE
  const [routesStorage, setRoutesStorage] = useState([]);

  useEffect(() => {
    setRoutesStorage(JSON.parse(localStorage.getItem("route")) || []);
  }, [directionResponse, navigate]);

  //using useRef instead of useState becouse of problems with <Autocomplete> Component
  /**@type React.MutableRefObject<HTMLInputElement>*/
  const originRef = useRef();
  /**@type React.MutableRefObject<HTMLInputElement>*/
  const destinationRef = useRef();

  if (!isLoaded) {
    return <Spinner>Loading...</Spinner>;
  }

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      emptyInputAlert(setErrorMessage);
      return;
    }

    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    // eslint-disable-next-line no-undef
    try {
      const results = await directionService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      });
      if (originRef.current.value === destinationRef.current.value) {
        incorrectInputAlert(setErrorMessage);
        return;
      } else {
        setOrigin(originRef.current.value);
        setDestination(destinationRef.current.value);
        setDirectionResponse(results);
        setDistance(results.routes[0].legs[0].distance.value);
        setDuration(results.routes[0].legs[0].duration.value);
        setDurationTxt(results.routes[0].legs[0].duration.text);
      }
      if (results) {
        storeRoutes(originRef, destinationRef);
        setTimeout(() => {
          navigate("/map");
        }, 2000);
        clearTimeout();
      }
    } catch (error) {
      ErrorAlert(error.code, setErrorMessage);
    }
  };

  const clearRoute = () => {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    setDestination("");
    setOrigin("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  };

  return (
    <>
      <Container>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                routesStorage={routesStorage}
                errorMessage={errorMessage}
                originRef={originRef}
                destinationRef={destinationRef}
                calculateRoute={calculateRoute}
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
    </>
  );
}

export default App;
