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
import { Button, IconButton } from "@chakra-ui/react";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";

const MapPage = ({
  map,
  setMap,
  directionResponse,
  distance,
  duration,
  origin,
  destination,
}) => {
  const [minimize, setMinimize] = useState(false);

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
        <TextWrapper minimize={minimize}>
          <p>
            Your journey from {origin} to {destination} will take you about{" "}
            {duration}.
          </p>
          <p> You will cover the distance of {distance} </p>

          <p> With the current gasoline price of ${parseInt(distance) / 100}</p>
          <p> and an average fuel consumption of 5l / 100km,</p>
          <p> the journey will cost you {parseInt(origin) * 5}..</p>
        </TextWrapper>
        <ExportWrapper minimize={minimize}>
          <Button colorScheme="red" onClick={() => map.panTo(center)}>
            Export to
            <PdfIcon />
          </Button>
        </ExportWrapper>
      </InfoContainer>
    </Container>
  );
};

export default MapPage;
