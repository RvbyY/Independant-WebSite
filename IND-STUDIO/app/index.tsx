// import "./global.css"
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native';
import { Platform } from 'react-native';
import { ScreenContentWrapper } from "react-native-screens"
import WidgetListBoxes from '@/components/WidgetList';

const Home =() => {
    return (
        <View style={styles.container}>
            <WidgetListBoxes/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e3e3ff'
    },
});

export default Home