import * as React from 'react';
import {
  Pressable,
  Button,
  Image,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';

const {width} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          padding={10}
          backgroundColor="red"
          style={{
            width: 2,
            marginLeft: '45%',
            height: 50,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        />
        <View
          padding={10}
          backgroundColor="red"
          style={{
            width: 2,
            marginLeft: 5,
            marginTop: 30,
            height: 50,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        />
      </View>
      <View style={{width: 80, paddingHorizontal: 100, flexDirection: 'row'}}>
        <Image
          style={{
            zIndex: 2,
            height: 200,
            width: 150,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            borderBottomLeftRadius: 80,
            borderBottomRightRadius: 80,
          }}
          source={require('./Images/background.jpg')}
        />
        <Image
          style={{
            position: 'absolute',
            left: 150,
            top: 50,
            height: 200,
            width: 150,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            borderBottomLeftRadius: 80,
            borderBottomRightRadius: 80,
          }}
          source={require('./Images/background.jpg')}
        />
        <View
          backgroundColor={'white'}
          style={{
            zIndex: 3,
            padding: 10,
            left: 180,
            height: 70,
            bottom: -30,
            position: 'absolute',
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>$500</Text>
          <Text>THIS MONTH</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          Translate & Earn.
        </Text>
        <Text>Now it is easy to earn money. just use the</Text>
        <Text>translate and collect the point.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text>GET STARTED</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <View style={{flexDirection: 'row'}}>
          <Text>Already have an account?</Text>
          <Text onPress={()=> navigation.navigate('login')} style={{color: 'red'}}>Login</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 10,
    padding: 20,
    width: 150,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
