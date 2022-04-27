import { useState, useContext } from "react";
import { MapRouteContext } from "../../context/context";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import {
  Container,
  ExportWrapper,
  InfoContainer,
  PdfIcon,
  TextWrapper,
  Title,
  TitleWrapper,
} from "./MapPage.styles";
import { center } from "../../App";
import {
  Button,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";

import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { jsPDF } from "jspdf";
import img from "../../img/map.png";
import { cost, howLong } from "../../utils/utils";
import { createPdf } from "../../utils/createPdf";

const MapPage = () => {
  let {
    origin,
    destination,
    distance,
    durationtxt,
    directionResponse,
  } = useContext(MapRouteContext);

  const [minimize, setMinimize] = useState(false);
  const [consumption, setConsumption] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [map, setMap] = useState(/** @type google.maps.GoogleMap*/ (null));

  

  const distanceKM = distance / 1000;

  let howManyDays = howLong(distance);
  let jurneyPrice = cost(fuelPrice, consumption, distance);
  let createPdfHandler = () => {
    createPdf(
      jsPDF,
      img,
      origin,
      destination,
      distanceKM,
      howManyDays,
      fuelPrice,
      consumption,
      jurneyPrice
    );
  };

  return (
    <Container>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center}></Marker>
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
      </GoogleMap>
      {directionResponse && (
        <InfoContainer minimize={minimize}>
          <TitleWrapper minimize={minimize}>
            <Title minimize={minimize}>Jurney Info</Title>
            <IconButton
              aria-label="center back"
              icon={minimize ? <FiMinimize2 /> : <FiMaximize2 />}
              border="1px solid grey"
              onClick={() => setMinimize(!minimize)}
            />
          </TitleWrapper>
          {minimize && (
            <HStack spacing={4} marginBottom="25px">
              <Stack marginBottom="0px">
                <FormLabel marginBottom="0px">Fuel Price</FormLabel>

                <Input
                  id="fuelPrice"
                  type="number"
                  size="sm"
                  borderColor="rgba(0,0,255,0.5)"
                  _placeholder={{ color: "inherit" }}
                  borderRadius="8px"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                  placeholder="$"
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                  height={{ base: "32px", md: "28px", lg: "34px" }}
                />
              </Stack>
              <Stack marginBottom="0px">
                <FormLabel marginBottom="0px">Consumption</FormLabel>
                <Input
                  id="consumption"
                  type="number"
                  borderColor="rgba(0,0,255,0.5)"
                  borderRadius="8px"
                  _placeholder={{ color: "inherit" }}
                  size="md"
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                  height={{ base: "32px", md: "28px", lg: "34px" }}
                  value={consumption}
                  onChange={(e) => setConsumption(e.target.value)}
                  placeholder="Litre / 100km"
                  marginInlineStart="0"
                />
              </Stack>
            </HStack>
          )}
          <TextWrapper minimize={minimize}>
            <p>From: {origin}</p>
            <p>To: {destination}</p>
            <p>Distance: {Math.round(distanceKM)}km</p>
            <p>Duration: {durationtxt}</p>
            <p>
              Assuming you cover 800km a day, the journey will take:{" "}
              {howManyDays} {howManyDays <= 1 ? "day" : "days"}
            </p>

            {fuelPrice !== "" && consumption !== "" ? (
              <>
                <p>Fuel Price: {fuelPrice}$ / litre</p>
                <p>Average fuel consumption: {consumption}l / 100km</p>
                <p>Jurney will cost you about: {jurneyPrice}$</p>
              </>
            ) : null}
          </TextWrapper>
          <ExportWrapper minimize={minimize}>
            <Button colorScheme="red" onClick={createPdfHandler}>
              Export to
              <PdfIcon />
            </Button>
          </ExportWrapper>
        </InfoContainer>
      )}
    </Container>
  );
};

export default MapPage;
