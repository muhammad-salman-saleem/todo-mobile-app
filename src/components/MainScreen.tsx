import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

import Image1 from '../assets/Images/Image1.png';
import Image2 from '../assets/Images/Image2.png';
import Image3 from '../assets/Images/Image3.png';
import Image4 from '../assets/Images/Image4.png';
import {useNavigation} from '@react-navigation/native';

const staperHome = [
  {
    id: 1,
    title:
      'Plan your tasks to do, that way you’ll stay organized and you won’t skip any',
    icon: Image1,
  },
  {
    id: 2,
    title:
      'Make a full schedule for the whole week and stay organized and productive all days',
    icon: Image2,
  },
  {
    id: 3,
    title: 'Create a team task, invite people and manage your work together',
    icon: Image3,
  },
  {
    id: 4,
    title: 'Your information is secure with us',
    icon: Image4,
  },
];

const MainScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation<any>();

  const goToNextSlide = () => {    
    if(
      currentIndex === staperHome.length - 1 &&
      staperHome.length > 1
    ){
      navigation.navigate('Register');
    }else{
      setCurrentIndex(prevIndex => (prevIndex + 1) % staperHome.length);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <Image source={staperHome[currentIndex].icon} style={styles.image} />
        <Text style={styles.title}>{staperHome[currentIndex].title}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={goToNextSlide} style={styles.button}>
          {currentIndex !== staperHome.length - 1 ? (
            <Image
              source={require('../assets/Images/next_button.png')}
              style={styles.next}
            />
          ) : (
            <Image
              source={require('../assets/Images/done.png')}
              style={styles.next}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#104993',
    alignItems: 'center',
    // justifyContent: 'center',
    // position: 'relative',
  },
  slider: {
    alignItems: 'center',
    top: '4%',
    padding: '10%',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontStyle: 'normal',
    maxWidth: 274,
    top: '0%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: '5%',
    paddingRight: '10%',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  next: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default MainScreen;
