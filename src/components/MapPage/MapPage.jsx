import { useState } from "react";
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
import { Button, HStack, IconButton, Input } from "@chakra-ui/react";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { jsPDF } from "jspdf";
import img from "../../img/map.png";

const MapPage = ({
  setMap,
  directionResponse,
  distance,
  origin,
  destination,
  durationtxt,
}) => {
  const [minimize, setMinimize] = useState(false);
  const [consumption, setConsumption] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");

  const cost = ((fuelPrice * consumption) / 100) * parseInt(distance / 1000);

  const createPdfHandler = () => {
    const doc = new jsPDF("landscape", "px", "a5", "false");
    doc.addImage(img, "PNG", 220, 0, 230, 250);
    doc.setFont("Helvertica");
    doc.setFontSize(28);
    doc.text(`Jurney Info`, 25, 40);
    doc.setFontSize(14);
    doc.text(`From: ${origin}`, 25, 75);
    doc.text(`To: ${destination}`, 25, 95);
    doc.text(`Distance: ${Math.round(distanceKM)}km`, 25, 115);
    doc.text(`Assuming you cover 800km a day,`, 25, 135);
    doc.text(
      `the journey will take: ${Math.ceil(distance / 800000)} days`,
      25,
      155
    );
    if (fuelPrice !== "" && consumption !== "") {
      doc.text(`Fuel Price: ${fuelPrice}$ / litre`, 25, 175);
      doc.text(`Average fuel consumption: ${consumption}l / 100km`, 25, 195);
      doc.text(`Jurney will cost you about: ${Math.round(cost)} $`, 25, 215);
    }

    doc.output("dataurlnewwindow");
  };

  const distanceKM = distance / 1000;

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
              <Input
                type="number"
                size="sm"
                borderColor="rgba(0,0,255,0.5)"
                _placeholder={{ color: "inherit" }}
                borderRadius="8px"
                value={fuelPrice}
                onChange={(e) => setFuelPrice(e.target.value)}
                placeholder="Fuel Price"
              />

              <Input
                type="number"
                borderColor="rgba(0,0,255,0.5)"
                borderRadius="8px"
                _placeholder={{ color: "inherit" }}
                size="sm"
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
                placeholder="Consumption / 100km"
                marginInlineStart="0"
              />
            </HStack>
          )}
          <TextWrapper minimize={minimize}>
            <p>From: {origin}</p>
            <p>To: {destination}</p>
            <p>Distance: {Math.round(distanceKM)}km</p>
            <p>Duration: {durationtxt}</p>
            <p>
              Assuming you cover 800km a day, the journey will take:{" "}
              {Math.ceil(distance / 800000)} days{" "}
            </p>

            {fuelPrice !== "" && consumption !== "" ? (
              <>
                <p>Fuel Price: {fuelPrice}$ / litre</p>
                <p>Average fuel consumption: {consumption}l / 100km</p>
                <p>Jurney will cost you about: {Math.round(cost)}$</p>
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
