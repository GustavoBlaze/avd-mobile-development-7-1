import styled, {css} from 'styled-components/native'
import { RFPercentage, RFValue }
  from 'react-native-responsive-fontsize'
import { FontAwesome5  } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: column;
`

export const WelcomeContainer = styled.View`
  padding: ${RFValue(32)}px;
  padding-top: ${RFValue(64)}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background};
  margin-bottom: ${RFValue(24)}px;
`;


export const WelcomeTextContainer = styled.View`
  flex-direction: column;
`;

export const WelcomeText = styled.Text`
  font-size: ${RFValue(28)}px;
  line-height: ${RFValue(32)}px;
`;

export const UsernameText = styled(WelcomeText)`
  font-weight: 400;
  font-weight: bold;
`;

export const Avatar = styled.Image`
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;
  border-radius: 28px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  padding: 0 ${RFValue(32)}px;
  font-weight: 500;
  margin-bottom: ${RFValue(24)}px;
`;


export const Option = styled.TouchableOpacity<{$isFirst: boolean}>`
  padding: ${RFValue(8)}px;
  background: ${({theme}) => theme.colors.secondary};
  border-radius: ${RFValue(4)}px;
  min-width: ${RFPercentage(14)}px;
  ${({$isFirst}) => !$isFirst && css`margin-left: ${RFValue(16)}px;`};
`;

export const OptionText = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  text-align: center;
`;

export const OptionList = styled.ScrollView.attrs(() => ({
  horizontal: true
}))`
  flex-grow: 0;
  width: 100%;
  padding-bottom: ${RFValue(16)}px;
`;
