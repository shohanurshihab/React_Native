import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren  } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string
    flag: string
    symbol: string
    value: number
}>
const CurrencyButton = (props: CurrencyButtonProps): React.JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.country}>{props.name}</Text>
            <Text style={styles.flag}>{props.flag}</Text>
            {/* <Text style={styles.symbol}>{props.symbol}</Text>
            <Text style={styles.value}>{props.value}</Text> */}
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: '#fff',
        marginBottom: 4
    },
    country: {
        fontSize: 18,
        color: '#2D3436',
    }
})

export default CurrencyButton