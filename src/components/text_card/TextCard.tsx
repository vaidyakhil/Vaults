import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextCardProps } from '../../component_schema';
import { VaultsComponent } from '../types';

const styles = StyleSheet.create({  
    container: {
      justifyContent: 'center',
    },
    hello: {
      fontSize: 20,
      margin: 10,
      color: '#000000',
      textAlign: 'center',
    }
});


const TextCard: VaultsComponent<TextCardProps> = ({ textValue }) => {
  const firstRendering = React.useRef(true);
  React.useEffect(() => {
      if (firstRendering.current) {
          firstRendering.current = false;
          return;
      }

      console.log('\n\n');
      console.log('DEBUG LOG: ', 'TextCard rendered...');
      console.log('\n\n');
  })

    return (
        <View style={styles.container}>
            <Text style={styles.hello}>{textValue}</Text>
        </View>
    );
}

export default React.memo(TextCard);