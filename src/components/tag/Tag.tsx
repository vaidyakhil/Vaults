import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TagProps, ColorTokens } from '../../component_schema';
import { VaultsComponent } from '../types';
import ColorTokenMap from '../color_map';

const commonStyles = StyleSheet.create({ 
    container: {
      backgroundColor: ColorTokenMap[ColorTokens.BLUE_DARK],
      padding: 4,
      paddingHorizontal: 8,
      borderRadius: 8
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
      color: ColorTokenMap[ColorTokens.WHITE_100]
    },
});

const Tag: VaultsComponent<TagProps> = ({ text, tapAction, handleAction }) => {
    const onClick = () => {
      if (handleAction && tapAction) {
        handleAction(tapAction)
      }
    }

    return (
        <TouchableOpacity style={commonStyles.container} onPress={onClick}>
          <Text
           style={commonStyles.text}
          >
            {text}
          </Text>
        </TouchableOpacity>
    );
}

export default Tag;