import styled from "styled-components";

export const Container = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchHistoryBox = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: stretch;
  width: 40%;
  border: 1px solid grey;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Route = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: none;
    box-shadow: none;
    padding-bottom: 0px;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(110, 110, 110, 0.1);
    transition: 200ms ease;
  }
`;

export const Place = styled.div`
  justify-self: center;
  width: 100%;
  align-items: stretch;
  padding-left: 5px;
  &:last-child {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
