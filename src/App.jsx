import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import MapPage from "./components/MapPage/MapPage";
import HomePage from "./components/HomePage/HomePage";
import { Container } from "./App.style";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { MapRouteProvider } from "./context/context";
import { useJsApiLoader } from "@react-google-maps/api";
import { Spinner } from "@chakra-ui/react";

export const center = { lat: 53.38, lng: 21.34 };


function App() {

//PERFORMANCE ERROR PREVENTION
const [libraries] = useState(["places"]);
//CONNECTION WITH GOOGLE MAPS API
const { isLoaded } = useJsApiLoader({
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  libraries,
});

const [map, setMap] = useState(/** @type google.maps.Map*/ (null));

if (!isLoaded) {
  return <Spinner>Loading...</Spinner>;
}


  return (
    <MapRouteProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage map={map} setMap={setMap} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </MapRouteProvider>
  );
}

export default App;
