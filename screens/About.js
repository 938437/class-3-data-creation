import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { bookStore } from '../data/books';
import { useState } from 'react';

export default function About({navigation}) {

    const [ data, setData ] = useState();

    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>My booklist</Text>
            <View style={styles.content}>
                <Text style={styles.title}>- Java</Text>
                <Button mode="contained" onPress={() => addingData()} style={styles.show_data}>Show detail</Button>
                {
                    data && data.books.map((b, index) => {
                        if(b.category.toLowerCase() == "java") {
                            return (
                                <View key={index}>
                                    <Text variant="displaySmall">{b.title}</Text>
                                    {
                                    b.authors && b.authors.map((a, ind) => {
                                        return(
                                            <Text variant="titleSmall" key={ind}>
                                                {a}
                                            </Text>
                                        )
                                    })
                                }
                                </View>
                            )
                        }
                    })
                }
            </View>
            <View style={styles.button}>
                <Button mode="contained" onPress = {() => navigation.goBack()} style={styles.go_back}>
                    Go back
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    heading: {
        fontSize: 30,
        textAlign: 'center'
    },
    content: {
        marginLeft: 40,
        marginTop: 30
    },
    title: {
        fontSize: 17
    },
    show_data: {
        width: 125,
        borderRadius: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    go_back: {
        width: 200,
        borderRadius: 10
    }
});
