import React from 'react';
import { StyleSheet , View, Text, TouchableOpacity } from 'react-native';

export default ({elevation, onPress, children}) => {
	const Wrapper = onPress? TouchableOpacity : View;

	return(
		<Wrapper style={styles.container} onPress={onPress}>
			{children}
		</Wrapper>
	)
};

const styles = StyleSheet.create({
  container: {
		alignItems: 'center',
		justifyContent: "center",
		backgroundColor: '#DDDDDD',
		padding: 30, 
		height: 100,
		width: '80%',
	},
});
