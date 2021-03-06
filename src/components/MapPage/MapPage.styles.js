import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

export const Container = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: ${({ minimize }) => (minimize ? "block" : "none")};
`;

export const InfoContainer = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.25);
  padding: ${({ minimize }) => (minimize ? "15px" : "8px")};
  margin: 1rem;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.95);
  position: absolute;
  left: 0;
  top: 0;
  max-width: 30%;
  font-weight: 300;
  border-radius: 1rem;
  @media screen and (max-width: 1024px) {
    max-width: 45%;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 768px) {
    max-width: 70%;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 480px) {
    max-width: 90%;
    font-size: 0.8rem;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ minimize }) => (minimize ? "15px" : "0px")};
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: ${({ minimize }) => (minimize ? "0" : "20px")};
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ExportWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
  display: ${({ minimize }) => (minimize ? "flex" : "none")};

  p {
    display: flex;
    align-items: center;
  }
`;
export const PdfIcon = styled(FaRegFilePdf)`
  display: inline-block;
  transform: scale(1.3);
  margin-left: 0.6rem;
  cursor: pointer;
`;
