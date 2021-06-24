import React from "react";
import { View, Text } from 'react-native'
import { styles } from "./style";


import { Avatar } from "../Avatar";

export function Profile() {
    return(
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/lucasMeyble.png"/>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
                    </Text>

                    <Text style={styles.userName}>
                        Lucas
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitoria
                </Text>
            </View>

        </View>
    )
}