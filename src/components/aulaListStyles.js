import { StyleSheet } from 'react-native'

export const aulaListStyles = StyleSheet.create({

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
        fontSize: 11,
        fontWeight: 'bold',
        paddingHorizontal: 7
      },
      aulaBoxVago:{
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        color: 'white',
        width: 40,
        height: 35,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        fontSize: 9,
        fontWeight: 'bold'
      }

})