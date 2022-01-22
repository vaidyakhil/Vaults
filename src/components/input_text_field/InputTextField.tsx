import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { InputTextFieldProps } from '../../component_schema';
import { VaultsComponent } from '../types';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },
});

const InputTextField: VaultsComponent<InputTextFieldProps> = ({ textValue, placeHolderValue, keyboardType, onTextChangeAction, handleAction}) => {
    const [text, setText] = React.useState(textValue || '');
    const isFirstRender = React.useRef(true);

    const onChangeText = (updatedText: string) => {
        setText(updatedText)
    }

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (handleAction && onTextChangeAction) {
            handleAction({
                ...onTextChangeAction,
                data: {
                    ...onTextChangeAction.data,
                    _textValue: text
                }
            })
        }
    }, [text])

    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeHolderValue}
            value={text}
            keyboardType={keyboardType}
      />
    )
};

export default InputTextField;