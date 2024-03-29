import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, CheckBox, Alert } from 'react-native';

const girisEkrani = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email === '' || password === ''){
      Alert.alert('Error', 'Kullanıcı adı veya şifre yanlış', [{text: 'OK'}]);
    } else {
      Alert.alert('Giriş Başarılı', 'Giriş Yapıldı', [{text:'OK'}]);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giris Ekranı</Text>
      <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={text => setEmail(text)}
      placeholderTextColor="gray"
      />
      
      <TextInput
      style={styles.input}
      placeholder="Şifre"
      secureTextEntry
      value={password}
      onChangeText={text => setPassword(text)}
      placeholderTextColor="gray"
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
        style={styles.checbox}
        value={rememberMe}
        onValueChange={() => setRememberMe(!rememberMe)}
        />
        <Text style={styles.checkboxText}>Beni Hatirla</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <View style={styles.buttonFrame}>
            <Text style={styles.buttonText}>Giris Yap</Text>
          </View>
        </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#C7C8CC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign:'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    color: 'white',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#000000',
    padding: 0,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonFrame: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxText: {
    color: 'black',
    marginLeft: 10,
  },
});

export default girisEkrani;