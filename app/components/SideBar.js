
import React from 'react'
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SideBar = ({ isVisible, children, modalBg }) => {
  return (
    
    <Modal animationType="fade" transparent={true} visible={isVisible}>
    <View style={[styles.modalContent, modalBg]}>
     
      {children}
    </View>
  </Modal>
  )
}

export default SideBar

const styles = StyleSheet.create({
    modalContent: {
      height: '100%',
      width: '70%',
      borderRadius: 20,
      position: 'absolute',
      bottom: 10,
    },
  });
  