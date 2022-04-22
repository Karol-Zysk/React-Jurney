import { useRef, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useJsApiLoader } from "@react-google-maps/api";
import Navbar from "./components/Navbar/Navbar";
import MapPage from "./components/MapPage/MapPage";
import HomePage from "./components/HomePage/HomePage";
import { Container } from "./App.style";

export const center = { lat: 48, lng: 3 };

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.GoogleMap*/ (null));
  const [directionResponse, setDirectionResponse] = useState(null);
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  /**@type React.MutableRefObject<HTMLInputElement>*/
  const originRef = useRef();
  /**@type React.MutableRefObject<HTMLInputElement>*/
  const destinationRef = useRef();

  if (!isLoaded) {
    return <Spinner>Loading...</Spinner>;
  }

  const calculateRoute = async () => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setOrigin(originRef.current.value);
    setDestination(destinationRef.current.value);
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
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
    <Container>
      <Navbar />

      <HomePage
        originRef={originRef}
        destinationRef={destinationRef}
        calculateRoute={calculateRoute}
        clearRoute={clearRoute}
        map={map}
      />
      <MapPage
        map={map}
        setMap={setMap}
        distance={distance}
        duration={duration}
        directionResponse={directionResponse}
        origin={origin}
        destination={destination}
      />
    </Container>
  );
}

export default App;
