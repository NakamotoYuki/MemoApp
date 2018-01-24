import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoEditScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoEditInput}>
                    <Text>Hi</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
    },
})

export default MemoEditScreen;

