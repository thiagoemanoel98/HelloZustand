import React from "react";

import { View, Text, ScrollView } from "react-native";
import { useCartStore } from "../../store/CartStore";

import * as S from "./styles";
import { CardItem } from "../CardItem/CardItem";

export function AvailableProducts() {
  const [items, addToCard] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);

  return (
    <S.Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <S.Title>Produtos disponiveis</S.Title>

        <S.Content>
          {items.map((item) => {
            return <CardItem item={item} addToCard={addToCard} key={item.id} />;
          })}
        </S.Content>
      </ScrollView>
    </S.Container>
  );
}
