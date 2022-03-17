import { map as _map } from 'lodash-es';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TagProps, ColorTokens, DocumentCardProps } from '../../component_schema';
import { VaultsComponent } from '../types';
import ColorTokenMap from '../color_map';
import { Tag } from '../tag';

const commonStyles = StyleSheet.create({ 
    container: {
        borderColor: ColorTokenMap[ColorTokens.BLUE_DARK],
        borderWidth: 2,
        borderStyle: 'dashed',
        padding: 16,
        marginHorizontal: 4,
        marginVertical: 16,
        borderRadius: 16,
        backgroundColor: ColorTokenMap[ColorTokens.BLUE_AQUA],
    },
    titleText: {
        fontSize: 20,
        color: ColorTokenMap[ColorTokens.BLACK_100],
    },
    contentContainer: {
        backgroundColor: ColorTokenMap[ColorTokens.WHITE_100],
        padding: 8,
        marginVertical: 16,
        borderRadius: 4,
    },
    contentText: {
        fontSize: 16,
        color: ColorTokenMap[ColorTokens.BLACK_100],
        textAlign: 'justify',
        fontStyle: 'italic'
    },
    tagsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
        marginBottom: 8
    },
});

const DocumentCard: VaultsComponent<DocumentCardProps> = ({ titleText, content, tags, tapAction, handleAction }) => {
    const onClick = () => {
      if (handleAction && tapAction) {
        handleAction(tapAction)
      }
    }

    return (
        <TouchableOpacity style={commonStyles.container} onPress={onClick} disabled={!tapAction}>
          <Text style={commonStyles.titleText}> {titleText} </Text>
          <View style={commonStyles.contentContainer}>
            <Text style={commonStyles.contentText}> {content} </Text>
          </View>
          {
              tags && <View style={commonStyles.tagsContainer}>
              {
                _map(tags, (tag: TagProps) => (
                    <Tag {...tag} handleAction={handleAction} key={tag.id} />
                ))
              }
            </View>
          }
          
        </TouchableOpacity>
    );
}

export default DocumentCard;