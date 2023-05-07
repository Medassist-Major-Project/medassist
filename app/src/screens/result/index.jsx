import { StatusBar } from 'expo-status-bar'

import {
    StyledContainer,
    InnerContainer,
    UpperContainer,
    IconsContainer,
    PageTitle,
    Icon,
    SelectImage,
    BottomContainer,
    StyledButton,
    ButtonText,
    PrescriptionImage,
    TableContainer,
    ScrollableContainer
} from './styles'

import SettingsImage from '../../images/icons/settings.svg'
import { Table, Row, Rows } from 'react-native-table-component'
import { Colors } from '../../shared/variables'

const ResultScreen = ({ navigation }) => {
    const tableHead = ['Drug name', 'Symptoms']
    const tableData = [
        ['Microcef CV 200 mg', 'Throat infections'],
        ['Ventryl D', 'Sore throat'],
        ['Pantotav DSR', 'Acidity'],
        ['BENZ Pearls', 'Dry cough'],
        ['Montak LC', 'Runny nose, watery eyes, sneezing']
    ]

    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <UpperContainer>
                    <PageTitle>
                        Result
                    </PageTitle>
                    <IconsContainer>
                        <Icon settings={true} onPress={() => navigation.navigate('Settings')}>
                            <SettingsImage width="30px" height="30px" fill="#0F2E53" />
                        </Icon>
                    </IconsContainer>
                </UpperContainer>
                <ScrollableContainer>
                    <SelectImage>
                        <PrescriptionImage resizeMode="cover" source={require('../../images/test/prescription.jpg')} />
                    </SelectImage>
                    <TableContainer>
                        <Table borderStyle={{ borderWidth: 1, borderColor: `${Colors.primary}` }}>
                            <Row data={tableHead} style={{
                                height: 50, backgroundColor: `${Colors.tertiary}`
                            }} textStyle={{ margin: 6, fontWeight: 'bold' }} />
                            <Rows data={tableData} textStyle={{ margin: 6 }} />
                        </Table>
                    </TableContainer>
                </ScrollableContainer>
                <BottomContainer>
                    <StyledButton onPress={() => navigation.navigate('AllResults')}>
                        <ButtonText>Continue</ButtonText>
                    </StyledButton>
                </BottomContainer>
            </InnerContainer>
        </StyledContainer>
    )
}

export default ResultScreen