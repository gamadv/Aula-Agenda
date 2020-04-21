import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const agendaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafaf1',
    marginTop: Constants.statusBarHeight
  },

  barAulas: {
    flexDirection: 'row',
    backgroundColor: '#0671ebf1',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    color: 'white',
  },

  textFontWhite: {
    color: 'white',
    fontWeight: 'bold',
  },

  image: {
    width: 25,
    height: 25,
    paddingBottom: 27,
    marginRight: 30,
  },

  imageLeft: {
    width: 14,
    height: 14,
    paddingBottom: 27,
    marginLeft: 25,
  },

  barCollege: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#3598f594',
    width: '100%',
    padding: 5,
    fontSize: 12
  },
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

})

