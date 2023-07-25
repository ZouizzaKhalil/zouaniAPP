import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import PurchaseCard from '../../components/PurchaseCard';
import purchaseService from '../../services/PurchaseServices';

const PurchaseList = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await purchaseService.findAll();
        setPurchases(data);
      } catch (error) {
        // Handle error, e.g., show an error message
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ marginHorizontal: 10 }}
    >

      <View style={{marginBottom: 100, marginTop: 10}}>
        {purchases.map((purchase) => (
          <PurchaseCard
            key={purchase.id}
            title={purchase.reference}
            subtitle={purchase.total}
          />
        ))}
      </View>

    </ScrollView>
  );
};

export default PurchaseList;
