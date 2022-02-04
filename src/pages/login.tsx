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
  TextInput,
  ScrollView,
} from 'react-native';
import EyeClose from './EyeClose';

import DocumentPicker from 'react-native-document-picker';

const {width} = Dimensions.get('window');

export default function Login({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setpassword] = React.useState('');

  React.useEffect(() => {
    setUsername('');
    setpassword('');
  });

  const submit = () => {
    if (username == 'Rohit' && password == 'Rohit45') {
      alert('login Successfull');
    } else {
      alert('Wrong user Id & password');
    }
  };
  return (
    <>
      <ScrollView>
        <View
          style={{
            width: 80,
            paddingHorizontal: 100,
            marginTop: 20,
            flexDirection: 'row',
          }}>
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
        </View>
        <View style={{alignItems: 'center', marginTop: 70}}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Login Now</Text>
          <Text style={{marginTop: 10, marginBottom: 20}}>
            Please enter the details below to continue
          </Text>
        </View>

        <TextInput
          returnKeyType="next"
          maxLength={50}
          placeholder={'Enter Username'}
          style={{
            marginLeft: 10,
            height: 50,
            borderColor: '#f8a15c',
            borderWidth: 2,
            textAlignVertical: 'center',
          }}
          onChangeText={text => {
            setUsername(text);
          }}
          keyboardType={'default'}
          marginTop={10}
          borderRadius={10}
          marginRight={10}
        />

        <TextInput
          returnKeyType="next"
          maxLength={50}
          placeholder={'Enter Password'}
          style={{
            marginLeft: 10,
            height: 50,
            borderColor: '#f8a15c',
            borderWidth: 2,
            textAlignVertical: 'center',
          }}
          onChangeText={text => {
            setpassword(text);
          }}
          keyboardType={'default'}
          marginTop={10}
          borderRadius={10}
          marginRight={10}
          suffix={<EyeClose width={25} height={33} />}
        />
        <View padding={10} style={{alignSelf: 'flex-end'}}>
          <Text style={{color: 'red'}}>Forgot Password?</Text>
        </View>

        <TouchableOpacity onPress={submit} style={styles.button}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Don't have an account?</Text>
            <Text
              onPress={() => navigation.navigate('Home')}
              style={{color: 'red'}}>
              Register
            </Text>
          </View>
        </View>
      </ScrollView>
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
    width: 250,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
