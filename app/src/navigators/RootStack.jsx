import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { connect } from "react-redux"

import LoginScreen from "../screens/login"
import SignUpScreen from "../screens/signup"
import AllPrescriptionsScreen from "../screens/allPrescriptions"
import ForgotPasswordScreen from "../screens/forgotPassword"
import AllResultsScreen from "../screens/allResults"
import OnboardingScreen from "../screens/onboarding"
import SettingsScreen from "../screens/settings"
import ResetPasswordScreen from "../screens/resetPassword"
import UploadScreen from "../screens/upload"
import ResultScreen from "../screens/result"
import PrescriptionScreen from "../screens/prescription"
import VerifiedResultScreen from "../screens/verifiedResult"
import UnverifiedResultScreen from "../screens/unverifiedResult"
import MedicalHistoryScreen from "../screens/medicalHistory"
import UpdatedPrescriptionScreen from '../screens/updatedPrescription'
import ViewMedicalHistoryScreen from '../screens/viewMedicalHistory'
import UpgradePlanScreen from '../screens/upgradePlan'
import VerifyMedicalProfessionalScreen from '../screens/verifyMedicalProfessional'
import ChatbotScreen from '../screens/chatbot'
import PaymentScreen from '../screens/payment'
import NoInternetScreen from "../screens/noInternet"

const Stack = createNativeStackNavigator()

const RootStack = ({ onLayoutRootView, isAppFirstLaunched, isConnected }) => {

    return (
        isAppFirstLaunched != null && (
            <NavigationContainer
                independent
                initialRouteName="Onboarding"
                onReady={onLayoutRootView}
            >
                {!isConnected ? (
                    <Stack.Screen
                        name="NoInternet"
                        component={NoInternetScreen}
                    />
                ) : (
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        {isAppFirstLaunched && (
                            <Stack.Screen
                                name="Onboarding"
                                component={OnboardingScreen}
                            />
                        )}
                        <Stack.Screen
                            name="SignUp"
                            component={SignUpScreen}
                        />
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                        />
                        <Stack.Screen
                            name="VerifyMedicalProfessional"
                            component={VerifyMedicalProfessionalScreen}
                        />
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPasswordScreen}
                        />
                        <Stack.Screen
                            name="ResetPassword"
                            component={ResetPasswordScreen}
                        />
                        <Stack.Screen
                            name="AllPrescriptions"
                            component={AllPrescriptionsScreen}
                        />
                        <Stack.Screen
                            name="AllResults"
                            component={AllResultsScreen}
                        />
                        <Stack.Screen
                            name="Settings"
                            component={SettingsScreen}
                        />
                        <Stack.Screen
                            name="Upload"
                            component={UploadScreen}
                        />
                        <Stack.Screen
                            name="Result"
                            component={ResultScreen}
                        />
                        <Stack.Screen
                            name="Prescription"
                            component={PrescriptionScreen}
                        />
                        <Stack.Screen
                            name="VerifiedResult"
                            component={VerifiedResultScreen}
                        />
                        <Stack.Screen
                            name="UnverifiedResult"
                            component={UnverifiedResultScreen}
                        />
                        <Stack.Screen
                            name="MedicalHistory"
                            component={MedicalHistoryScreen}
                        />
                        <Stack.Screen
                            name="UpdatedPrescription"
                            component={UpdatedPrescriptionScreen}
                        />
                        <Stack.Screen
                            name="ViewMedicalHistory"
                            component={ViewMedicalHistoryScreen}
                        />
                        <Stack.Screen
                            name="UpgradePlan"
                            component={UpgradePlanScreen}
                        />
                        <Stack.Screen
                            name="Chatbot"
                            component={ChatbotScreen}
                        />
                        <Stack.Screen
                            name="Payment"
                            component={PaymentScreen}
                        />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        )
    )
}

const mapState = (state) => ({
    auth: state.auth.isAuth,
})

const connector = connect(mapState)

export default connector(RootStack)