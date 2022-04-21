import React from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { Container } from "./MapPage.styles";
import { center } from "../../App";
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";

const MapPage = ({
  map,
  setMap,
  directionResponse,
  distance,
  duration,
  origin,
  destination,
}) => {
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
      <Flex
        background="rgba(255,255,255,0.7)"
        spacing={4}
        mt={4}
        position="absolute"
        left={0}
        top={0}
        flexDirection="column"
      >
        <h2>
          Your journey from {origin} to {destination} will take you about{" "}
          {duration}.
        </h2>
        <h2> You will cover the distance of {distance} </h2>

        <h2> With the current gasoline price of ${parseInt(distance) / 100}</h2>
        <h2> and an average fuel consumption of 5l / 100km,</h2>
        <h2> the journey will cost you {parseInt(origin) * 5}..</h2>
        <IconButton
          aria-label="center back"
          icon={<FaLocationArrow />}
          isRound
          onClick={() => map.panTo(center)}
        />
      </Flex>
    </Container>
  );
};

export default MapPage;
