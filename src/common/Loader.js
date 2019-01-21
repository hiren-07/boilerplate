/**
 * @providesModule Loader
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Modal, Text, ActivityIndicator } from 'react-native';
import LoaderStyle from 'LoaderStyle';
import withLoader from 'withLoader';

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { loaderState } = this.props;
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={loaderState}
                onRequestClose={() => {console.log('close modal')}}>
                <View style={LoaderStyle.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </Modal>
        );
    }
}

export default withLoader(Loader);

