import React,{useState,useEffect} from 'react';
import {
  OrientationLocker,
  LANDSCAPE,
  PORTRAIT
} from 'react-native-orientation-locker';
import {Dimensions} from 'react-native'

const LockOnLandscape = ( ) => {

  const [orientation, setOrientation] = useState('LANDSCAPE');
  const determineAndSetOrientation = () => {
      let width = Dimensions.get('window').width;
      let height = Dimensions.get('window').height;
  
      if (Dimensions == PORTRAIT ) {
          setOrientation(LANDSCAPE);
          console.log(orientation,"orientation jjjjjjjjjjj");
        } else {
          setOrientation('LANDSCAPE');
          console.log(orientation,'LANDSCAPE jjjjjjjjjjjjjj');
        }
    }
  
    useEffect(() => {
  
      determineAndSetOrientation();
      Dimensions.addEventListener('change', determineAndSetOrientation);
  
      return () => {
        Dimensions.addEventListener('change', determineAndSetOrientation)
      }
    }, []);







  return (
    <OrientationLocker
    // onPress={onPress}
      orientation={orientation}
      onChange={orientation => console.log('onChange', orientation)}
      onDeviceChange={orientation => {console.log('onDeviceChange', orientation)}}
    />
  );
};

export default LockOnLandscape;
