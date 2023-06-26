import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { NativeFormsModal } from 'native-forms';

const Feedback = () => {
  const [hasForm, showForm] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="связаться с нами" onPress={() => showForm(true)} color="#20f"  />
      <NativeFormsModal
        visible={hasForm}
        form="https://form.nativeforms.com/I2Z5xWPmZic4JlRvpmNy0Db"
        onClose={() => showForm(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    left: 0, bottom:0,
    zIndex:100,
  },
});

export default Feedback;