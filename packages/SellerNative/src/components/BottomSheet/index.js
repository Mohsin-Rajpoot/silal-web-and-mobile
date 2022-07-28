import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {View, Button} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = ({children},ref) => {
  const refRBSheet = useRef();
  useImperativeHandle(ref, ()=>({
      isVisible(cont){
          cont? refRBSheet.current.open(): refRBSheet.current.close()
      }
  }))
  return (
    <View
    >
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        {children}
      </RBSheet>
    </View>
  );
};

export default forwardRef(BottomSheet);
