import styled from "styled-components";
import { FaSearchLocation } from "react-icons/fa";

export const Container = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  padding: 2rem 0;
  background: rgba(0, 176, 255, 0.04);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 88vh;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-left: 3px solid rgba(0, 176, 255, 0.5);
  order: 2;
  @media screen and (max-width: 768px) {
    width: 100%;
    border-left: none;
  }
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2%;
  margin-bottom: 1rem;
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
    font-size: 0.7rem;
  }
`;

export const ImgWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 5vh;
  align-items: center;
  justify-content: center;
  order: 1;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgWrapperTitle = styled.div`
  font-size: 3rem;
  width: 100%;
  font-weight: bold;
  color: rgba(0, 176, 255, 0.7);
  margin-bottom: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    margin-right: 1rem;
    font-size: 2rem;
    @media screen and (max-width: 630px) {
      font-size: 1.6rem;
    }
  }
`;

export const SearchIco = styled(FaSearchLocation)`
  position: absolute;
  animation: orbit 3s linear 0s forwards infinite;
  animation-play-state: running;
  display: block;
  font-size: 7rem;
  font-weight: bold;
  color: rgba(0, 176, 255, 0.7);
  top: 40%;
  left: 40%;
  z-index: 10;
  transform: translate(-10%, -50%);
  @media screen and (max-width: 968px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 560px) {
    font-size: 4rem;
  }

  @keyframes orbit {
    from {
      transform: rotate(0deg) translateX(40px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(40px) rotate(-360deg);
    }
  }
`;

export const Image = styled.img`
  width: 80%;
`;

export const SearchHistoryBox = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: stretch;
  width: 40%;
  box-shadow: 1px 1px 1px #00b0ff;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  border-bottom: rgba(0, 176, 255, 0.5);
  color: rgba(0, 0, 0, 0.7);
  h1 {
    margin-right: 1.2rem;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
    margin-right: 20px;
    @media screen and (max-width: 468px) {
      font-size: 1rem;
    }
  }
`;

export const Route = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
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
  padding-left: 1rem;
  &:last-child {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 0.9rem;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;
