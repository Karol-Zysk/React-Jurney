import Navbar from "./components/Navbar/Navbar";
import MapPage from "./components/MapPage/MapPage";
import HomePage from "./components/HomePage/HomePage";
import { Container } from "./App.style";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { MapRouteProvider } from "./context/context";

export const center = { lat: 48, lng: 3 };

function App() {
 

  return (
    <MapRouteProvider >
      <Container>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                
              />
            }
          />
          <Route
            path="/map"
            element={
              <MapPage
                
                
                
               
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </MapRouteProvider>
  );
}

export default App;
