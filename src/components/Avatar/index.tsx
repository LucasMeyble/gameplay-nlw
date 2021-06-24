import React from "react";
import { Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";
import { styles } from "./style";

type Props = {
    urlImage: string
}

export function Avatar({ urlImage }: Props) {
    return(
        <LinearGradient 
            style={styles.container}
            colors={[theme.colors.secondary80, theme.colors.secondary100]}
        >
            <Image 
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}