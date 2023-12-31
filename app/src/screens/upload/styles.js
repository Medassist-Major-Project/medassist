import styled from 'styled-components'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ToastAndroid } from 'react-native'

import { Colors, StatusBarHeight } from '../../shared/variables'

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: #fff;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`;

export const UpperContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
`;

export const PageTitle = styled.Text`
    font-size: 25px;
    color: ${Colors.primary};
    font-weight: 700;
`;

export const Settings = styled.TouchableOpacity`
    width: 37px;
    height: 37px;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${Colors.secondary};
`;

export const StyledImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const BottomContainer = styled.View`
    width: 100%;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${Colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 60px;

    ${(props) => props.upload == true && `
        background-color: ${Colors.secondary};
    `}
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 16px;

    ${(props) => props.upload == true && `
        color: ${Colors.primary};
    `}
`;

export const SelectImage = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledText = styled.Text`
    color: ${Colors.primary};
    font-size: 16px;
    font-weight: 500;
`;

export const TextInputContainer = styled.View`
    width: 100%;
`;

export const StyledInputLabel = styled.Text`
    color: ${Colors.primary};
    font-size: 15px;
    text-align: left;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${Colors.secondary};
    border: ${Colors.primary};
    padding: 15px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-top: 3px;
    margin-bottom: 10px;
    color: ${Colors.primary};
`;