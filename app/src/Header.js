import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {GiPlantsAndAnimals} from 'react-icons/gi';

export default class Header extends Component {
	render() {
		return (
			<Text style={styles.header}>
				<GiPlantsAndAnimals	/>
				{"\ "}
				SustainabilityNC
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		padding: 30,
		margin: 10,
		color: 'lightgoldenrodyellow',
		textAlign: 'center',
		fontFamily: 'Courier New',
		fontSize: 36,
	},
});
