
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import QuanLyCuaHang from './Screen/QuanLyCuaHang';
import Add from './Screen/add';
import Details from './Screen/Details';
import Edit from './Screen/edit';
import Personal from './Screen/personal';
import { icon } from './conten';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="QuanLy" component={QuanLyCuaHang} options={{title:"Quản lý"}}/>
      <Stack.Screen name="Add" component={Add} options={{title:"Thêm mới"}} />
      <Stack.Screen name="Details" component={Details}  options={{title:"Chi tiết cửa hàng"}}/>
      <Stack.Screen name="Edit" component={Edit} options={{title:"Sửa"}}/>
    </Stack.Navigator>

  );
}
const TabButton = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       tabBarOptions={{
        activeTintColor: 'red',
      }}
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
      
          if (route.name === 'App') {
            enabled=true;

           return <Image style={{width:25 , height:25}} source={icon.home}/>
          } else if (route.name === 'Personal') {
            enabled=true;
            return <Image style={{width:25 , height:25}}  source={icon.personal}/>
          }
        },
        // tabBarActiveTintColor: 'tomato',
        // tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen  name="App" component={App} options={{headerShown:false , title:"Quản lý cửa hàng"}  } />
        <Tab.Screen name="Personal" component={Personal} options={{title:"Thông tin cá nhân"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default TabButton;

