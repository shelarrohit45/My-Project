import * as React from 'react';
import {
  View,
  Modal,
  ScrollView,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function mediaSelector({
  selectCamera,
  selectGallary,
  mediaSelector,
  onRequestClose,
  title,
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={mediaSelector}
        onRequestClose={onRequestClose}>
        <TouchableOpacity style={{flex: 1}} onPress={() => onRequestClose()}>
          <View style={styles.modalMainView}>
            <View
              style={{
                backgroundColor: 'white',
                width: '75%',
                maxHeight: '90%',
                height: 'auto',
                borderRadius: 10,
              }}>
              <ScrollView>
                <View style={{marginHorizontal: 20, marginVertical: 20}}>
                  <Text
                    style={{
                      fontSize: 18,
                      flex: 0.6,
                      marginTop: 5,
                    }}>
                    {title ? title : 'Select Image From'}
                  </Text>

                  <View
                    style={{
                      padding: 0.25,
                      backgroundColor: 'blue',
                      marginVertical: 10,
                    }}
                  />

                  <Pressable
                    style={styles.YesButton}
                    onPress={() => {
                      selectCamera();
                    }}>
                    <Text style={[styles.signupButtonText]}>Camera</Text>
                  </Pressable>
                  <Pressable
                    style={styles.YesButton}
                    onPress={() => selectGallary()}>
                    <Text style={[styles.signupButtonText]}>Gallery</Text>
                  </Pressable>
                </View>
              </ScrollView>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalMainView: {
    backgroundColor: '#000000aa',
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  YesButton: {
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 5,
    height: 30,
  },
  NoButton: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 5,
    width: 100,
    height: 40,
  },
  signupButtonText: {
    marginLeft: 5,
    color: 'black',
    fontSize: 12,
  },
});
