// purchaseService.js
const BASE_URL = 'http://192.168.100.185:8036/api/admin/purchase/';

const findAll = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching purchase data:', error);
    throw error;
  }
};

export default { findAll };
