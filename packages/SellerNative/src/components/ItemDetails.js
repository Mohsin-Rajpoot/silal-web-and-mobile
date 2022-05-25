import { View,Image } from 'react-native'
import React,{useState} from 'react'
import CustomText from '@SilalApp/common/components/CustomText'
import colors from '@SilalApp/common/assets/colors'
import Images from '@SilalApp/common/assets/images'
import { ScaledSheet } from 'react-native-size-matters'
import {CheckBox} from 'react-native-elements';

const ItemDetails = () => {
  const [checked, setchecked] = useState(false);

  return (
    <View>
 <CheckBox
            checked={checked == 'true' ? true : false}
            onPress={() => console.log("check box")}
            checkedColor="#5AB3A8"
            uncheckedColor="#CCD4D6"
            backgroundColor={'red'}
          />


      {/* <Image style={{width:'100%',height:'50%'}}
                 source={require('../Assets/image8.png')}

        /> */}
    </View>
  )
}

export default ItemDetails

const styles = ScaledSheet.create({})