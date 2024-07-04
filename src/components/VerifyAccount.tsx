import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ModelView from '../utility/ModelView';

const VerifyAccount = ({ route }:any) => {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [errorModal, setErrorModle] = useState(false);
  const [modalText, setModalText] = useState('');
  const email = route.params?.email;

  const handleInputChange = (value: string) => {
    setVerificationCode(value);
  };
  const handleVerify=()=>{
    setModalVisible(true);
    if (!verificationCode) {
      setErrorModle(true)
      setModalText('Verification Code Failed');
    } else {
      setErrorModle(false)
      setModalText(`${email} is verified`);
      const splashTimeout = setTimeout(() => {
        navigation.navigate('MainTabs');
      }, 2000);
  
      return () => clearTimeout(splashTimeout);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: '#104993'}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containerMain}>
          <View style={styles.textVew}>
            <Text style={styles.title}>Verify account</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>DO IT</Text>
            <View style={styles.contantView}>
              <Text style={styles.contantText}>
                By verifying your account, your data will be secured by default,
                and you are accepting our terms and policies.
              </Text>
              <View style={styles.verificationContent}>
                <View style={styles.input}>
                  <TextInput
                  style={{color:"black"}}
                    onChangeText={handleInputChange}
                    value={verificationCode}
                    placeholder="Verification code"
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={handleVerify}>
                    <Text style={styles.verifyBtn}>Verify</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ModelView
          modalText={modalText}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          errorModal={errorModal}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: 'column',
    padding: '5%',
    // position: 'relative',

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#597ba6',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: -30,
    padding: '10%',
  },
  textVew: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 30,
    fontWeight: '500',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Darumadrop One',
    fontSize: 36,
    fontWeight: '700',
  },
  contantView: {
    maxWidth: 275,
    height: '100%',
    justifyContent: 'center',
  },
  contantText: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '500',
  },
  verificationContent: {
    marginTop: '20%',
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#0EA5E9',
    padding: 10,
    borderRadius: 10,
  },
  verifyBtn: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1.6,
  },
});

export default VerifyAccount;
