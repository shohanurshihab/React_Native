import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import FlatCards from "./component/FlatCards";
import ElevatedCards from "./component/ElevatedCards";
import FancyCard from "./component/FancyCard";
import ActionCard from "./component/ActionCard";
import ContactList from "./component/ContactList";

function App(){
  return(
    <SafeAreaView style= {styles.uiBody}>
    <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>
    </ScrollView>
  </SafeAreaView> 
  )
}
const styles = StyleSheet.create({
  uiBody: {
    backgroundColor: '#FFF9F1'
  }
})
export default App;