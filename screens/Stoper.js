import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {View} from 'react-native';
import { globalStyles } from "../styles/global";

import StopWatch from "../stopwatch/StoperFinalny";

export default function Stoper(props){
    const navigation = useNavigation();
    return(<View style={globalStyles.stoper}>
    <StopWatch/>
    </View>
    )
}