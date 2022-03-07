import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AuthStates from '@SilalApp/common/states';
const Home = ({navigation}) => {
  const {user, setUser, setUserData} = AuthStates();
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setUser('welcome to Silal App mono repo')}>
        <Text style={{color: 'red'}}>{user}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
