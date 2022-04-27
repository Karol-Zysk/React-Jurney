import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 15px;
  border-bottom: rgba(0, 176, 255, 0.5);
  color: rgba(0, 0, 0, 0.7);
  h1 {
    margin-right: 20px;
    color: rgba(255, 0, 0, 0.7);
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    margin-right: 20px;
    @media screen and (max-width: 468px) {
      font-size: 16px;
    }
  }
`;

export const HomeLink = styled(Link)`
  text-decoration: underline;
`;
