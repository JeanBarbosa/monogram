import React, { useState, useEffect } from 'react';
import { 
  View, 
  TouchableOpacity,
  Dimensions, 
} from 'react-native';

export default function Grid(props) {
  
  const [points, setPoints] = useState([[]]);
  const { width } = Dimensions.get("window");

  useEffect(() => {
    
    const { x, y } = props.dimension;
    setPoints(makePoints(x, y));

  }, []);

  makePoints = (x, y) => {

    const points = [];

    for( let i = 0; i < x; i++) {
        
        const data = [];

        for( let i = 0; i < y; i++) {

            const point = { 
                position: {x: '', y: '' },
                symbol: [],
                color: '#ffffff',
                ref: null,
                outline: {
                    color: "",
                    position: 'top'
                }
            }

            data.push(point);
        }

        points.push(data);
    }

    return points;
}

    if(points.length <= 0){
        return null; //carregando
    }

  return (       
    <View 
        style={{ height: width * 0.875, width: width * 0.875, flexDirection: 'row' }}>
    
        {points.map((item, columnIndex) => (
            <View 
                style={{ flex: 1, flexDirection: 'column', margin: 0 }} 
                key={columnIndex}>

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
                            
                            val.position.x = rowIndex;
                            val.position.y = columnIndex;

                            val.color = props.selectedColor;

                            val.ref.setNativeProps({
                                backgroundColor: props.selectedColor
                            });

                            props.onChange(points);
                        }}

                        onLongPress ={(e)=>{
                            alert(' onLongPress');
                        }}
                    />
                ))}
            </View>
        ))}
    </View>
  );
}