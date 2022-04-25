import styled from "styled-components";
import { FaRegFilePdf } from "react-icons/fa";

export const Container = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TextWrapper = styled.div`
  margin-bottom: 25px;
  display: ${({ minimize }) => (minimize ? "block" : "none")};
`;

export const InfoContainer = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.25);
  padding: ${({ minimize }) => (minimize ? "15px" : "8px")};
  margin: 15px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.85);
  position: absolute;
  left: 0;
  top: 0;
  max-width: 30%;
  border-radius: 15px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ minimize }) => (minimize ? "15px" : "0px")};
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-right: ${({ minimize }) => (minimize ? "0" : "20px")};
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
  margin-left: 10px;
  cursor: pointer;
`;
