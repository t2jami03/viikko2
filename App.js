import React, { useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet, BackHandler } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleBackButton = () => {
    if (modalVisible) {
      setModalVisible(false);
      return true;
    }
    return false;
  };

  // Add back button event listener
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => backHandler.remove();
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <Text style={styles.showModalText}>Show modal message</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Modal Content</Text>
          <Pressable style={styles.closeButton} onPress={handleClose}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showModalText: {
    fontSize: 18,
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

export default App;