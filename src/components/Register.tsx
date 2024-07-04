import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface formData {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const navigation = useNavigation<any>();
  const [formData, setFormData] = useState<formData>({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (name: string, value: any) => {
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // navigation.navigate('Main', { formData })
    console.log('Form submitted:', formData);
    Alert.alert('Form submitted:');
  };

  return (
    <View style={styles.containerMain}>
      <Image
        source={require('../assets/Images/Checkmark.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to DO IT</Text>
      <Text style={styles.text}>create an account and Join us now!</Text>
      <View style={styles.container}>
        <TextInput
          style={{...styles.input, color: 'black'}}
          onChangeText={text => handleInputChange('name', text)}
          value={formData.name}
          placeholder="Full Name"
        />

        <TextInput
          style={{...styles.input, color: 'black'}}
          onChangeText={text => handleInputChange('email', text)}
          value={formData.email}
          placeholder="E-mail"
        />

        <TextInput
          style={{...styles.input, color: 'black'}}
          onChangeText={text => handleInputChange('password', text)}
          secureTextEntry
          value={formData.password}
          placeholder="Password"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.AccountContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text style={styles.signin}>Sign in</Text>
          </TouchableOpacity>
        </View>
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
    padding: '7%',
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
    marginTop: '10%',
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
    marginTop: 30,
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
    fontSize:18,
    letterSpacing:1.6
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
    height: '15%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap:5
  },
  signin: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#63D9F3',
    letterSpacing: 1.2,
  },
});

export default Register;
