import React, {useState} from 'react';
import {Text, View} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';

const K_OPTIONS = [
  {
    item: 'Juventus',
    id: 'JUVE',
  },
  {
    item: 'Real Madrid',
    id: 'RM',
  },
];

function MultiSelectDropDown() {
  const [selectedTeams, setSelectedTeams] = useState([]);
  console.log(selectedTeams, 'harris');
  return (
    <View style={{width: '90%'}}>
      <SelectBox
        label=""
        options={K_OPTIONS}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        // hideInputFilter={false}
        selectedValues={selectedTeams}
        inputFilterStyle={{}}
        optionsLabelStyle={{}}
        inputFilterContainerStyle={{}}
        arrowIconColor={'#002733'}
        searchIconColor={'gray'}
        toggleIconColor={'gray'}
        inputPlaceholder={'List all contained allergens'}
        optionContainerStyle={{}}
        multiListEmptyLabelStyle={{
          borderRadius: 5,
          // borderWidth: 1,
          // backgroundColor:'red'
        }}
        containerStyle={{
          borderRadius: 5,
          borderColor: '#5AB3A8',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        multiOptionsLabelStyle={{}}
      />
    </View>
  );

  function onMultiChange() {
    return item => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }
}

export default MultiSelectDropDown;
