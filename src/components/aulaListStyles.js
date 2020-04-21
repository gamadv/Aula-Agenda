import { StyleSheet } from 'react-native'

export const aulaListStyles = StyleSheet.create({

    contents: {
        marginTop: 25,
        margin: 30,
        maxHeight: 600,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderTopWidth: 0,
        shadowColor: 'gray',
        backgroundColor: 'white',
        alignItems: 'center',
      },
    
      barData: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ddd8d8f1',
        width: '100%',
        fontWeight: 'bold',
        paddingVertical: 15,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
      },
      dataBlack: {
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
      },
      calendarImg: {
        width: 25,
        height: 25,
        paddingBottom: 27,
        right: -70
      },
    
      // Contents 
      aulaList: {
        marginTop: 15,
        paddingHorizontal: 20
      },
    
      aula: {
        alignItems: 'center',
        flexDirection: 'row',
      },
    
      aulaBoxcontainer: {
        flexDirection: 'row'
      },
    
      aulaDate: {
        padding: 10,
        textAlign: 'center',
        flexDirection: 'row',
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold'
      },
      aulaBox:{
        textAlign: 'center',
        backgroundColor: '#0671ebf1',
        color: 'white',
        width: 40,
        height: 35,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        fontSize: 10
      }

})