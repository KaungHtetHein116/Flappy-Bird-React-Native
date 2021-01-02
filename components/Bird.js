import React from 'react';
import {View, Image} from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {
  const birdWidth = 60;
  const birdHeight = 60;

  return (
    <View
      style={{
        position: 'absolute',
        width: birdWidth,
        height: birdHeight,
        left: birdLeft - birdWidth / 2,
        bottom: birdBottom - birdHeight / 2,
      }}>
      <Image
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQ9WDKqitwZSPtd9QWn4yjh8mTg8CLevBig&usqp=CAU',
        }}
        style={{
          height: birdHeight,
          width: birdWidth,
          alignSelf: 'center',
          backgroundColor: 'transparent',
        }}
      />
    </View>
  );
};

export default Bird;
