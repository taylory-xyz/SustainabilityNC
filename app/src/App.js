import React from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Header from './Header';
import Calculator from './FootPrint';
import MenuButton from './MenuButtons';

class App extends React.Component {
	render() {
		return (
		<ScrollView style={styles.bg}>
			<View style={styles.container}>
			<Header	/>
			</View>
			<Content	/>
			<View	style={styles.board}>
			<MenuButton	title="Carbon Calculator"	details="Get an estimate of how much carbon your household emits"	path="Calculator"	navigation={this.props.navigation}	/>
			<MenuButton title="Learn"	details="Find resources to help reduce individual carbon emissions"	path=""	/>
			<MenuButton	title="Policy"	details="Reach out to members of the government to encourage climate-positive regulations"	path=""	/>
			<MenuButton	title="Corrections"	details="Tell us if there's anything we should fix!"	path=""	/>
			</View>
			</ScrollView>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<Text style={styles.main}>
				{"\n"}
				Welcome to SustainabilityNC! 
				{"\n"}
				We're happy to see you.
				{"\n"}
			</Text>
		);
	}
}

export default App;

const styles = StyleSheet.create({
	bg: {
		backgroundColor: 'lightgoldenrodyellow',
	},

	container: {
		backgroundColor: 'darkgreen',
		alignItems: 'center',
		justifyContent: 'center',
	},

	main: {
		fontFamily: 'Courier New',
		fontSize: 24,
		textAlign: 'center',
		lineHeight: 40,
		color: 'darkgreen',
	},

	board: {
		flex: 1,
		margin: 10,
		flexWrap: 'wrap',
		padding: 10,
		position: 'relative',
		alignContent: 'space-around',
	},

});
