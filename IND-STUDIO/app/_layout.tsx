
import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Paradoxe",
                }}
                />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "TrendtVision",
                }}
                />
            <Tabs.Screen
                name="center"
                options={{
                        title: "Huni",
                    }}
                />
            </Tabs>
    )
}

export default _layout