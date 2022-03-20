import map from 'lodash-es/map';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, Animated, Text } from 'react-native';
import { ActionData, ButtonTypeToken, ColorTokens } from '../../component_schema';
import { Button } from '../button';
import ColorTokenMap from '../color_map';

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({ 
    container: {
        height,
        width,
        justifyContent: 'space-between'
    },
});

const ToastMessage = ({ message, onEnd }: { message: string, onEnd: (message: string) => void }) => {
    const progress = useRef(new Animated.Value ( 0 )).current;
    
    useEffect(() => {
        Animated.sequence ([
            Animated.timing (
                progress,
                {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true
                }
            ),
            Animated.timing (
                progress,
                {
                    toValue: 0,
                    duration: 1000,
                    delay: 2000,
                    useNativeDriver: true
                }
            )
        ]).start(() => { onEnd(message); })
    }, [])

    return (
        <Animated.View style={{
            backgroundColor: ColorTokenMap[ColorTokens.BLUE_AQUA],
            padding: 8,
            marginHorizontal: 8,
            marginBottom: 40,
            borderRadius: 8,
            transform: [{
                translateY: progress.interpolate ( {
                    inputRange: [0, 1],
                    outputRange: [0, -40]
                })
            }],
            opacity: progress
        }}>
            <Text>{message}</Text>
        </Animated.View>
    )
}

const getRandMessage = () => {
    return "Hello World "  + Math.floor(Math.random() * 100);
}

const ToastStack = () => {
    const [messages, setMessages] = useState<string[]>([]);
    
    const handleAction = (actionData: ActionData) => {
        setMessages ( [getRandMessage(), ...messages]);
    }

    const onEnd = (endMessage: string) => {
        const updatedMessages = messages.filter ((message) => { return message !== message })
        setMessages ( updatedMessages);
    }

    return (
        <View style={styles.container} >
            <Button 
                buttonText={'Add toast'}
                buttonTypeToken={ButtonTypeToken.PRIMARY_BIG}
                tapAction={{ type: "", data: {}}}
                handleAction={handleAction}
            />

            {
                <View>
                    {
                        map(messages, (message: string) => (
                            <ToastMessage key={message} message={message} onEnd={onEnd}/>
                        ))
                    }
                </View>
            }
        </View>
        
    );
}

export default ToastStack;