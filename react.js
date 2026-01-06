import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: 'Pencil Box', price: 5, image: '📦' },
    { id: 2, name: 'Water Bottle', price: 8, image: '💧' }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏫 School Shop</Text>
      
      {products.map(item => (
        <View key={item.id} style={styles.product}>
          <Text style={styles.emoji}>{item.image}</Text>
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => addToCart(item)}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      ))}
      
      <View style={styles.cart}>
        <Text style={styles.cartTitle}>🛒 Cart ({cart.length} items)</Text>
        
        {cart.length === 0 ? (
          <Text style={styles.empty}>Cart is empty</Text>
        ) : (
          cart.map((item, index) => (
            <Text key={index} style={styles.cartItem}>
              {item.image} {item.name} - ${item.price}
            </Text>
          ))
        )}
        
        {cart.length > 0 && (
          <>
            <Text style={styles.total}>Total: ${total}</Text>
            <TouchableOpacity 
              style={styles.clearButton}
              onPress={clearCart}>
              <Text style={styles.clearText}>Clear Cart</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f8ff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  product: { flexDirection: 'row', backgroundColor: 'white', padding: 15, 
            borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  emoji: { fontSize: 30, marginRight: 15 },
  details: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'green' },
  button: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontWeight: 'bold' },
  cart: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginTop: 20 },
  cartTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  empty: { color: 'gray', textAlign: 'center', margin: 10 },
  cartItem: { fontSize: 16, marginBottom: 5 },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10, color: 'blue' },
  clearButton: { backgroundColor: '#ff4444', padding: 10, borderRadius: 5, marginTop: 10 },
  clearText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
});

