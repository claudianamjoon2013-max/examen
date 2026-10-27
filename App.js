import { useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavbarProductos } from './components/NavbarProductos';
import LisCardProductos from './components/LisCardProductos';

export default function App() {
  const [visibleModal, setVisibleModal] = useState(false);

  const [nombreProd, setNombreProd] = useState("");
  const [descripcionProd, setDescripcionProd] = useState("");
  const [imagenUrlProd, setImagenUrlProd] = useState("");
  const [stockProd, setStockProd] = useState("");
  const [categoriaProd, setCategoriaProd] = useState("");
  const [precioProd, setPrecioProd] = useState("");

  const [listProductos, setListProductos] = useState([
    { 
      id: 1, 
      nombre: 'Laptop ', 
      descripcion: 'Laptop de alto rendimiento', 
      imagenUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500', 
      stock: '12', 
      categoria: 'Tecnología', 
      precio: '3.500.000' 
    },
    { 
      id: 2, 
      nombre: 'Audífonos ', 
      descripcion: 'Cancelación de ruido', 
      imagenUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', 
      stock: '25', 
      categoria: 'Accesorios', 
      precio: '250.000' 
    },
     { 
      id: 2, 
      nombre: 'Audífonos ', 
      descripcion: 'Cancelación de ruido', 
      imagenUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', 
      stock: '25', 
      categoria: 'Accesorios', 
      precio: '250.000' 
    },
     { 
      id: 2, 
      nombre: 'Audífonos para gamers ', 
      descripcion: 'Cancelación de ruido', 
      imagenUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', 
      stock: '25', 
      categoria: 'Accesorios', 
      precio: '250.000' 
    },
  ]);

  const saveDataProductos = () => {
    if (nombreProd === "" || stockProd === "" || precioProd === "") {
      return;
    }

    setListProductos([
      ...listProductos,
      {
        id: Date.now(),
        nombre: nombreProd,
        descripcion: descripcionProd,
        imagenUrl: imagenUrlProd || 'https://via.placeholder.com/150',
        stock: stockProd,
        categoria: categoriaProd,
        precio: precioProd
      }
    ]);

    setNombreProd("");
    setDescripcionProd("");
    setImagenUrlProd("");
    setStockProd("");
    setCategoriaProd("");
    setPrecioProd("");
    setVisibleModal(false);
  };

  return (
    <View style={styles.container}>
      <NavbarProductos />
      
      <View style={styles.containerList}>
        <FlatList
          data={listProductos}
          key="2" 
          numColumns={2} 
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={() => (
            <Text>No hay productos registrados.</Text>
          )}
          renderItem={({ item }) => (
            <LisCardProductos 
              nombre={item.nombre} 
              descripcion={item.descripcion} 
              imagenUrl={item.imagenUrl}
              stock={item.stock}
              categoria={item.categoria}
              precio={item.precio}
            />
          )}
        />
      </View>

      <Pressable
        onPress={() => setVisibleModal(!visibleModal)}
        style={styles.newRegister}>
        <Text style={styles.TextnewRegister}>+</Text>
      </Pressable>

      <Modal
        visible={visibleModal}
        animationType='slide'
      >
        <View style={{ flex: 1, backgroundColor: '#EEF2FF' }}>
          <View style={styles.headerModal}>
            <Text style={styles.textTitleModal}>Nuevo Producto</Text>
            <Pressable
              onPress={() => setVisibleModal(!visibleModal)}>
              <Text style={styles.textTitleModal}>X</Text>
            </Pressable>
          </View>
          
          <View style={styles.bodyFormClients}>
            <View style={styles.formControl}>
              <Text>Nombre</Text>
              <TextInput 
                style={styles.inputText}
                placeholder='Nombre del producto'
                value={nombreProd}
                onChangeText={setNombreProd}
              />
            </View>

            <View style={styles.formControl}>
              <Text>Descripción</Text>
              <TextInput 
                style={styles.inputText}
                placeholder='Descripción'
                value={descripcionProd}
                onChangeText={setDescripcionProd}
              />
            </View>

            <View style={styles.formControl}>
              <Text>Imagen (URL)</Text>
              <TextInput 
                style={styles.inputText}
                placeholder='https://ejemplo.com/imagen.jpg'
                value={imagenUrlProd}
                onChangeText={setImagenUrlProd}
              />
            </View>

            <View style={styles.formControl}>
              <Text>Stock</Text>
              <TextInput 
                style={styles.inputText}
                placeholder='Cantidad en stock'
                keyboardType='numeric'
                value={stockProd}
                onChangeText={setStockProd}
              />
            </View>

            <View style={styles.formControl}>
              <Text>Categoría</Text>
              <TextInput 
                style={styles.inputText}
                placeholder='Categoría'
                value={categoriaProd}
                onChangeText={setCategoriaProd}
              />
            </View>

            <View style={styles.formControl}>
              <Text>Precio</Text>
              <TextInput 
                style={styles.inputText}
                placeholder='Precio'
                value={precioProd}
                onChangeText={setPrecioProd}
              />
            </View>

            <Pressable
              onPress={saveDataProductos}
              style={styles.btnSaveData}>
              <Text style={styles.textBtnSaveData}>GUARDAR PRODUCTO</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
  },
  containerList: {
    flex: 1,
    padding: 6,
  },
  newRegister: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextnewRegister: {
    color: 'white',
    fontSize: 36,
  },
  headerModal: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#102abe',
    alignItems: 'center',
    paddingTop: 20
  },
  textTitleModal: {
    color: 'white',
    fontSize: 18
  },
  bodyFormClients: {
    padding: 20,
    flex: 1,
    backgroundColor: '#EEF2FF'
  },
  formControl: {
    marginTop: 8
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#102abe',
    backgroundColor: '#fff',
    height: 38,
    borderRadius: 8,
    paddingLeft: 8,
    marginTop: 2
  },
  btnSaveData: {
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: '#102abe',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  textBtnSaveData: {
    color: 'white',
    fontWeight: 'bold'
  }
});