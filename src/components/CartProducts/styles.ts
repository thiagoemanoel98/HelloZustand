import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;

  margin-top: 22px;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 22px;
  margin-left: 4px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TotalPriceArea = styled.View`
  position: absolute;
  bottom: 12px;
  right: 12px;

  padding: 10px;

  background-color: #5856d6;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const TextTotal = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;
