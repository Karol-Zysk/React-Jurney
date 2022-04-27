import React from "react";
import { Container, HomeLink, Title } from "./NotFound.styles";

const NotFound = () => (
  <Container>
    <Title>
      <h1>404 - Not Found!</h1>
      <HomeLink to="/">Go Home</HomeLink>
    </Title>
  </Container>
);

export default NotFound;
