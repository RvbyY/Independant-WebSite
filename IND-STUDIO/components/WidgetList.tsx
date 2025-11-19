import { View, Text, Image} from "react-native";
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const WidgetListBoxes = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flexDirection: 'column', alignItems: 'center'}}>
                <View style={{
                    marginBottom: 15,
                    borderRadius: 25,
                    height: 120,
                    width: '90%',
                    backgroundColor: '#000',
                    overflow: 'hidden',
                    alignItems: 'center'
                }}>
                    <Image
                        style={{
                            height: '100%',
                            width: '90%',
                        }}
                        resizeMode='contain'
                        source={{uri: 'https://paradoxeparis.com/cdn/shop/files/logo_site_paradoxe.png?v=1688402629&width=135'}}
                    />
                </View>
                <View style={{
                    marginBottom: 15,
                    borderRadius: 25,
                    height: 120,
                    width: '90%',
                    backgroundColor: '#fff',
                    overflow: 'hidden',
                    alignItems: 'center'
                }}>
                    <Image
                        style={{
                            height:'100%',
                            width: '90%',
                        }}
                        resizeMode="contain"
                        source={{uri: 'https://imgs.search.brave.com/pW3lXeot0E9tU1GQ7M7EMwFkfPCNuXfaNUKZH7rQ4VM/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/dHJ1c3RwaWxvdC5u/ZXQvY29uc3VtZXJz/aXRlLWJ1c2luZXNz/dW5pdGltYWdlcy82/NGE5OTAwNWE5Njkw/ODUwMDc3YWFlNGMv/cHJvZmlsZS1kZXNj/cmlwdGlvbi9Mb2dv/Xy1fb3JhbmdlXzIu/cG5nP3Y9MTcxMDE4/NDM3OA'}}
                    />
                </View>
                <View style={{
                    marginBottom: 15,
                    borderRadius: 25,
                    height: 120,
                    width: '90%',
                    backgroundColor: '#615e5eff',
                    overflow: 'hidden',
                    alignItems: 'center'
                }}>
                    <Image
                        style={{
                            height: '100%',
                            width: '90%'
                        }}
                        resizeMode="contain"
                        source={{uri: 'https://hunidesign.com/cdn/shop/files/logo-full_450x.svg?v=1751828627'}}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default WidgetListBoxes;