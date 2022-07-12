import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./navigation/StackNavigator";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs() // Ignore log notification by message

export default function App() {
  return (
    <TailwindProvider>
        <NavigationContainer>
          <AuthProvider>
            <StackNavigator/>
          </AuthProvider>
        </NavigationContainer>
    </TailwindProvider>
  );
}
