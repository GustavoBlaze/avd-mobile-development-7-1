import React from "react";
import { View, StyleSheet } from "react-native";

import * as S from "./styles";

export const Plant03: React.FC = () => {
  const places = ["Sala", "Quarto", "Cozinha", "Banheiro"];

  return (
    <S.Container>
      <S.WelcomeContainer>
        <S.WelcomeTextContainer>
          <S.WelcomeText>Ola,</S.WelcomeText>
          <S.UsernameText>Luiz</S.UsernameText>
        </S.WelcomeTextContainer>

        <S.Avatar
          source={{
            uri: "https://github.com/GustavoBlaze.png",
          }}
        />
      </S.WelcomeContainer>

      <S.Text>Em qual ambiente{`\n`}você quer colocar sua planta?</S.Text>

      <S.OptionList contentContainerStyle={styles.listContentContainer}>
        {places.map((place, index) => (
          <S.Option $isFirst={index === 0}>
            <S.OptionText>{place}</S.OptionText>
          </S.Option>
        ))}
      </S.OptionList>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  listContentContainer: {
    paddingHorizontal: 32,
  }
})