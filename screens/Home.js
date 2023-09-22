import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import * as React from 'react';



export default function Home({navigation}) {

    const [text, setText] = React.useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                <View style={styles.content}>
                    <View style={styles.gap}>
                        <Text>Email</Text>
                        <TextInput
                            mode="outlined"
                            // label="Email"
                            right={<TextInput.Affix text="/100" />}
                        />
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput
                            mode="outlined"
                            // label="Email"
                            right={<TextInput.Affix text="/100" />}
                        />
                    </View>
                </View>
                <Button mode="contained" onPress = {() => navigation.push('About')} style={styles.submit}>
                    Submit
                </Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    heading: {
        fontSize: 30,
    },
    content: {
        marginTop: 25,
        marginBottom: 25,
        width: 240
    },
    gap: {
        marginBottom: 20
    },
    submit: {
        borderRadius: 5,
        width: 240
    }
});


