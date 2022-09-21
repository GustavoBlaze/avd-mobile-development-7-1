import styled from 'styled-components/native'
import { RFPercentage, RFValue }
  from 'react-native-responsive-fontsize'
import { FontAwesome5  } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(21)}px;
  line-height: ${RFValue(24)}px;
  font-weight: bold;
  margin-bottom: ${RFValue(16)}px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  margin-bottom: ${RFValue(32)}px;
  text-align: center;
`;


export const Button = styled.TouchableOpacity`
  padding: ${RFValue(16)}px;
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  max-width: ${RFValue(200)}px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.shape};
  font-weight: bold;
  text-align: center;
`;

export const Icon = styled(FontAwesome5).attrs(({theme}) => ({
  size: RFValue(72),
  color: theme.colors.title,
  name: "smile-beam",
}))`
  margin-bottom: ${RFValue(32)}px;
`;