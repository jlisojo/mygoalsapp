import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        autoCapitalize = 'none'
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 13,
    lineHeight: 15,
    alignSelf: 'center',
    // flex: 2,
    // marginLeft: 30,
    // marginRight: 30,
    borderRadius: 5
  },
  containerStyle: {
    // height: 38,
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center'
  }
};

export { Input };
