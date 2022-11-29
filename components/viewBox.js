import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

export default function ViewBox(props) {
    return (
        <Pressable onPress={props.func}>
            <View style={[styles.viewbox, props.viewBoxStyle]}>
                <Image
                    style={styles.img}
                    source={props.img}
                />
                <View style={[styles.viewboxContent, props.viewBoxContentStyle]}>
                    <Text style={styles.text}>{props.name}</Text>
                    <Text style={styles.text}>{props.cnic}</Text>
                    <Text style={styles.text}> Plot#{props.plot}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    viewbox: {
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginBottom: 7,
        backgroundColor: "#ffffff",
    },
    viewboxContent: {
        marginLeft: 20,
    },
})