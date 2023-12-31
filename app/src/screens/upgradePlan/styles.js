import styled from 'styled-components'
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native'

import { Colors, StatusBarHeight } from '../../shared/variables'

export const StyledContainer = styled.ScrollView`
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

export const StyledText = styled.Text`
    color: ${Colors.primary};
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
`;

export const PlanContainer = styled.View`
    background-color: ${Colors.secondary};
    margin-bottom: 15px;
    padding: 15px;
    border-radius: 5px;

    ${(props) => props.monthly == true && `
        margin-bottom: 0px;
    `}
`;

export const PlanTextContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
`;

export const PlanPrice = styled.Text`
    font-size: 25px;
    color: ${Colors.primary};
    font-weight: 700;
`;

export const PlanPriceSubText = styled.Text`
    font-size: 18px;
    color: ${Colors.text};
    font-weight: 500;
`;

export const YearlyPrice = styled.Text`
    color: ${Colors.text};
    font-size: 15px;
    font-weight: 500;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${Colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 16px;
`;

export const BilledText = styled.Text`
    color: ${Colors.text};
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const StyledFeature = styled.View`
    width: 100%;
    height: 20px;
    padding-left: 5px;
    margin-bottom: 10px;
`;

export const FeatureText = styled.Text`
    color: ${Colors.text};
    font-size: 15px; 
    font-weight: 500;
`;

export const MostPopularContainer = styled.View`
    padding: 5px;
    background-color: ${Colors.primary};
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    height: 35px;
    margin-bottom: 10px;
`;

export const MostPopularText = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: 500;
`;