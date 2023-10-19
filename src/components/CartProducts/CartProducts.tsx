import React from "react";

import { View, Text, ScrollView } from "react-native";
import { useCartStore } from "../../store/CartStore";

import * as S from "./styles";
import { CardItem } from "../CardItem/CardItem";

export function CartProducts() {
  const items = useCartStore((state) => state.cart);

  return (
    <S.Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <S.Title>Produtos no seu carrinho:</S.Title>

        <S.Content>
          {items.map((item) => {
            return <CardItem item={item} />;
          })}
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}
