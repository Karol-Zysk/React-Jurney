import { useRef, useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { useJsApiLoader } from "@react-google-maps/api";
import Navbar from "./components/Navbar/Navbar";
import MapPage from "./components/MapPage/MapPage";
import HomePage from "./components/HomePage/HomePage";
import { Container } from "./App.style";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { getLocalStorage, storeRoutes } from "./utils/storage";
// import {MapRouteContext} from './context/context'

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

  const incorrectInputAlert = () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      setErrorMessage("No Empty Inputs !");
      return;
    } else if (originRef.current.value === destinationRef.current.value) {
      setErrorMessage("Try diffrent directions");
      return;
    }
    return;
  };

  const ErrorAlert = (error) => {
    if (error === "NOT_FOUND") {
      setErrorMessage("Incorrect Value !");
    } else if (error === "ZERO_RESULTS") {
      setErrorMessage("Your Car can't fly!");
    } else if (error === "MAX_ROUTE_LENGTH_EXCEEDED") {
      setErrorMessage("Too Long Jurney !");
    } else {
      setErrorMessage("Something Went wrong !");
    }
  };

  const calculateRoute = async () => {
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
      incorrectInputAlert();
      setOrigin(originRef.current.value);
      setDestination(destinationRef.current.value);
      setDirectionResponse(results);
      setDistance(results.routes[0].legs[0].distance.value);
      setDuration(results.routes[0].legs[0].duration.value);
      setDurationTxt(results.routes[0].legs[0].duration.text);

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
