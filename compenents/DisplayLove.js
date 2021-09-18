import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Colors, ProgressBar, Divider, Caption } from 'react-native-paper'

const DisplayLove = (props) => {
    console.log('from display');
    console.log(props);
    return (
        <View>
            {
                props.data == null ? <ProgressBar style={styles.ProgressBar} progress={0.65} color={Colors.red800} /> :
                    <View style={styles.container} >
                        <Text style={styles.Text}>Your Name: {props.data.fname}</Text>
                        <Text style={styles.Text}>Partner's Name: {props.data.sname}</Text>
                        <Divider />
                        <Text style={{ fontSize: 20, marginTop: 30, fontWeight: 'bold' }} >Your love bond is {props.data.percentage}% strong</Text>
                        {/* <Text style={{ fontSize: 20, marginTop: 5, alignSelf: 'flex-start', marginLeft: -5 }} > {props.data.result} </Text> */}
                        <Caption style={{ fontSize: 20, marginTop: 5, alignSelf: 'flex-start' }}>{props.data.result}</Caption>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginTop: 50
    },
    Text: {
        fontSize: 25
    },
    ProgressBar: {
        marginTop: 30,
        width: 100,
        alignSelf: 'center'
    }
});

export default DisplayLove