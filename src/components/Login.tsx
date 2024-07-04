import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ModelView from '../utility/ModelView';

interface formData {
  email: string;
  password: string;
}

const Login = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModal, setErrorModle] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const navigation = useNavigation<any>();
  const [formData, setFormData] = useState<formData>({
    email: '',
    password: '',
  });

  const handleInputChange = (name: string, value: any) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    setModalVisible(true);
    if (!formData.email || !formData.password) {
      setErrorModle(true)
      setModalText('Email and Password must be provided');
    } else {
      setErrorModle(false)
      setModalText("You gonna recieve a verification code in your email")
      setModalTitle("Your account  has been created successfully")
      const splashTimeout = setTimeout(() => {
        navigation.navigate('VerifyAccount',{ email: formData.email } );
      }, 2000);
  
      return () => clearTimeout(splashTimeout);
    }
  };

  return (
    <View style={styles.containerMain}>
      <Image
        source={require('../assets/Images/Checkmark.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome Back to DO IT </Text>
      <Text style={styles.text}>Have an other productive day !</Text>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
          style={{color:"black"}}
            onChangeText={text => handleInputChange('email', text)}
            value={formData.email}
            placeholder="E-mail"
          />
        </View>
        <View style={styles.input}>
          <TextInput
          style={{color:"black"}}
            onChangeText={text => handleInputChange('password', text)}
            secureTextEntry
            value={formData.password}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetBotton}>forget password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.AccountContainer}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signin}>sign up</Text>
          </TouchableOpacity>
        </View>
        <ModelView
          modalText={modalText}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalTitle={modalTitle}
          errorModal={errorModal}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#104993',
    textAlign: 'center',
    padding: '5%',
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#104993',
    textAlign: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 'auto',
    alignSelf: 'center',
    marginTop: '15%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginTop: '15%',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  input: {
    height: 40,
    marginTop: '15%',
    marginBottom: 10,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    color: 'black',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0EA5E9',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1.6,
  },
  forgetBotton: {
    textAlign: 'right',
    color: 'white',
    marginTop: 10,
    marginBottom: 25,
    fontWeight: '500',
    letterSpacing: 1.2,
  },
  accountText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: 'white',
    letterSpacing: 1.2,
  },
  AccountContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 5,
  },
  signin: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#63D9F3',
    letterSpacing: 1.2,
  },
});


export default Login;
