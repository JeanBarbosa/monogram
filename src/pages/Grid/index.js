import React, { useState, useEffect } from 'react';
import {Text, View, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import styles from './styles';

export default function Grid() {
  
   const points = [
    [ {color: '#fff', ref: null},  {color: '#fff', ref: null}],
    [ {color: '#fff', ref: null},  {color: '#333', ref: null}]
  ];

   const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
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
                                    margin: 0.5,
                                }}
                                onPress={ async () => {
                                   console.log(rowIndex, columnIndex)
                              
                                   val.ref.setNativeProps({
                                    backgroundColor: '#333'
                                  });
                                   
                                }}
                            />
                        ))}
                    </View>
                ))}
              </View>

              <Text style={styles.caption}> Jean, Barbosa (16 x 16)</Text>

          </ReactNativeZoomableView>
      </View>
    </View>
  );
}
