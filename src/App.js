import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Header from './Header';

class App extends Component {
	render() {
		return (
			<ScrollView style={styles.bg}>
			<View style={styles.container}>
			<Header	/>
			</View>
			<Content	/>
			<View	style={styles.board}>
			<Button	title="Carbon Calculator"	details="Get an estimate of how much carbon your household emits"	/>
			<Button title="Learn"	details="Find resources to help reduce individual carbon emissions"	/>
			<Button	title="Policy"	details="Reach out to members of the government to encourage climate-positive regulations"	/>
			<Button	title="Corrections"	details="Tell us if there's anything we should fix!"	/>
			</View>
			</ScrollView>
		);
	}
}

class Content extends Component {
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

class Button extends Component {
	render(props) {
		return (
			<TouchableOpacity>
			<Text	style={styles.button}>
				{this.props.title}:
				{"\n"}
				{this.props.details}</Text>
			</TouchableOpacity>
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

	button: {
		margin: 10,
		padding: 30,
		justifyContent: 'center',
		color: 'darkgreen',
		borderWidth: 1,
		borderColor: 'darkgreen',
		textAlign: 'center',
		fontFamily: 'Courier New',
		fontSize: 20,
	},

});
