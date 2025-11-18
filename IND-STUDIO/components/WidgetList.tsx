import { View, Text, Image} from "react-native";
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const WidgetListBoxes = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flexDirection: 'column'}}>
                <View style={{
                    marginBottom: 15,
                    borderRadius: 25,
                    height: 150,
                    backgroundColor: '#000',
                    flex: .8,
                    overflow: 'hidden'
                }}>
                    <Image
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                        resizeMode='contain'
                        source={{uri: 'https://paradoxeparis.com/cdn/shop/files/logo_site_paradoxe.png?v=1688402629&width=135'}}
                    />
                </View>
                <View style={{paddingVertical: 10, marginBottom: 15, borderRadius: 25, alignItems: 'center', height: 150, backgroundImage: 'https://imgs.search.brave.com/pW3lXeot0E9tU1GQ7M7EMwFkfPCNuXfaNUKZH7rQ4VM/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/dHJ1c3RwaWxvdC5u/ZXQvY29uc3VtZXJz/aXRlLWJ1c2luZXNz/dW5pdGltYWdlcy82/NGE5OTAwNWE5Njkw/ODUwMDc3YWFlNGMv/cHJvZmlsZS1kZXNj/cmlwdGlvbi9Mb2dv/Xy1fb3JhbmdlXzIu/cG5nP3Y9MTcxMDE4/NDM3OA', flex: .8, paddingHorizontal: 20}}>
                </View>
                <View style={{paddingVertical: 10, marginBottom: 15, borderRadius: 25, alignItems: 'center', height: 150, backgroundImage: 'https://hunidesign.com/cdn/shop/files/logo-full_450x.svg?v=1751828627', flex: .8, paddingHorizontal: 20}}>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default WidgetListBoxes;