import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    BackHandler
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


const handleExit = () => {
    BackHandler.exitApp();
};

const CustomDrawer = props => {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#232b2b' }}>
                <ImageBackground
                    //source={require('../../../assets/s2c.png')}
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../../../assets/splash.png')}
                        style={{ height: 70, width: 70 }}
                    />

                    <View style={{ flexDirection: 'row' }}>



                        <View>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                }}>
                                purchase-front1
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ padding: 10, borderTopWidth: 1, borderTopColor: '#ccc' }}>

                <TouchableOpacity onPress={handleExit} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                marginLeft: 5,
                            }}>
                            Exit
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
};

export default CustomDrawer;



