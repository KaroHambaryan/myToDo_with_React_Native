import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeTextArea, selectTextArea } from './textAreaSlice';


const TextAreaInput = () => {
	const dispatch = useDispatch();
	const text = useSelector(selectTextArea);
  return (
    <>
      <TextInput
        value={text}
        onChangeText={(e)=>dispatch(changeTextArea(e))}
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