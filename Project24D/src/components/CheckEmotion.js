import React, {useState} from 'react';
import { StyleSheet, View, Text, Flatlist } from 'react-native';

const CheckEmotions = () =>  {
    const [emotions, setEmotions] = useState([
        { name: 'Anger', key: '1' },
        { name: 'Disgust', key: '2' },
        { name: 'Envy', key: '3' },
        { name: 'Fear', key: '4' },
        { name: 'Happiness', key: '5' },
        { name: 'Jealousy', key: '6' },
        { name: 'Love', key: '7' },
        { name: 'Sadness', key: '8' },
        { name: 'Shame', key: '9' },
        { name: 'Guilt', key: '10' },
    ]);
    return (
        <View style={styles.container}>
        <Text style={styles.title}>
            Name Your Emotions
        </Text>
        <Flatlist
            data={emotions}
            renderItem={({emotion}) => (
                <Text style={styles.emotion}>
                    {emotion.name}
                </Text>
            )} 
        />
    </View>  
    );
};

export default CheckEmotions;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lavenderblush',
        flex: 1,
        alignItems:  'center',
        justifyContent: 'center'
    },
    title:{
      fontSize: 40,
      fontWeight: '600',
      fontStyle: 'italic',
      color: 'navy',
    },
    emotion:{
      flex: 1,
      marginHorizontal: 10,
      marginTop:  10,
      padding:  10,
      backgroundColor: 'mistyrose',
      fontsize: '20'
    }
});