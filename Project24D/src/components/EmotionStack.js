import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CheckEmotions from './CheckEmotion';

const Stack = createNativeStackNavigator();

const EmotionStack = () => {
    return  (
        <NavigationContainer>   
            <Stack.Navigator>
                <Stack.Screen
                    name='Emotion Checkin'
                    component={CheckEmotions}
                    options={{title: 'Emotion Check-in'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default EmotionStack;
