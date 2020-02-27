import React, {useState} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Alert,
    TouchableHighlight
} from 'react-native';

import styles from './styles';

export default function Patterns({navigation}) {

    const [modalVisible, setModalVisible] = useState(false);

    handlePress = () => {
        navigation.navigate('MiniBoard');
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={handlePress}
            >
                <Text> Novo </Text>
            </TouchableOpacity>

        </View>
    );
}
