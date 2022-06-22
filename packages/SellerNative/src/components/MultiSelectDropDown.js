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
          borderColor: '#05AE4B',
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

// import React, { Component, Fragment } from 'react';
// import SearchableDropdown from 'react-native-searchable-dropdown';

// var items = [
//   {
//     id: 1,
//     name: 'JavaScript',
//   },
//   {
//     id: 2,
//     name: 'Java',
//   },
//   {
//     id: 3,
//     name: 'Ruby',
//   },

// ];
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItems: [
//         {
//           id: 7,
//           name: 'Go',
//         },
//         {
//           id: 8,
//           name: 'Swift',
//         }
//       ]
//     }
//   }
//   render() {
//     return (
//       <Fragment>

//         <SearchableDropdown
//           multi={true}
//           selectedItems={this.state.selectedItems}
//           onItemSelect={(item) => {
//             const items = this.state.selectedItems;
//             items.push(item)
//             this.setState({ selectedItems: items });
//           }}
//           containerStyle={{ padding: 5, }}
//           onRemoveItem={(item, index) => {
//             const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
//             this.setState({ selectedItems: items });
//           }}

//           itemStyle={{
//             padding: 10,
//             marginTop: 2,
//             // backgroundColor: 'red',
//             // borderColor: '#05AE4B',
//             // borderWidth: 1,
//             // borderRadius : 5,
//           }}
//           itemTextStyle={{ color: '#222' }}
//           itemsContainerStyle={{
//             padding: 5, borderWidth: 2,
//             borderColor: '#05AE4B', borderRadius: 5,
//             backgroundColor: 'red', maxHeight: 140, flax: 1
//           }}
//           items={items}
//           // chip={true}
//           resetValue={false}
//           textInputProps={
//             {
//               placeholder: "placeholder",
//               underlineColorAndroid: "transparent",
//               style: {
//                 padding: 12,
//                 borderWidth: 1,
//                 borderColor: '#05AE4B',
//                 borderRadius: 5,
//               },
//               // onTextChange: text => console.log(text),
//               onItemSelect: val => consoleS.log(val)
//             }
//           }
//           listProps={
//             {
//               nestedScrollEnabled: true,
//             }
//           }
//         />

//       </Fragment>
//     );
//   }
// }

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const MultiSelectDropDown = () => {

// const Data=[
//   {
//         id: 1,
//         name: 'Harris',
//       },
//       {
//         id: 2,
//         name: 'Ahmad',
//       },
//       {
//         id: 3,
//         name: 'Zubair Bhai',
//       },
// ]

//   return (
//     <View>

//     </View>
//   )
// }

// export default MultiSelectDropDown

// const styles = StyleSheet.create({})
