import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import React from 'react';

const PurchaseCard = ({title, subtitle}) => {
    return (
        <SafeAreaView>
            <View style={styles.card}>
                <View style={{ alignItems: 'center', top: -40 }}>
                    <Image
                        source={require('../../assets/purchase.png')}
                        style={{ height: 120, width: 120, borderRadius: 70 }}
                    />
                </View>

                <View style={{ marginHorizontal: 20 , top: -20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>{subtitle}</Text>


                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 220,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: 'white',
    },
});

export default PurchaseCard;
