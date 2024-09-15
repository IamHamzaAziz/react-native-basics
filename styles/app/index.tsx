import { View, Text } from 'react-native'
import React from 'react'
import InlineStyle from '@/components/InlineStyle'
import InternalStyleSheet from '@/components/InternalStyleSheet'
import ExternalStyle from '@/components/ExternalStyle'
import PersonCard from '@/components/PersonCard'

const Index = () => {
    return (
        <View>
            {/* <InlineStyle /> */}
            {/* <InternalStyleSheet /> */}
            {/* <ExternalStyle /> */}
            <PersonCard />
        </View>
    )
}

export default Index