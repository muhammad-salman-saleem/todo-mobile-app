import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import {Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const textArea = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
const taskText = `team meeting`;
const CreateTask = () => {
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = useState(taskText);
  const [textAreaValue, setTextAreaValue] = useState(textArea);
  const [editText, setEditText] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.navbar}>
        <Image
          source={require('../assets/Images/Back.png')}
          style={{width: 30, height: 30, marginLeft: 5}}
        />
        <Text
          style={{
            color: '#FFF',
            fontFamily: ' Poppins',
            fontSize: 16,
            fontWeight: '500',
            letterSpacing: 1.44,
          }}>
          Task Details
        </Text>
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.componet}>
          {!editText && (
            <View>
              <View style={{gap: 10}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                  <Text
                    style={{
                      color: '#FFF',
                      fontFamily: 'Poppins',
                      fontSize: 18,
                      fontWeight: '500',
                      letterSpacing: 1.62,
                    }}>
                    team meeting
                  </Text>
                  <TouchableOpacity onPress={() => setEditText(true)}>
                    <Image
                      source={require('../assets/Images/editText.png')}
                      style={{width: 20, height: 16}}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    color: 'rgba(255, 255, 255, 0.90)',
                    fontFamily: 'Poppins',
                    fontSize: 14,
                    fontWeight: '300',
                    letterSpacing: 1.26,
                  }}>
                  Today | 20:00pm
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: ' rgba(255, 255, 255, 0.25)',
                  marginBottom: 30,
                  marginTop: 30,
                }}></View>
              <View>
                <Text
                  style={{
                    color: '#FFF',
                    fontFamily: 'Poppins',
                    fontSize: 18,
                    fontWeight: '500',
                    letterSpacing: 1.62,
                  }}>
                  {textAreaValue}
                </Text>
              </View>
            </View>
          )}

          {editText && (
            <View>
              <TextInput
                style={{
                  borderColor: '#ccc',
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 10,
                  marginBottom: 10,
                  backgroundColor: '#05243E',
                  color: 'white',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '400',
                  letterSpacing: 1.44,
                  width: '100%',
                }}
                placeholder="Task"
                placeholderTextColor="rgba(255, 255, 255, 0.80);"
                value={textInputValue}
                onChangeText={text => setTextInputValue(text)}
              />
              <TextInput
                style={styles.textArea}
                placeholder="Description"
                placeholderTextColor="rgba(255, 255, 255, 0.80);"
                multiline={true}
                numberOfLines={4}
                value={textAreaValue}
                onChangeText={text => setTextAreaValue(text)}
              />
            </View>
          )}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => setEditText(!editText)}
              style={{
                width: '30%',
                backgroundColor: '#05243E',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                gap: 10,
              }}>
              <Image
                source={require('../assets/Images/CheckMark.png')}
                style={{width: 20, height: 20, marginLeft: 5}}
              />
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '500',
                  letterSpacing: 1.44,
                }}>
                Done
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '30%',
                backgroundColor: '#05243E',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 15,
                gap: 10,
              }}>
              <Image
                source={require('../assets/Images/delete.png')}
                style={{width: 20, height: 20, marginLeft: 5}}
              />
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '500',
                  letterSpacing: 1.44,
                }}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '30%',
                backgroundColor: '#05243E',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                gap: 10,
              }}>
              <Image
                source={require('../assets/Images/Pin.png')}
                style={{width: 20, height: 20, marginLeft: 5}}
              />
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Poppins',
                  fontSize: 16,
                  fontWeight: '500',
                  letterSpacing: 1.44,
                }}>
                Pin
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#104993',
  },
  navbar: {
    padding: 10,
    marginTop: '4%',
    marginBottom: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  componet: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    backgroundColor: '#05243E',
    color: 'white',
    height: 200,
    textAlignVertical: 'top',
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.44,
    lineHeight: 20,
  },
});

export default CreateTask;
