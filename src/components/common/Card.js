import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    width: '100%',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // marginLeft: 5,
    // marginRight: 5,

    // elevation: 5,
    // marginTop: 10

    justifyContent: 'center',
    // alignItems: 'center',
  }
};

export { Card };
