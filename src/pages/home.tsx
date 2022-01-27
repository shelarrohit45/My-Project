import * as React from 'react';
// import {Pressable, Button, Image, Dimensions} from 'react-native';
import {
  Pressable,
  Button,
  Image,
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';
import MediaSelector from './mediaselector';
import DocumentPicker from 'react-native-document-picker';
import Star from './star';
import ImagePicker from 'react-native-image-crop-picker';

const {width} = Dimensions.get('window');

export default function HomeScreen() {
  const [Images, setImages] = React.useState([]);
  const [favoriteImages, setfavoriteImages] = React.useState([]);
  const [fevimage, setfevimage] = React.useState(false);
  const [mediaSelector, setMediaSelector] = React.useState(false);
  const [showfavoriteImages, setshowfavoriteImages] = React.useState(false);

  React.useEffect(() => {
    setImages([]);
    setfavoriteImages([]);
  }, []);

  const _pickGalleryImage = async () => {
    try {
      let result = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      if (result) {
        result.map(item => {
          setMediaSelector(false);
          let fileExtension = item.name.substr(item.name.lastIndexOf('.') + 1);
          var files = ['png', 'jpg', 'jpeg'];
          var check = files.includes(fileExtension.toLowerCase());

          if (check) {
            setImages(Images => [
              ...Images,
              {
                Image: item.uri,
                Extension: fileExtension,
                Name: item.name,
              },
            ]);
          }
        });
      }
    } catch (err) {
      setMediaSelector(false);
      console.log(err);
    }
  };

  const pickImage = async option => {
    const Options = {
      compressImageQuality: 1.0,
      includeBase64: true,
    };
    const picker =
      option == 'openPicker' ? ImagePicker.openPicker : ImagePicker.openCamera;
    picker(Options)
      .then(image => {
        setMediaSelector(false);
        let fileExtension = image.path.substr(image.path.lastIndexOf('.') + 1);
        setImages(Images => [
          ...Images,
          {
            Image: image.path,
            Extension: fileExtension,
          },
        ]);
      })
      .catch(err => {
        setMediaSelector(false);
        console.log(err);
      });
  };

  // console.log(favoriteImages);

  const renderItem = ({item}) => {
    return (
      <Pressable marginHorizontal={15}>
        <Image
          style={{
            marginBottom: 15,
            marginRight: 15,
            height: width / 2.5,
            width: width / 2.5,
            borderRadius: 15,
          }}
          source={{uri: `${item.Image}`}}
        />
        <Star
          color={fevimage ? '#FEA012' : 'white'}
          onPress={() => {
            setfavoriteImages([...favoriteImages, item]), setfevimage(true);
          }}
          width={20}
          height={20}
          style={{position: 'absolute', top: 5, right: 30}}
        />
      </Pressable>
    );
  };

  return (
    <>
      {mediaSelector ? (
        <MediaSelector
          title={'Select Image From'}
          mediaSelector={mediaSelector}
          onRequestClose={() => setMediaSelector(false)}
          selectCamera={() => {
            // setMediaSelector(false);
            pickImage('openCamera');
          }}
          selectGallary={() => {
            // setMediaSelector(false);
            _pickGalleryImage();
          }}
        />
      ) : (
        <>
          <Button
            onPress={() =>{ setMediaSelector(true), setshowfavoriteImages(false)}}
            title="Take Photo"
            color="#841584"
          />
          <View padding={10} />
          {favoriteImages.length > 0 ? (
            <Button
              style={{marginTop: 10}}
              onPress={() => setshowfavoriteImages(true)}
              title="Favorite Photo"
              color="#841584"
            />
          ) : null}
          <View padding={10} />
          {showfavoriteImages ? (
          <Button
            onPress={() =>{ setshowfavoriteImages(false)}}
            title="Go back to Photo"
            color="#841584"
          />): null}
          <View padding={10} />

          <Text style={{marginLeft : 10, fontSize:20, marginBottom :20}}> {showfavoriteImages ? 'favorite Photos' : 'Added Images In Favorite'}</Text>
          <FlatList
            data={showfavoriteImages ? favoriteImages : Images}
            horizontal={false}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0}
          />
        </>
      )}
    </>
  );
}
