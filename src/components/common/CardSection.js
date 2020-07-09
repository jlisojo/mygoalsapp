import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    // flex: 1,
    // width: '100%',
    padding: 4,
    // backgroundColor: 'rgba(255,255,255,0.0)',
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // position: 'relative'
  }
};

export { CardSection };
