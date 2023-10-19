import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
  width: 90%;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  background-color: white;

  justify-content: space-between;
`;

export const SideLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NameArea = styled.View``;

export const ItemName = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const ItemPrice = styled.Text`
  font-size: 14px;
  font-weight: 400px;
  color: #5856d6;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin-right: 12px;
`;

export const CartIcon = styled(FontAwesome5)`
  font-size: 22px;
  color: #5856d6;
`;
