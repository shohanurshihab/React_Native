import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  Vibration,
  View,
} from 'react-native';
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType,
  glow: boolean
}>


const Dice = ({ imageUrl, glow }: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image style={[styles.diceImage, glow ? styles.glow : null]} source={imageUrl} />
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  const [glow, setGlow] = useState<boolean>(false)

  const rollDiceOnTap = () => {
    setGlow(true)
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;

      default:
        setDiceImage(DiceOne)
        break;
    }
    // Trigger haptic feedback
    Vibration.vibrate(110);
    setTimeout(() => {
      setGlow(false)
    }, 300) // remove glow after 500ms
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} glow={glow} />
      <Pressable
        onPress={rollDiceOnTap}
      >
        <Text style={styles.rollDiceBtnText}>
          Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  glow:{
    transform: [
      {
        rotateX: '75deg',
      }
    ]
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
