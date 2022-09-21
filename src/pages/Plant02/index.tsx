import React from "react";
import { View } from "react-native";

import * as S from "./styles";

export const Plant02: React.FC = () => {
  return (
    <S.Container>
      <S.Icon/>
      <S.Title>Prontinho</S.Title>
      <S.Text>Agora vamos começar a cuidar da suas plantinhas com muito cuidado</S.Text>
      <S.Button>
        <S.ButtonText>Começar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

