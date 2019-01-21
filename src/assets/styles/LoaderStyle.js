/**
 * @providesModule LoaderStyle
 */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    },
    noContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0.001,
        height: 0.001
    },
    empty:{
        height:0,
        width:0
    },
});
export default styles;