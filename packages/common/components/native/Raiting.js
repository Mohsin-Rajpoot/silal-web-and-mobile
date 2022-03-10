import StarRating from 'react-native-star-rating';
import React from 'react';
import { View, Text } from 'react-native'
class Raiting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5

    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ paddingHorizontal: 15, color: '#000', fontSize: 18, fontFamily: "Poppins-SemiBold" }}>{this.state.starCount}</Text>

        <StarRating
          disabled={false}
          maxStars={5}
          halfStarColor={'#FFC400'}
          emptyStarColor={"#CCD4D6"}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          fullStarColor={'#FFC400'}
          starSize={25}
          containerStyle={{
            maxWidth: 180,
          }}

        />
      </View>
    );
  }
}

export default Raiting