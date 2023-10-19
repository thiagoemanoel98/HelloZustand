import React, { useMemo } from "react";

import { View, Text, ScrollView } from "react-native";
import { useCartStore } from "../../store/CartStore";

import * as S from "./styles";
import { CardItem } from "../CardItem/CardItem";

export function CartProducts() {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  const sumItemsPrice = useMemo(() => {
    const sum = items.reduce((acc, item) => acc + item.price, 0);

    return sum;
  }, [items]);

  return (
    <S.Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <S.Title>Produtos no seu carrinho:</S.Title>

        <S.Content>
          {items.map((item) => {
            return (
              <CardItem item={item} handleAction={removeFromCart} type="cart" />
            );
          })}
        </S.Content>
      </ScrollView>
      {sumItemsPrice > 0 && (
        <S.TotalPriceArea>
          <S.TextTotal>Total: $ {sumItemsPrice}</S.TextTotal>
        </S.TotalPriceArea>
      )}
    </S.Container>
  );
}
