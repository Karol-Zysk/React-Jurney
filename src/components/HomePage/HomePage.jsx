import { useState } from "react";
import {
  Container,
  ErrorMsgBtnContainer,
  ErrorText,
  Image,
  ContentWrapper,
  Place,
  ImgWrapper,
  ImgWrapperTitle,
  Route,
  SearchIco,
  Title,
} from "./HomePage.styles";
import { FaTimes, FaSearchLocation, FaMapMarkedAlt } from "react-icons/fa";
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
  originRef,
  destinationRef,
  calculateRoute,
  clearRoute,
  errorMessage,
  routesStorage,
}) => {
  const [animation, setAnimation] = useState(false);

  // Filling inputs when History tab clicked
  const setHistoryHandler = (route) => {
    originRef.current.value = route.origin;
    destinationRef.current.value = route.destination;
  };
  const animationHandler = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 3000);
    clearTimeout();
  };

  return (
    <Container>
      <ContentWrapper>
        <Box
          display="flex"
          flexDirection="column"
          p={4}
          borderRadius="lg"
          mt={4}
          bgColor="white"
          padding="15px"
          shadow="base"
          boxShadow="2px 2px 3px #00B0FF"
          width={{ base: "90%", md: "80%" }}
          zIndex="0"
        >
          <Title>
            <h1>Set The Route</h1>
            <FaMapMarkedAlt />
          </Title>
          <HStack spacing={4} marginBottom="15px">
            <Autocomplete>
              <Input
                id="origin"
                boxShadow="1px 1px 1px #00B0FF"
                type="text"
                size="md"
                placeholder="Origin"
                _placeholder={{ color: "inherit" }}
                ref={originRef}
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                height={{ base: "32px", md: "28px", lg: "40px" }}
              ></Input>
            </Autocomplete>
            <Autocomplete>
              <Input
                id="destination"
                type="text"
                boxShadow="1px 1px 1px #00B0FF"
                _placeholder={{ color: "inherit" }}
                placeholder="Destination"
                ref={destinationRef}
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                height={{ base: "32px", md: "28px", lg: "40px" }}
              />
            </Autocomplete>
          </HStack>
          <ErrorMsgBtnContainer>
            <HStack>
              {errorMessage !== "" && <ErrorText>{errorMessage}</ErrorText>}
            </HStack>

            <ButtonGroup alignSelf="flex-end" justifySelf="flex-end">
              <div onClick={animationHandler}>
                <Button
                  colorScheme="pink"
                  type="submit"
                  onClick={calculateRoute}
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                  height={{ base: "32px", md: "28px", lg: "40px" }}
                >
                  Calculate Route
                </Button>
              </div>
              <IconButton
                size="sm"
                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                height={{ base: "32px", md: "28px", lg: "40px" }}
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
            width={{ base: "90%", md: "80%" }}
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
      </ContentWrapper>
      <ImgWrapper>
        <SearchIco animation={animation ? 1 : 0} />
        <ImgWrapperTitle>
          <p>Find Your Path</p>
          <FaSearchLocation />
        </ImgWrapperTitle>
        <Image src={place} />
      </ImgWrapper>
    </Container>
  );
};

export default HomePage;
