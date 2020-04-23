import {Modal, View, Text, StyleSheet, SafeAreaView,FlatList, TouchableOpacity} from 'react-native';
import React from 'react';


import {} from 'react-native-gesture-handler';
import {queriedData} from './Data_Service/action';

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
    };
  }

  render() {
    console.log('data in custom modal: ', this.props.data);
    return (
      <View style={style.centeredView}>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.visible}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <FlatList
                data={this.props.data}
                renderItem={({item}) => {
                  return (
                    <Text style={{fontSize: 20, alignSelf: 'center'}}>
                      {item.productName}
                    </Text>
                  );
                }}
              />

              <TouchableOpacity
                style={{marginVertical: 15}}
                onPress={() => {
                  this.setState({visible: false});
                }}>
                <Text
                  style={{
                    borderColor: '#000',
                    borderWidth: 2,
                    fontSize: 15,
                    alignSelf: 'flex-start',
                    padding: 5,
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const style = StyleSheet.create({
  centeredView: {
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'lightgreen',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default CustomModal;
