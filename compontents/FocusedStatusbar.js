import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const FocusedStatusbar = (props) => {
    const isFocused =  useIsFocused();
  return isFocused? <StatusBar animated={true} {...props}/> : null
} 

export default FocusedStatusbar