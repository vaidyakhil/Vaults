import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions, PanResponder, Animated } from 'react-native';
import { VaultsComponent } from '../types';

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({ 
    container: {
        height,
        width,
        backgroundColor: '#fafafa',
    },
    ball: {
        height: 64,
        width: 64,
        backgroundColor: '#123123',
        borderRadius: 32
    },
});


const MoveBall = () => {
    const positions = useRef (
        new Animated.ValueXY( { x: 32, y: 32 })
    ).current

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                if (event.nativeEvent.changedTouches.length == 1) {
                    positions.setValue ( { x: gestureState.moveX, y: gestureState.moveY })
                }
            },
            onPanResponderRelease: (event, gestureState) => {
                Animated.spring(positions, {
                    toValue: { x: 32, y: 32 },
                    damping: 10,
                    useNativeDriver: true
                }).start()
            }
        })
    ).current;

    return (
        <View style={styles.container} >
            <Animated.View
                {...panResponder.panHandlers}
                style={[styles.ball, {
                    transform: [
                        { translateX: Animated.subtract(positions.x, 32) },
                        { translateY: Animated.subtract(positions.y, 32) }
                    ]
                }]}
            />
        </View>
        
    );
}

export default MoveBall;