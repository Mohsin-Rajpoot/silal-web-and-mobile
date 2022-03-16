import {View,TouchableOpacity,useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { Icon,ListItem } from 'react-native-elements';
import {moderateScale, ScaledSheet, verticalScale} from 'react-native-size-matters'
import colors from 'common_colors'
import CustomText from '@SilalApp/common/components/CustomText'
import fonts from 'fonts'
import ProfileBox from './Molecules/ProfileBox';
const Drawer = (props) => {

    const width = useWindowDimensions().width * 0.3;
const [expanded, setExpanded] = useState(false)
  return (
    <DrawerContentScrollView style={styles.mainContainer} {...props}>
       <TouchableOpacity onPress={()=>props.navigation.closeDrawer()}>
        <Icon
          name='cross'
          type='entypo'
          color={'#fff'}
          size={moderateScale(16)}
          style={styles.cross}
        />
        </TouchableOpacity>
        <View style={styles.accordianContainer}>
            <CustomText fontFamily={fonts.PoppinsMedium} fontSize={16} color={'#fff'} label="Profile" />
            <TouchableOpacity onPress={()=>setExpanded(!expanded)}>
        <Icon
          name={expanded ?'chevron-small-down' :'chevron-small-up'}
          type='entypo'
          color={'#fff'}
          size={moderateScale(22)}
        />
        </TouchableOpacity>
        </View>
        {!expanded && <ProfileBox />}
        
        <CustomText textStyle={styles.drawerText} fontFamily={fonts.PoppinsMedium} label='Offers' />
        <CustomText textStyle={styles.drawerText} fontFamily={fonts.PoppinsMedium} label='Documents' />
        <CustomText textStyle={styles.drawerText} fontFamily={fonts.PoppinsMedium} label='Contact us' />
        <CustomText textStyle={styles.drawerText} fontFamily={fonts.PoppinsMedium} label='About app' />
        <View style={{height:verticalScale(50)}}/>
        <CustomText textStyle={styles.drawerText} fontFamily={fonts.PoppinsMedium} label='Setting' />
        <View style={{height:verticalScale(40)}}/>

    </DrawerContentScrollView>
  )
}

export default Drawer

const styles = ScaledSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.sidebar,
        borderTopRightRadius:"20@vs",
        borderBottomRightRadius:"20@vs",
        paddingVertical:'23@vs',
        paddingLeft:"10@s",
        paddingRight:'13@s'
    },
    cross:{
        alignSelf:'flex-end',
    },
    accordianContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'30@vs',
        marginBottom:'10@vs'
    },
    drawerText:{
      color:colors.textWhite,
      fontSize:'16@ms',
      marginBottom:'20@vs'
    }
})