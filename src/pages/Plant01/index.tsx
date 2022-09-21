import React from "react";

import * as S from "./styles";

export const Plant01: React.FC = () => {
  return (
    <S.Container>
      <S.Icon/>
      <S.Title>Como podemos chamar você?</S.Title>
      <S.Input placeholder="Digite um nome"></S.Input>
      <S.Button>
        <S.ButtonText>Confirmar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

