import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Foto de perfil */}
        <Image
          style={styles.avatar}
          source={{ uri: 'https://via.placeholder.com/100' }} 
        />

        {/* Datos del Estudiante */}
        <Text style={styles.name}>Erick Solórzano</Text>
        <Text style={styles.carrera}>Estudiante de Ingenieria</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Carnet: 0907-25-29532</Text>
          <Text style={styles.infoText}>Correo: esolorzanoj@miumg.edu.gt</Text>
        </View>

        {/* Botón interactivo */}
        <TouchableOpacity style={styles.button} onPress={() => alert('¡Estudiante Activo!')}>
          <Text style={styles.buttonText}>Ver Estado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
    maxWidth: 350,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  carrera: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  infoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 13,
    color: '#888888',
    marginVertical: 2,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});