import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { PRODUCTS_LIST } from '../data/constants'
import Seperator from '../components/Seperator'
import ProductItem from '../components/ProductItem'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const filteredList = PRODUCTS_LIST.filter(item =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search'
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>

      <FlatList
      data={filteredList}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Seperator}
      renderItem={({item}) => (
        <Pressable
        onPress={() => {navigation.navigate('Details', {product: item})}}
        >
          <ProductItem product={item}/>
        </Pressable>
      )}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    left:'2%',
    padding: 5,
    margin: 10,
    width: "90%",
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50,
    borderColor:'#777',
    borderWidth:1,
  },
})