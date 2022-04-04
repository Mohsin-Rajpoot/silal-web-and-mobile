// import StarRating from 'react-native-star-rating';
// import React from 'react';
// import { View, Text } from 'react-native'
// class Raiting extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       starCount: 3.5

//     };
//   }

//   onStarRatingPress(rating) {
//     this.setState({
//       starCount: rating
//     });
//   }

//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <Text style={{ paddingHorizontal: 15, color: '#000', fontSize: 18, fontFamily: "Poppins-SemiBold" }}>{this.state.starCount}</Text>

//         <StarRating
//           disabled={false}
//           maxStars={5}
//           swipeable={true}
//           halfStarColor={'#FFC400'}
//           emptyStarColor={"#CCD4D6"}
//           rating={this.state.starCount}
//           selectedStar={(rating) => this.onStarRatingPress(rating)}
//           fullStarColor={'#FFC400'}
//           starSize={25}
//           containerStyle={{
//             maxWidth: 180,
//           }}

//         />
//       </View>
//     );
//   }
// }

// export default Raiting

import React, { Component } from 'react';
import { View,Text } from 'react-native';
import SwipeableRating from 'react-native-swipeable-rating';


//   onStarRatingPress(rating) {
//     this.setState({
//       starCount: rating
//     });
//   }


class Raiting extends Component {
  state = {
    rating: 0
  }

  handleRating = (rating) => {
    this.setState({ 
      totalCount: rating  });
    console.log(rating,"!23443")
    console.log(this.handleRating,"Harris Saleem")
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>

        <Text style={{ paddingHorizontal: 15, color: '#000', fontSize: 18, fontFamily: "Poppins-SemiBold" }}>{this.state.totalCount}</Text>

        <SwipeableRating
          rating={this.state.totalCount}
          size={32}
          gap={4}
          emptyColor={"#CCD4D6"}
          onPress={this.handleRating}
          xOffset={30}
          swipeable={true}
          allowHalves={true}
          color={'#FFC400'}
          
        />
      </View>
    )
  }
}
export default Raiting