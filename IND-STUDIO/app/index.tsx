// import "./global.css"
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { ScrollView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native';
import { Platform } from 'react-native';
import { ScreenContentWrapper } from "react-native-screens"
import WidgetListBoxes from '@/components/WidgetList';
import WidgetBox from '@/components/profileWidget';

const Home =() => {
    return (
        <View style={styles.container}>
            <WidgetBox boxUri='https://paradoxeparis.com/cdn/shop/files/logo_site_paradoxe.png?v=1688402629&width=135' color='#000'/>
            <WidgetBox boxUri='https://imgs.search.brave.com/pW3lXeot0E9tU1GQ7M7EMwFkfPCNuXfaNUKZH7rQ4VM/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/dHJ1c3RwaWxvdC5u/ZXQvY29uc3VtZXJz/aXRlLWJ1c2luZXNz/dW5pdGltYWdlcy82/NGE5OTAwNWE5Njkw/ODUwMDc3YWFlNGMv/cHJvZmlsZS1kZXNj/cmlwdGlvbi9Mb2dv/Xy1fb3JhbmdlXzIu/cG5nP3Y9MTcxMDE4/NDM3OA' color='#fff'/>
            <WidgetBox boxUri='https://hunidesign.com/cdn/shop/files/logo-full_450x.svg?v=1751828627' color='#969393ff'/>
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