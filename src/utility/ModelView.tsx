import React from 'react'
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const ModelView = ({modalVisible, setModalVisible, modalText ,modalTitle,errorModal}: any) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styleModel.centeredView}>
          <View style={styleModel.modalView}>
            {!errorModal && 
             <Image
             source={require('../assets/Images/ModelCheck.png')}
             style={styleModel.image}
           />
            }
            {!errorModal && 
             <Text style={styleModel.title}>{modalTitle}</Text>
            }
            <Text style={styleModel.modalText}>{modalText}</Text>
            {errorModal && <Pressable
              style={[styleModel.button, styleModel.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styleModel.textStyle}>Close</Text>
            </Pressable>}
          </View>
        </View>
      </Modal>
    );
  };
  const styleModel = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 25,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title:{
      color: "#000",
      textAlign: "center",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "400",
      maxWidth:214,
      marginTop:"5%",
    },
    image:{
      width: 120,
      height: 120,
      margin: 'auto',
      alignSelf: 'center',
    },
    button: {
      borderRadius: 5,
      padding: 10,
      elevation: 2,
      marginTop: '10%',
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#0EA5E9',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      maxWidth:319,
      marginTop:"5%"
    },
  });
export default ModelView
