import React from "react";
import { View } from 'react-native';
import { Profile } from "../../components/Profile/indes";
import { ButtonAdd } from "../../components/ButtonAdd";
import { styles } from "./style";


export function Home() {
    
    return(
        <View>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

        </View>
    )

}