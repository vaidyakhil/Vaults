import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonProps, ButtonTypeToken } from '../../component_schema';
import { VaultsComponent } from '../types';
import {
  primaryButtonStyles,
  secondaryButtonStyles,
  smallButtonStyles,
  bigButtonStyles,
} from './utils'

const commonStyles = StyleSheet.create({ 
    container: {
      alignSelf: 'flex-start',
      borderRadius: 6,
      padding: 12,
    },
    buttonText: {
      fontSize: 20,
      textAlign: 'center'
    },
});

const getTextStyles = (buttonTypeToken: ButtonTypeToken) => {
  switch (buttonTypeToken) {
    case ButtonTypeToken.PRIMARY_SMALL: {
      return {
        ...primaryButtonStyles.text,
        ...smallButtonStyles.text
      };
    }
    case ButtonTypeToken.PRIMARY_BIG: {
      return {
        ...primaryButtonStyles.text,
        ...bigButtonStyles.text
      };
    }
    case ButtonTypeToken.SECONDARY_SMALL: {
      return {
        ...secondaryButtonStyles.text,
        ...smallButtonStyles.text
      };
    }
    case ButtonTypeToken.SECONDARY_BIG: {
      return {
        ...secondaryButtonStyles.text,
        ...bigButtonStyles.text
      };
    }
  }
}

const getContainerStyles = (buttonTypeToken: ButtonTypeToken) => {
  switch (buttonTypeToken) {
    case ButtonTypeToken.PRIMARY_SMALL: {
      return {
        ...primaryButtonStyles.container,
        ...smallButtonStyles.container
      };
    }
    case ButtonTypeToken.PRIMARY_BIG: {
      return {
        ...primaryButtonStyles.container,
        ...bigButtonStyles.container
      };
    }
    case ButtonTypeToken.SECONDARY_SMALL: {
      return {
        ...secondaryButtonStyles.container,
        ...smallButtonStyles.container
      };
    }
    case ButtonTypeToken.SECONDARY_BIG: {
      return {
        ...secondaryButtonStyles.container,
        ...bigButtonStyles.container
      };
    }
  }
}

const Button: VaultsComponent<ButtonProps> = ({ buttonText, buttonTypeToken, tapAction, handleAction }) => {

    const onClick = () => {
      if (handleAction && tapAction) {
        handleAction(tapAction)
      }
    }

    return (
        <TouchableOpacity style={[commonStyles.container, getContainerStyles(buttonTypeToken)]} onPress={onClick}>
          <Text
            style={[commonStyles.buttonText, getTextStyles(buttonTypeToken)]}
          >
            {buttonText}
          </Text>
        </TouchableOpacity>
    );
}

export default Button;