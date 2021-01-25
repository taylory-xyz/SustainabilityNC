import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack';
import {GiPlantsAndAnimals} from 'react-icons/gi';
import { withNavigation } from 'react-navigation';

class MenuButton extends React.Component {
	render(props) {
		return (
			<TouchableOpacity
					onPress={ () => {
						this.props.navigation.navigate(this.props.path);
					}	}	>
				<Text style={styles.button}>
					{this.props.title + ":\n\n" + this.props.details + "\n\n"}
					<GiPlantsAndAnimals	/>
				</Text>
			</TouchableOpacity>
		);
	}
}

export default MenuButton;

//export default withNavigation(MenuButton);

const styles = StyleSheet.create({
	button: {
		margin: '10%',
		padding: '10%',
		justifyContent: 'center',
		color: 'darkgreen',
		textAlign: 'center',
		fontFamily: 'Courier New',
		fontSize: 20,
		borderWidth: 5,
		borderColor: 'darkgreen',
	},
});
