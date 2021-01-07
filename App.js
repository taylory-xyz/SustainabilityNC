import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

export default function App() {
		return (
			<ScrollView style={styles.bg}>
   		<View style={styles.container}>
	   	<Text style={styles.header}>SustainabilityNC</Text>
			</View>
			</ScrollView>
		)
}

const styles = StyleSheet.create({
	bg: {
		backgroundColor: 'lightgoldenrodyellow',
	},

	container: {
		backgroundColor: 'darkgreen',
		alignItems: 'center',
		justifyContent: 'center',
	},

	header: {
		padding: 30,
		margin: 10,
		color: 'lightgoldenrodyellow',
		textAlign: 'center',
		fontFamily: 'Arial',
		fontSize: 24,
	},	
});
