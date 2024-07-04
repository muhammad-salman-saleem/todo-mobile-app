import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {SafeAreaView} from 'react-native-safe-area-context';

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0],
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    '2023-12-20': 'Meeting at 10 AM',
    '2023-12-21': 'Lunch with friends',
    '2023-12-22': 'Gym session in the evening',
  });

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setShowModal(!showModal);
  };

  const markedDates = Object.keys(data).reduce((marked: any, date: any) => {
    marked[date] = {
      selected: true,
      selectedColor: 'lightgray',
      marked: true,
      dotColor: '#104993',
    };
    return marked;
  }, {});
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.component}>
          <Calendar
            style={styles.calendarStyle}
            onDayPress={handleDayPress}
            markedDates={markedDates}
            firstDay={1}
            theme={{
              calendarBackground: '#678ab7',
              arrowColor: '#104993',
              todayTextColor: 'white',
              todayBackgroundColor: '#104993',
              textDayFontFamily: 'Arial',
              textMonthFontFamily: 'Arial',
              textDayHeaderFontFamily: 'Arial',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
              textDayStyle: {color: 'black'},
              monthTextColor: 'white',
              selectedDayTextColor: '#104993',
            }}
            
          />

          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              setShowModal(false);
            }}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>{data[selectedDate]}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowModal(false)}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <View
            style={{
              backgroundColor: 'white',
              padding: 5,
              marginTop: 20,
              borderRadius: 10,
            }}>
            <View style={{flexDirection: 'column'}}>
              <View style={{padding: 10}}>
                <Text>Set task for 20 January 2023</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  gap: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
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
                    fontSize: 12,
                    fontWeight: '400',
                    letterSpacing: 1.44,
                    width: '60%',
                    height: 42,
                  }}
                  placeholder="Task"
                  placeholderTextColor="rgba(255, 255, 255, 0.80);"
                />
                <TouchableOpacity
                  style={{
                    height: 42,
                    width: '35%',
                    backgroundColor: '#0EA5E9',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                  }}>
                  <Text>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </View>
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
    padding: 10,
  },
  component: {
    flex: 1,
    justifyContent: 'center',
  },
  calendarStyle: {
    borderRadius: 5,
    padding: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#104993',
    padding: 10,
    borderRadius: 5,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CalendarScreen;

