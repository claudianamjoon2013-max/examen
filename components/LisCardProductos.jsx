import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LisCardProductos = ({ nombre, descripcion, imagenUrl, stock, categoria, precio }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image 
          source={{ uri: imagenUrl || 'https://via.placeholder.com/150' }} 
          style={styles.imagenProd} 
        />
        <View style={styles.headerInfo}>
          <Text style={styles.cardTitle} numberOfLines={1}>{nombre}</Text>
          <Text style={styles.categoriaBadge}>{categoria}</Text>
        </View>
      </View>

      <Text style={styles.texto} numberOfLines={2}>DESCRIPCIÓN: {descripcion}</Text>
      
      <View style={styles.detallesRow}>
        <Text style={styles.texto}>STOCK: {stock}</Text>
        <Text style={styles.precio}>{precio}</Text>
      </View>

      <TouchableOpacity style={styles.btnCard}>
        <Text style={styles.textBtnCard}>AGREGAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    maxWidth: '59%', 
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  imagenProd: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 8,
    backgroundColor: '#e0e7ff',
  },
  headerInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  categoriaBadge: {
    fontSize: 10,
    color: 'black',
    backgroundColor: '#dbeafe',
    alignSelf: 'flex-start',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 4,
    marginTop: 2,
    overflow: 'hidden',
  },
  texto: {
    fontSize: 12,
    marginBottom: 4,
    color: '#333',
  },
  detallesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 4,
  },
  precio: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#059669',
  },
  btnCard: {
    backgroundColor: '#102abe',
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 4,
  },
  textBtnCard: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default LisCardProductos;