import StarRating from "react-native-star-rating";
import React from "react";
import { View, Text } from "react-native";
import IsTablet from "./IsTablet";
import { ScaledSheet } from "react-native-size-matters";
import fonts from "../../assets/fonts";
import { color } from "react-native-elements/dist/helpers";
import colors from "../../assets/colors";
class Raiting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <View
        style={{
          flexDirection: !IsTablet ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Text style={style.titleValue}>{this.state.starCount}</Text>

        <StarRating
          disabled={false}
          maxStars={5}
          starSize={!IsTablet ? 20 : 30}
          halfStarColor={"#FFC400"}
          emptyStarColor={"#CCD4D6"}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          fullStarColor={"#FFC400"}
          // starSize={25}
          containerStyle={{
            maxWidth: 180,
          }}
        />
      </View>
    );
  }
}

export default Raiting;

const style = ScaledSheet.create({
  titleValue: {
    fontSize: "12@vs",
    fontFamily: fonts.LatoBold,
    color: colors.black,
    marginHorizontal: "10@s",
  },
});
