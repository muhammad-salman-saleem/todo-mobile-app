import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native-elements';

type RouteNames =
  | 'profile'
  | 'Conversations'
  | 'Projects'
  | 'Terms-and-Policies';
type Setting = {
  id: number;
  title: string;
  image: any;
  navigate: RouteNames;
};
const SETTING_DATA: Setting[] = [
  {
    id: 1,
    title: 'Profile',
    image: require('../assets/Images/Profile.png'),
    navigate: 'profile',
  },
  {
    id: 2,
    title: 'Conversations',
    image: require('../assets/Images/Conversations.png'),
    navigate: 'Conversations',
  },
  {
    id: 3,
    title: 'Projects',
    image: require('../assets/Images/Projects.png'),
    navigate: 'Projects',
  },
  {
    id: 4,
    title: 'Terms and Policies',
    image: require('../assets/Images/Analyze.png'),
    navigate: 'Terms-and-Policies',
  },
];
const Settings = () => {
  const navigation = useNavigation();
  

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#FFF',
              fontFamily: ' Poppins',
              fontSize: 25,
              fontWeight: '500',
              letterSpacing: 1.44,
              textAlign: 'center',
            }}>
            Setting
          </Text>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.component}>
          {SETTING_DATA &&
            SETTING_DATA.map((setting: Setting) => {
              return (
                <View key={setting.id}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(setting.navigate as never)
                    }
                    
                    style={{
                      paddingLeft: '8%',
                      paddingRight: '8%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                      <Image
                        source={setting.image}
                        style={{width: 24, height: 24}}
                      />
                      <Text
                        style={{
                          color: '#FFF',
                          textAlign: 'center',
                          fontFamily: 'Poppins',
                          fontSize: 18,
                          fontWeight: '400',
                          letterSpacing: 1.17,
                        }}>
                        {setting.title}
                      </Text>
                    </View>
                    <Image
                      source={require('../assets/Images/iconright.png')}
                      style={{width: 9, height: 15}}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      width: '100%',
                      height: 1,
                      backgroundColor: ' rgba(255, 255, 255, 0.25)',
                      marginBottom: 18,
                      marginTop: 18,
                    }}></View>
                </View>
              );
            })}
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 220,
              flexDirection: 'row',
              padding: 15,
              borderRadius: 40,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '15%',
              gap: 10,
            }}>
            <Image
              source={require('../assets/Images/Logout.png')}
              style={{width: 24, height: 20}}
            />
            <Text
              style={{
                color: '#DC4343',
                fontFamily: 'Poppins',
                fontSize: 16,
                fontWeight: '700',
                letterSpacing: 1.44,
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#104993',
    textAlign: 'center',
  },
  navbar: {
    marginTop: '4%',
    marginBottom: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5%',
  },
  component: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Settings;
