import { View, Text, Image} from "react-native";
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

interface WidgetBoxProps {
    boxUri: string;
    color: string;
}


const WidgetBox = ({boxUri, color}: WidgetBoxProps) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flexDirection: 'column', alignItems: 'center'}}>
                <View style={{
                    marginBottom: 15,
                    borderRadius: 25,
                    height: 120,
                    width: '90%',
                    backgroundColor: color,
                    overflow: 'hidden',
                    alignItems: 'center'
                }}>
                    <Image
                        style={{
                            height: '100%',
                            width: '90%',
                        }}
                        resizeMode='contain'
                        source={{uri: boxUri}}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default WidgetBox