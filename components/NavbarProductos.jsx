import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export function NavbarProductos() {
  return (
    <View style={styles.titleListProducts}>
      <Text style={styles.titleListProduct}>Catálogo de Productos</Text>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar producto..."
          placeholderTextColor="#888"
          editable={false} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleListProducts: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102abe',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  titleListProduct: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 14,
    color: '#333',
  },
});