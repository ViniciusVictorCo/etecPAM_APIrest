import { StyleSheet } from "react-native";

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: "center"
    },
    viewHeader: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 10
    },
    textHeader: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 0
    },
    img: {
        width: 50,
        height: 50
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
})

export default style;