import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import ModulesPage from './pages/ModulesPage'
import { RootStackParamList } from './utils/type'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Quiz' component={Quiz} />
        <Stack.Screen name='ModulesPage' component={ModulesPage} />
        <Stack.Screen name='Achievements' component={ModulesPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
