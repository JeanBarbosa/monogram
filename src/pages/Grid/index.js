import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView, 
  View, 
  Dimensions, 
  TouchableOpacity, 
  TouchableHighlight } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import Palette from '../../components/Palette';
import styles from './styles';

import ps from './points';

export default function Grid() {
  
   const points = ps.pattern;

  const [color, setColor] = useState('#333');
  const colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B", "#ffffff"];

  const { width } = Dimensions.get("window");

  onSelect = color => setColor(color);

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
          
            <View style={{ height: width * 0.875, width: width * 0.875, flexDirection: 'row' }}>
            
                {points.map((item, columnIndex) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 0 }} key={columnIndex}>
                        {item.map((val, rowIndex) => (
                            <TouchableOpacity
                                activeOpacity={1}
                                ref={(e) => val.ref = e }
                                key={`${rowIndex}.${columnIndex}`}
                                style={{
                                    flex: 1,
                                    backgroundColor: val.color,
                                    margin: -1,
                                    borderColor: '#0a0a0a', borderWidth: 0.3,
                                }}
                                onPress={ async () => {
                                   console.log(rowIndex, columnIndex)
                              
                                   val.ref.setNativeProps({
                                    backgroundColor: color
                                  });
                                   
                                }}

                                onLongPress ={(e)=>{
                                  alert(' onLongPress');
                                  console.log(Date.now());
                                  console.log(e.type); //undefined
                               }}
                            />
                        ))}
                    </View>
                ))}
              </View>

              <Text style={styles.caption}> Jean, Barbosa ({ points.length} x { points.length})</Text>
          </ReactNativeZoomableView>
      </View>

      <View>
        <Palette colors={colors}  onSelect={onSelect} />
      </View>

    </SafeAreaView>
  );
}
