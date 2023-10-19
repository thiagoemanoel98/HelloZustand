import React from "react";

import * as S from "./styles";
import { Item } from "../../store/CartStore";
import { TouchableOpacity } from "react-native";
import { Shadow } from "../../utils/shadow";

interface Props {
  item: Item;
  type: "cart" | "available";
  handleAction: (item: Item) => void;
}

export function CardItem({ item, handleAction, type }: Props) {
  return (
    <S.Container style={Shadow.applyShadow}>
      <S.SideLeft>
        <S.Image source={{ uri: item.imageURL }} />
        <S.NameArea>
          <S.ItemName>{item.name}</S.ItemName>
          <S.ItemPrice>{item.price}</S.ItemPrice>
        </S.NameArea>
      </S.SideLeft>

      <TouchableOpacity onPress={() => handleAction(item)}>
        {type === "available" ? (
          <S.CartIcon name="cart-plus" />
        ) : (
          <S.DeleteIcon name="delete" />
        )}
      </TouchableOpacity>
    </S.Container>
  );
}
