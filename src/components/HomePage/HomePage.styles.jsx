import styled from "styled-components";
import { FaSearchLocation } from "react-icons/fa";

export const Container = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  padding: 15px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-left: 2px solid rgba(0, 176, 255, 0.5);
  order: 2;
  @media screen and (max-width: 768px) {
    width: 100%;
    border-left: none;
  }
`;

export const ErrorMsgBtnContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: crimson;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const ImgWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 5vh;
  align-items: center;
  order: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 25px 0px;
  }
`;

export const ImgWrapperTitle = styled.div`
  font-size: 40px;
  width: 100%;
  font-weight: bold;
  color: rgba(0, 176, 255, 0.7);
  margin-bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    margin-right: 15px;
    font-size: 32px;
    @media screen and (max-width: 630px) {
      font-size: 26px;
    }
  }
`;

export const SearchIco = styled(FaSearchLocation)`
  position: absolute;
  animation: orbit 2s linear 0s forwards infinite;
  animation-play-state: ${({ animation }) =>
    animation ? "running" : "paused"};
  display: ${({ animation }) => (animation ? "block" : "none")};
  font-size: 120px;
  font-weight: bold;
  color: rgba(0, 176, 255, 0.7);
  top: 40%;
  left: 40%;
  z-index: 10;
  transform: translate(-10%, -50%);
  @media screen and (max-width: 968px) {
    font-size: 96px;
  }
  @media screen and (max-width: 560px) {
    font-size: 72px;
  }

  @keyframes orbit {
    from {
      transform: rotate(0deg) translateX(70px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(70px) rotate(-360deg);
    }
  }
`;

export const Image = styled.img`
  width: 80%;
`;

export const SearchHistoryBox = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: stretch;
  width: 40%;
  box-shadow: 1px 1px 1px #00b0ff;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 15px;
  border-bottom: rgba(0, 176, 255, 0.5);
  color: rgba(0, 0, 0, 0.7);
  h1 {
    margin-right: 20px;
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
    margin-right: 20px;
    @media screen and (max-width: 468px) {
      font-size: 16px;
    }
  }
`;

export const Route = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  &:last-child {
    border-bottom: none;
    box-shadow: none;
    padding-bottom: 0px;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 176, 255, 0.1);
    transition: 200ms ease;
  }
`;

export const Place = styled.div`
  justify-self: center;
  width: 100%;
  align-items: stretch;
  padding-left: 5px;
  &:last-child {
    border-left: 1px solid #00b0ff;
  }

  p {
    font-size: 14px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
