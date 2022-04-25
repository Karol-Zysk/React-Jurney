import { Container, Place, Route, Title } from "./HomePage.styles";
import { FaTimes } from "react-icons/fa";
import { Autocomplete } from "@react-google-maps/api";

import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Input,
} from "@chakra-ui/react";

const HomePage = ({
  incorrectInput,
  originRef,
  destinationRef,
  calculateRoute,
  clearRoute,
  emptyInput,
  notAvaliable,
  routesStorage,
}) => {
  // Filling inputs when History tab clicked
  const setHistoryHandler = (route) => {
    originRef.current.value = route.origin;
    destinationRef.current.value = route.destination;
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        p={4}
        borderRadius="lg"
        mt={4}
        bgColor="white"
        shadow="base"
        minW="auto"
        zIndex="0"
      >
        <HStack spacing={4} marginBottom="15px">
          <Autocomplete>
            <Input
              type="text"
              placeholder="Origin"
              _placeholder={{ color: "inherit" }}
              ref={originRef}
            />
          </Autocomplete>
          <Autocomplete>
            <Input
              type="text"
              _placeholder={{ color: "inherit" }}
              placeholder="Destination"
              ref={destinationRef}
            />
          </Autocomplete>
        </HStack>

        <ButtonGroup alignSelf="flex-end">
          <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
            Calculate Route
          </Button>
          <IconButton
            aria-label="center back"
            icon={<FaTimes />}
            onClick={clearRoute}
          />
        </ButtonGroup>
        {emptyInput && (
          <HStack>
            <h1>Direction Inputs Cannot Be Empty</h1>
          </HStack>
        )}
        {incorrectInput && (
          <HStack>
            <h1>Incorrect Input Value</h1>
          </HStack>
        )}
        {notAvaliable && (
          <HStack>
            <h1>Your Car Can't Fly or Swim</h1>
          </HStack>
        )}
      </Box>
      {routesStorage !== [] && (
        <Box
          display="flex"
          flexDirection="column"
          p={4}
          borderRadius="lg"
          mt={4}
          bgColor="white"
          shadow="base"
          minW="40%"
          zIndex="0"
        >
          <Title>
            <h1>History</h1>
          </Title>
          {routesStorage.slice(0, 5).map((route, index) => {
            return (
              <Route
                key={index}
                onClick={() => {
                  setHistoryHandler(route);
                }}
              >
                <Place>
                  <p>Origin: {route.origin}</p>
                </Place>
                <Place>
                  <p>Direction: {route.destination}</p>
                </Place>
              </Route>
            );
          })}
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
