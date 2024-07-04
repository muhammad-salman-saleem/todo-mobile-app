import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Button, Image} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import TimePicker from 'react-time-picker';

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const TaskTabs = () => {
  const navigation = useNavigation<any>();
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [filteredData, setFilteredData] = useState(taskList);
  useEffect(() => {
    setShowLoader(true);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://jsonplaceholder.typicode.com/todos/',
      headers: {},
    };

    axios
      .request(config)
      .then(response => {
        setTaskList(response.data);
        setFilteredData(response.data);
        setShowLoader(false);
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        setShowLoader(false);
        console.log(error);
      });
  }, [navigation]);

  const handleSearch = (text: string) => {
    const filtered = taskList.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchQuery(text);
    setFilteredData(filtered);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: 10,
            backgroundColor: 'rgba(16, 45, 83, 0.80)',
            paddingLeft: 10,
            marginBottom: 5,
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              color: 'white',
              width: '80%',
            }}
            placeholder="Search by task title"
            placeholderTextColor="rgba(255, 255, 255, 0.60);"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <TouchableOpacity
            onPress={() => handleSearch(searchQuery)}
            style={{paddingRight: '5%'}}>
            <Image
              source={require('../assets/Images/search.png')}
              style={{width: 17, height: 17}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Text style={styles.titleText}>Task Detail</Text>
        {showLoader ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <ScrollView
            style={{height: '70%'}}
            showsVerticalScrollIndicator={false}>
            {filteredData &&
              filteredData.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CreateTask')}
                    style={styles.item}
                    key={item.id}>
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          style={styles.itemTitle}>
                          {item.title}
                        </Text>
                        {item.completed ? (
                          <Text style={styles.taskCompleted}>
                            Task Completed
                          </Text>
                        ) : (
                          <Text style={styles.taskIncompleted}>
                            Task Incomplete
                          </Text>
                        )}
                      </View>
                      <View>
                        <TouchableOpacity>
                          <Image
                            source={require('../assets/Images/iconright.png')}
                            style={{width: 11, height: 16}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        )}
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', margin: 10}}>
        <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={toggleModal}>
          <Image
            source={require('../assets/Images/AddTask.png')}
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.modalContainer}>
            <View style={styles.modalContent}>
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
                style={[styles.textArea]}
                placeholder="Description"
                placeholderTextColor="rgba(255, 255, 255, 0.80);"
                multiline={true}
                numberOfLines={4}
                value={textAreaValue}
                onChangeText={text => setTextAreaValue(text)}
              />
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  gap: 15,
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  onPress={() => setShowCalendar(!showCalendar)}
                  style={{
                    width: '45%',
                    height: 50,
                    backgroundColor: '#05243E',
                    borderRadius: 5,
                    justifyContent: 'center',
                    padding: 10,
                  }}>
                  <Text style={{color: 'white'}}>Date : {selectedDate}</Text>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showCalendar}
                    onRequestClose={() => {
                      setShowCalendar(!showCalendar);
                    }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: 10,
                      }}>
                      <Calendar
                        style={{borderRadius: 5, padding: 5}}
                        onDayPress={day => {
                          setSelectedDate(day.dateString);
                          setShowCalendar(false);
                        }}
                        markedDates={{
                          [selectedDate]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedColor: 'orange',
                          },
                        }}
                      />
                    </View>
                  </Modal>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setShowTime(!showTime)}
                  style={{
                    width: '45%',
                    height: 50,
                    backgroundColor: '#05243E',
                    borderRadius: 5,
                    justifyContent: 'center',
                    padding: 10,
                  }}>
                  <Text style={{color: 'white'}}>Time : </Text>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showTime}
                    onRequestClose={() => {
                      setShowTime(!showTime);
                    }}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: 10,
                      }}>
                      {/* <TimePicker onChange={handleTimeChange} value={selectedTime} /> */}
                      <Text>this iss time</Text>
                      <Button
                        title="Close Modal"
                        onPress={() => setShowTime(!showTime)}
                      />
                    </View>
                  </Modal>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{
                    width: '45%',
                    height: 50,
                    borderColor: '#0EA5E9',
                    borderWidth: 2,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Text
                    style={{
                      color: '#05243E',
                      textAlign: 'center',
                      fontFamily: 'Poppins',
                      fontSize: 16,
                      fontWeight: '500',
                      letterSpacing: 1.44,
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                  }}
                  style={{
                    width: '45%',
                    height: 50,
                    backgroundColor: '#0EA5E9',
                    borderRadius: 10,
                    justifyContent: 'center',
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      fontFamily: 'Poppins',
                      fontSize: 16,
                      fontWeight: '500',
                      letterSpacing: 1.44,
                    }}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
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
  },

  image: {
    width: 50,
    height: 50,
    margin: 'auto',
    alignSelf: 'center',
    marginLeft: '3%',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.62,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.50)',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.26,
  },
  bellImage: {
    width: 30,
    height: 30,
    margin: 'auto',
    alignSelf: 'flex-end',
  },
  cardContiner: {
    margin: 10,
    flexDirection: 'column',
  },
  titleText: {
    margin: 10,
    color: '#FFF',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.4,
  },
  card: {
    flexDirection: 'column',
    height: 100,
    padding: 15,
    backgroundColor: 'white',
    width: 200,
    borderRadius: 10,
    margin: 10,
  },
  cardTitle: {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.26,
  },
  cardText: {
    color: 'rgba(0, 0, 0, 0.90)',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0.9,
    marginBottom: 10,
  },
  imageGrup: {
    height: 25,
    width: 78,
  },
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  itemTitle: {
    color: 'black',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.26,
  },
  taskCompleted: {
    color: 'green',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.9,
  },
  taskIncompleted: {
    color: 'rgba(238, 6, 6, 0.9)',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: 0.9,
  },
  modalContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    paddingTop: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textArea: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#05243E',
    color: 'white',
    flex: 1,
    height: 120,
    verticalAlign: 'top',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.44,
    lineHeight: 20,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default TaskTabs;
