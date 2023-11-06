import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFilmes: {
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  // CARD SECTION
  containerCardSection:{
    display: 'flex',
    alignItems: 'center',
  },
  containerCard: {
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    width: 140,
    borderRadius: 22,
    shadowColor: '#000',
        shadowOffset: {
            width: 5.5,
            height: 5.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

  tituloCard: {
    color: '#263238',
    fontSize: 12,
    paddingTop: 8,
    textTransform: 'uppercase',
    fontWeight:'bold',
    fontFamily: 'Arial'
  },

  imagemCard: {
    backgroundColor: 'trasnparent',
    width: '80%',
    height: 100,
    borderRadius: 8
  },

});

export default style;