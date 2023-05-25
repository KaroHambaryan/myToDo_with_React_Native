import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextAreaInput = () => {
  const [text, setText] = useState('');

	const handleChangeText = (value) => {
		setText(value);
		console.log(text);
	}
  return (
    <>
      <TextInput
        value={text}
        onChangeText={handleChangeText}
        placeholder="Notes"
        multiline={true}
				style={styles.ReactText}
      />
    </>
  );
};

const styles = StyleSheet.create({
	ReactText: {
		paddingHorizontal: 6,
		paddingVertical: 8,
		borderWidth: 1,
		borderRadius: 6,
		borderColor: '#E0E0E0',
		backgroundColor: '#FFFFFF',
		maxWidth: 358,
		height: 177,
	}
});

export default TextAreaInput;
