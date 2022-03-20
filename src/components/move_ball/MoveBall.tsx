import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions, PanResponder, Animated } from 'react-native';

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({ 
    container: {
        height: 4 * height,
        width,
        backgroundColor: '#fafafa',
    },
    ball: {
        height: 128,
        width: 128,
        backgroundColor: '#123123',
        borderRadius: 32
    },
});

const getMultiplier = (p1: number[], p2: number[]): number => {
    return 1 + 2 *((Math.sqrt( (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]))) / width);
}

const MoveBall = () => {
    const positions = useRef (
        new Animated.ValueXY( { x: width/2, y: height/2 })
    ).current

    const scaleFactor = useRef (
        new Animated.Value (1)
    ).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                if (event.nativeEvent.changedTouches.length >= 2) {
                    const touches = event.nativeEvent.changedTouches;
                    
                    scaleFactor.setValue ( 
                        getMultiplier(
                            [touches[0].locationX, touches[0].locationY],
                            [touches[1].locationX, touches[1].locationY]
                        )
                    )
                } else if (event.nativeEvent.changedTouches.length == 1){
                    positions.setValue ( { x: gestureState.moveX, y: gestureState.moveY })
                }
            },
            onPanResponderRelease: (event, gestureState) => {
                Animated.parallel
                ([
                    Animated.spring(scaleFactor, {
                        toValue: 1,
                        damping: 2,
                        useNativeDriver: true
                    }),
                    Animated.spring(positions, {
                        toValue: { x: width/2, y: height/2 },
                        damping: 2,
                        useNativeDriver: true
                    })
                ]).start()
            }
        })
    ).current;

    return (
        <View style={styles.container} >
            <Animated.View
                {...panResponder.panHandlers}
                style={[styles.ball, {
                    transform: [
                        { translateX: Animated.subtract(positions.x, 64) },
                        { translateY: Animated.subtract(positions.y, 64) },
                        { scale: scaleFactor }  
                    ],
                }]}
            />
        </View>
        
    );
}

export default MoveBall;