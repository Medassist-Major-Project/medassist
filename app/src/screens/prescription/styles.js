import styled from 'styled-components'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'

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

export const IconsContainer = styled.View`
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: row;
`;

export const Icon = styled.TouchableOpacity`
    width: 37px;
    height: 37px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${Colors.primary};

    ${(props) => props.settings == true && `
        background-color: ${Colors.secondary};
        margin-right: 0px;
    `}
`;

export const TableContainer = styled.View`
    width: 100%;
    background-color: white;
    margin-top: 20px;
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

    ${(props) => props.submit == true && `
        background-color: ${Colors.secondary};
    `}
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 16px;

    ${(props) => props.submit == true && `
        color: ${Colors.primary};
    `}
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${Colors.primary};
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const SuggestionsContainer = styled.View`
    margin-top: 20px;
`;

export const ScrollableContainer = styled.ScrollView`
    width: 100%;
`;

export const SuggestionContainer = styled.View`
    margin-bottom: 10px;
`;

export const StyledText = styled.Text`
    color: ${Colors.primary};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
`;

export const InputContainer = styled.View`
    width: 100%;
    margin-top: 10px;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${Colors.secondary};
    border: ${Colors.primary};
    padding: 5px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 5px;
    font-size: 16px;
    height: 40px;
    margin-top: 3px;
    margin-bottom: 10px;
    color: ${Colors.primary};
`;

export const TextInputContainer = styled.View`
    width: 100%;
`;

export const StyledLabel = styled.Text`
    color: ${Colors.primary};
    font-size: 15px;
    text-align: left;
`;

export const BottomContainer = styled.View`
    width: 100%;
`;

export const DrugName = styled.Text`
    font-size: 15px; 
    font-weight: bold;
`;

export const SelectImage = styled.View`
    display: flex;
    align-items: center;
    justify-content: center; 
    border: 1px solid ${Colors.primary};
    border-radius: 5px;
`;

export const PrescriptionImage = styled.Image`
    width: 100%;
    height: 500px;
`;

export const StyledInputLabel = styled.Text`
    color: ${Colors.primary};
    font-size: 13px;
    text-align: left;
`;