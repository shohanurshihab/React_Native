import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        
        
            <ImageBackground source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'
        }}
        style={styles.cardImage}
        >
        <Text style={styles.floated}>Hawa Mahal</Text>
        </ImageBackground>
        
        <View style={styles.cardBody}>
            {/* <Text style={styles.cardTitle}>Hawa Mahal</Text> */}
            <Text style={styles.cardLabel}>Pink City, jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'#984400'
    },
    card: {
        width: 400,
        height: 320,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 12,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 210,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius:6,
        justifyContent: 'flex-end'
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12

    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom:6
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#000000'
    },
    floated: {
        color: '#fff',
        paddingHorizontal: 12,
        fontSize: 26,
        fontWeight: 'bold',
        textShadowColor:'#000',
        textShadowOffset:{
            width: -0,
            height: -0
        },
        textShadowRadius: 28
        
    }  
})