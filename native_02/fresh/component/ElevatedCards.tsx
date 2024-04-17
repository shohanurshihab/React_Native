import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
    <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.cardText}>Swipe</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.cardText}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.cardText}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.cardText}>See</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.cardText}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>😊</Text>
        </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'#777'  
    },
    container: {
        padding: 0,
        // backgroundColor: '#CAD5F7'
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin:20,
        
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 20,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor: '#333',
        shadowOpacity:0.4,
        shadowRadius: 2
    },
    cardText: {
        color:'#000000'
    }
})