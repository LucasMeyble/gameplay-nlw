import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';
import { theme } from '../../global/styles/theme';

type Props = {
    title: string;
    subTitle: string;
}

export function ListHeader( {
    title,
    subTitle
}: Props ){

    return(

        <View style={ styles.container }>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.subTitle}>
                {subTitle}
            </Text>
        </View>

    )

}