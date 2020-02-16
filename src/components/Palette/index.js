import React, {useState} from 'react';
import { 
    Text,
    View,
    FlatList,
    Icon,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Palette(props) {

    const [colors, setColors] = useState(props.colors);
    const [selectedColor, setSelectedColor] =  useState(null);

    //Adicionar uma cor a paleta
    //Remover uma cor da paleta
    //Retorna a cor selecionada
    //Exibi uma flat list com as cores do array

    _keyExtractor = (item, index) => `${index}`;

    getContrastYIQ = hexcolor => {
        var r = parseInt(hexcolor.substring(1, 3), 16);
        var g = parseInt(hexcolor.substring(3, 5), 16);
        var b = parseInt(hexcolor.substring(5, 7), 16);
        var yiq = (r * 299 + g * 587 + b * 114) / 1000;
        return yiq >= 128 ? '#444' : '#fff';
    };

    return  (
        <View>
             <FlatList
                data={props.colors}
                keyExtractor={_keyExtractor}
                horizontal={true}
                keyboardShouldPersistTaps="always"
                style={{ maxHeight: 75 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[styles.circle, { backgroundColor: item }]}
                      onPress={() => {
                        setSelectedColor(item);
                        props.onSelect(item);
                      }}>
                      {selectedColor === item &&
                        <MaterialIcons 
                            name="check" 
                            style={{ color: getContrastYIQ(item), fontSize: 24 }} />
                      }
                    </TouchableOpacity>
                  )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
      width: 50,
      height: 50,
      borderRadius: 50,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });