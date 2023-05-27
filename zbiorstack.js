import { createStackNavigator } from '@react-navigation/stack';
import SpisĆwiczeń from './screens/SpisĆwiczeń';
import Barki from './screens/Cwiczenia/Barki';

const Stack = createStackNavigator();

export default function SpisNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Spis Ćwiczeń" component={SpisĆwiczeń} />
      <Stack.Screen name="Barki" component={Barki} />
    </Stack.Navigator>
  ); 
}
