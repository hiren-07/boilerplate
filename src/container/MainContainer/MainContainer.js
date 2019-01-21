/**
 * @providesModule MainContainer
 */
import React, {Component} from 'react';
import { View } from 'react-native';
import Loader from 'Loader';
import MainContainerStyle from 'MainContainerStyle';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        return (
            <View style={MainContainerStyle.mainContainer}>
                <Loader/>
            </View>
        );
    }
}

export default MainContainer;