import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);

    return () => clearTimeout(splashTimeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/Checkmark.png')}
        style={styles.image}
      />
      <Text style={styles.text}>DO IT</Text>
      <Text style={styles.version}>v 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#104993',
    justifyContent: 'center',
    paddingBottom: '80%',
    alignItems: 'center',
    position:"relative",
    overflow:"hidden",
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '5%',
    fontFamily: 'Darumadrop One',
    fontStyle: 'normal',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  version:{
    fontSize: 20,
    color: 'white',
    bottom:"20%",
    fontFamily: 'Darumadrop One',
    fontStyle: 'normal',
    position:"absolute",
    fontWeight:"700"
  }
});

export default SplashScreen;
