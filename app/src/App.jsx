import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/login";
import SignUpScreen from "./screens/signup";
import AllPrescriptionsScreen from "./screens/allPrescriptions";
import ForgotPasswordScreen from "./screens/forgotPassword";
import AllResultsScreen from "./screens/allResults";
import OnboardingScreen from "./screens/onboarding";
import SettingsScreen from "./screens/settings";
import ResetPasswordScreen from "./screens/resetPassword";
import UploadScreen from "./screens/upload";
import ResultScreen from "./screens/result";
import SideEffectsScreen from "./screens/sideEffects";
import PrescriptionScreen from "./screens/prescription";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllPrescriptions"
          component={AllPrescriptionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllResults"
          component={AllResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Upload"
          component={UploadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SideEffects"
          component={SideEffectsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Prescription"
          component={PrescriptionScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
