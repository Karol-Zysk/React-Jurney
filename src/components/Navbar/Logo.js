import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props} marginLeft="25px">
      <Text fontSize="lg" fontWeight="bold">
        ISENO Maps
      </Text>
    </Box>
  );
}
