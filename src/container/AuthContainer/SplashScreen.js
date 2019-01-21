import React from 'react';
import {ImageBackground} from 'react-native';
import AppImages from 'AppImages';

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
     console.log('componentDidMount of splash')
    }

    render() {
        return (
                <ImageBackground
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    resizeMode={'cover'}
                    source={AppImages.findkeySplash}
                />
        )
    }
}

export default SplashScreen;