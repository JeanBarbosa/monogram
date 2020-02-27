import React, {useState} from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  SafeAreaView 
} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import styles from './styles';
import NewModal from '../../components/NewModal';
import Palette from '../../components/Palette';
import Grid from '../../components/Grid';

export default function MiniBoardScreen() {

  const [color, setColor] = useState('#333');
  const colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#ffffff"];

  const [pattern, setPattern] = useState(null);

  onSelect = color => { console.log(pattern);  setColor(color) };

  function onChangeGrid(data) {
    //save points project
    console.log(data);
  }

  if(!pattern){
    return (
      <NewModal visible={true} onCreate={(pattern) => setPattern(pattern) } />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Monogram</Text>
      </View>

      <View style={styles.zoomWrapper}>
          <ReactNativeZoomableView
              zoomEnabled={true}
              maxZoom={2.5}
              minZoom={1.0}
              zoomStep={0.5}
              initialZoom={1.0}
              bindToBorders={true}
              style={styles.zoomableView}
          >

            <Grid selectedColor={color} dimension={{x: 3, y: 3}} onChange={onChangeGrid} />
            <Text style={styles.caption}> Jean, Barbosa </Text>

          </ReactNativeZoomableView>
        </View>

        <View>
          <Palette colors={colors}  onSelect={onSelect} />
        </View>

    </SafeAreaView>
  );
}