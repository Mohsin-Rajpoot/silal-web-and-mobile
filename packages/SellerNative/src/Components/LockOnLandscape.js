import React, { useEffect, useRef } from 'react';
import { View } from 'react-native'
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';

const LockOnLandscape = () => {
  return (
    <OrientationLocker
      orientation={LANDSCAPE}
      onChange={orientation => console.log('onChange', orientation)}
      onDeviceChange={orientation =>
        console.log('onDeviceChange', orientation)
      }
    />
  );
};

export default LockOnLandscape;
