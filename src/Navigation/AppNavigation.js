import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from '../screens/AboutScreen';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PurchaseDetails from '../screens/Purchase/PurchaseDetails';
import PurchaseList from '../screens/Purchase/PurchaseList';
import PurchaseCreate from '../screens/Purchase/PurchaseCreate';
import Purchase from '../screens/Purchase/Purchase';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function DrawerNavigation() {
  return (

    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#ffa500',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontWeight: 'bold',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Purchase"
        component={Purchase}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }}
      />

    </Drawer.Navigator>

  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PurchaseDetails"
          component={PurchaseDetails}
          options={({ /*route*/ }) => ({ headerTitle: 'Settings' /*route.params.Ditem.title*/ })}
        />

        <Stack.Screen
          name="PurchaseList"
          component={PurchaseList}
          options={{ title: 'Scan' }}
        />

        <Stack.Screen
          name="PurchaseCreate"
          component={PurchaseCreate}
          options={{ title: 'New APR' }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;