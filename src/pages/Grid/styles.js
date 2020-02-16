import {StyleSheet} from 'react-native';

export default StyleSheet.create({
     //ZOOM
     container: {
        flex: 1,
        //backgroundColor: '#e7e7e7',
        paddingBottom: 30,
        backgroundColor: "#0a0a0a",
        justifyContent: "center",
        alignItems: "center",
      },
      
      header: {
        backgroundColor: '#0a0a0a',
        paddingTop: 50,
        paddingBottom: 15,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
  
      title: {
        color: '#fff',
        fontSize: 28.5,
        //fontFamily: 'dogbyte',
      },
  
      zoomWrapper: {
        flex: 1,
        overflow: 'hidden',
      },
  
      zoomableView: {
        padding: 10,
        backgroundColor: "#0a0a0a",
      },
     
      caption: {
        fontSize: 16,
        color: '#fff',
        alignSelf: 'center',
        //fontFamily: 'dogbyte',
      },
});