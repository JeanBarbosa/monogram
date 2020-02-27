import React, {useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal, 
    Alert
} from 'react-native';

export default function NewModal(props) {

    const [modalVisible, setModalVisible] = useState(props.visible);
    const [name, setName] = useState('');
    const [dimension, setDimension] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');

    newPattern = () => {

        const pattern = {
            name,
            dimension,
            type,
            description,
            points: null
        }

        return pattern;
    }

  return (
    <View style={styles.container}>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                console.log('Modal has been closed.');
            }}
        >
            <View style={styles.form}>
                
                <Text style={styles.label} >
                    Nome *
                </Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />

                <Text style={styles.label} >
                    Dimensão *
                </Text>
                <TextInput
                    value={dimension}
                    onChangeText={setDimension}
                    style={styles.input}
                />

                <Text style={styles.label} >
                    Tipo *
                </Text>
                <TextInput
                    value={type}
                    onChangeText={setType} 
                    style={styles.input}
                />

                <Text style={styles.label} >
                    Descrição
                </Text>
                <TextInput
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={() => {
                            props.onCreate(newPattern());
                        }
                    }
                    style={styles.button}
                >
                    <Text style={styles.buttonText}> Criar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                    style={styles.buttonCancel}
                >
                    <Text style={styles.buttonCancelText}> Cancelar </Text>
                </TouchableOpacity>

            </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        marginTop: 22
    },

    form: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15
    },

    label : {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
      },

      input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 4,
      },

    button: {
        height: 42,
        backgroundColor: '#5271ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 2.8,
        fontSize: 16
    },

    buttonCancel: {
        marginTop: 30,
        paddingHorizontal: 50,
        alignItems: 'center'
    },

    buttonCancelText: {
        color: '#999',
        fontSize: 16
    }
});