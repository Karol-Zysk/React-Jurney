import React from "react";
import { Container } from "./HomePage.styles";
import {  FaTimes } from "react-icons/fa";
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
  originRef,
  destinationRef,
  calculateRoute,
  
  clearRoute,
  map,
}) => {
  return (
    <Container>
      <Box
        p={4}
        borderRadius="lg"
        mt={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="0"
      >
        <HStack spacing={4}>
          <Autocomplete>
            <Input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>
          <Autocomplete>
            <Input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>

          <ButtonGroup>
            <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        
      </Box>
    </Container>
  );
};

export default HomePage;
