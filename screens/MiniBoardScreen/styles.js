import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 //ZOOM
 container: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: '#fff' ,//"#0a0a0a",
    justifyContent: "center",
    alignItems: "center",
  },
  
  header: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#0a0a0a',
    fontSize: 28.5,
    //fontFamily: 'dogbyte',
  },

  zoomWrapper: {
    flex: 1,
    overflow: 'hidden',
  },

  zoomableView: {
    padding: 10,
    backgroundColor: '#fff',
  },
 
  caption: {
    fontSize: 16,
    color: '#0a0a0a',
    alignSelf: 'center',
    //fontFamily: 'dogbyte',
  },
});