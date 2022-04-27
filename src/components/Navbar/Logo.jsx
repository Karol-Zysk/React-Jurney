import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props} marginLeft="25px">
      <Text
        fontSize={{ base: "1.5rem", md: "1.7rem", lg: "2rem" }}
        fontWeight="bold"
      >
        Maps
      </Text>
    </Box>
  );
}
