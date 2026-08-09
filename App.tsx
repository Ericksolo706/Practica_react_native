import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// Interface para definir el tipo de datos del estudiante
interface StudentData {
  name: string;
  role: string;
  idNumber: string;
  email: string;
  avatarUrl: string;
}

// Datos de la tarjeta
const studentInfo: StudentData = {
  name: 'Juan Pérez',
  role: 'Estudiante de Desarrollo Web',
  idNumber: '2026-8942',
  email: 'juan.perez@email.com',
  avatarUrl: 'https://via.placeholder.com/100',
};

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* Contenedor de la Tarjeta */}
      <View style={styles.card}>
        <Image
          source={{ uri: studentInfo.avatarUrl }}
          style={styles.avatar}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{studentInfo.name}</Text>
          <Text style={styles.role}>{studentInfo.role}</Text>
          <Text style={styles.detail}>ID: {studentInfo.idNumber}</Text>
          <Text style={styles.detail}>Correo: {studentInfo.email}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '100%',
    maxWidth: 350,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
    marginBottom: 12,
  },
  detail: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
  },
});