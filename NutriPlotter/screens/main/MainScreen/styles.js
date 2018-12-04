import EStyleSheet from 'react-native-extended-stylesheet';
import StyleSheet from 'react-native';

export default EStyleSheet.create({
    container: {
      paddingTop: '4%',
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      width: '$windowWidth',
      height: '$windowHeight',
    },
    title: {
      fontFamily: 'pacifico',
      textAlign: 'center',
      fontSize: 35,
      width: 200,
      marginBottom: 10,
    },
    ButtonText: {
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      fontFamily: 'NunitoSans',
      fontSize: 25 ,
      marginLeft:10,
    }
  });
