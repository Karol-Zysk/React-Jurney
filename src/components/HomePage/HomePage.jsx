import {
  Container,
  ErrorMsgBtnContainer,
  ErrorText,
  Image,
  Left,
  Place,
  Right,
  RightTitle,
  Route,
  SearchIco,
  Title,
} from "./HomePage.styles";
import { FaTimes, FaExclamation, FaSearchLocation } from "react-icons/fa";
import { Autocomplete } from "@react-google-maps/api";
import place from "../../img/place.svg";
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
  animation,
}) => {
  // Filling inputs when History tab clicked
  const setHistoryHandler = (route) => {
    originRef.current.value = route.origin;
    destinationRef.current.value = route.destination;
  };

  return (
    <Container>
      <Left>
        <Box
          display="flex"
          flexDirection="column"
          p={4}
          borderRadius="lg"
          mt={4}
          bgColor="white"
          shadow="base"
          boxShadow="1px 2px 4px #00B0FF"
          minW="auto"
          maxW="90%"
          zIndex="0"
        >
          <HStack spacing={4} marginBottom="15px">
            <Autocomplete>
              <Input
                boxShadow="1px 1px 1px #00B0FF"
                type="text"
                placeholder="Origin"
                _placeholder={{ color: "inherit" }}
                ref={originRef}
              />
            </Autocomplete>
            <Autocomplete>
              <Input
                type="text"
                boxShadow="1px 1px 1px #00B0FF"
                _placeholder={{ color: "inherit" }}
                placeholder="Destination"
                ref={destinationRef}
              />
            </Autocomplete>
          </HStack>
          <ErrorMsgBtnContainer>
            {emptyInput && (
              <HStack>
                <ErrorText>
                  Direction Inputs Cannot Be Empty
                  <FaExclamation />
                </ErrorText>
              </HStack>
            )}
            {incorrectInput && (
              <HStack>
                <ErrorText>
                  Incorrect Input Value
                  <FaExclamation />
                </ErrorText>
              </HStack>
            )}
            {notAvaliable && (
              <HStack>
                <ErrorText>
                  Your Car Can't Fly or Swim
                  <FaExclamation />
                </ErrorText>
              </HStack>
            )}
            <div></div>
            <ButtonGroup alignSelf="flex-end" justifySelf="flex-end">
              <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
                Calculate Route
              </Button>
              <IconButton
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
          </ErrorMsgBtnContainer>
        </Box>
        {routesStorage.length !== 0 && (
          <Box
            display="flex"
            flexDirection="column"
            p={4}
            borderRadius="lg"
            mt={4}
            bgColor="white"
            shadow="base"
            minW="auto"
            maxW="90%"
            zIndex="0"
            boxShadow="2px 2px 3px #00B0FF"
          >
            <Title>
              <h1>Search History</h1>
              <FaSearchLocation />
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
      </Left>
      <Right>
        <RightTitle>
          <p>Find Your Path</p> <SearchIco animationState={animation} />
        </RightTitle>
        <Image src={place} />
      </Right>
    </Container>
  );
};

export default HomePage;
