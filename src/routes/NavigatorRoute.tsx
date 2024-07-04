import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../components/Login';
import MainScreen from '../components/MainScreen';
import SplashScreen from '../components/SplashScreen';
import Register from '../components/Register';
import VerifyAccount from '../components/VerifyAccount';
import Home from '../components/Home';
import TaskTabs from '../components/TaskTabs';
import CreateTask from '../components/CreateTask';
import Settings from '../components/Settings';
import {Image, StyleSheet} from 'react-native';
import Calender from '../components/Calender';

const NavigatorRoute = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#104993',
            borderTopWidth: 0,
            paddingBottom: '8%',
            paddingTop: '8%',
          },
          tabBarShowLabel: false,
          tabBarHideOnKeyboard:true,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={({route}) => ({
            headerShown: false,
            tabBarIcon: ({color}: any) => (
              <Image
                source={require('../assets/Images/Home.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                }}
              />
            ),
            tabBarActiveTintColor: styles.activeColor.tintColor,
            tabBarInactiveTintColor: styles.inactiveColor.tintColor,
          })}
        />
        <Tab.Screen
          name="ComponentScreen"
          component={ComponentScreen}
          options={({route}) => ({
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/Images/Todo_List.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                }}
              />
            ),
            tabBarActiveTintColor: styles.activeColor.tintColor,
            tabBarInactiveTintColor: styles.inactiveColor.tintColor,
          })}
        />
        <Tab.Screen
          name="Calender"
          component={Calender}
          options={({route}) => ({
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/Images/Calendar.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                }}
              />
            ),
            tabBarActiveTintColor: styles.activeColor.tintColor,
            tabBarInactiveTintColor: styles.inactiveColor.tintColor,
          })}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={({route}) => ({
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('../assets/Images/Settings.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                }}
              />
            ),
            tabBarActiveTintColor: styles.activeColor.tintColor,
            tabBarInactiveTintColor: styles.inactiveColor.tintColor,
          })}
        />
        
      </Tab.Navigator>
    );
  };

  const ComponentScreen = () => {
    return (
      <Stack.Navigator initialRouteName="TaskTabs">
        <Stack.Screen
          name="TaskTabs"
          options={{headerShown: false, animation: 'slide_from_right'}}
          component={TaskTabs}
        />
        <Stack.Screen
          name="CreateTask"
          options={{headerShown: false, animation: 'slide_from_right'}}
          component={CreateTask}
        />
      </Stack.Navigator>
    );
  };
  return (
    <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen
        name="Splash"
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={SplashScreen}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={Register}
      />
      <Stack.Screen
        name="Main"
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={MainScreen}
      />
      <Stack.Screen
        name="VerifyAccount"
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={VerifyAccount}
      />
      <Stack.Screen
        name="MainTabs"
        options={{headerShown: false, animation: 'slide_from_right'}}
        component={MainTabs}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  activeColor: {
    tintColor: '#63D9F3',
  },
  inactiveColor: {
    tintColor: 'white',
  },
});
export default NavigatorRoute;
