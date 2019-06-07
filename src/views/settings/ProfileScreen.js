import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { Formik } from 'formik'

import ApiClient from '../../utils/ApiClient'

const profileItems = {
}

class ProfileScreen extends React.Component {
  updateProfile () {
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={profileItems}
          renderItem={(item, index) => {
            <View></View>
          }}
        />
      </View>
    )
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'プロフィール設定',
      headerRight: (
        <TouchableOpacity onPress={this.updateProfile}>
          <Text style={styles.headerText}>更新</Text>
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>キャンセル</Text>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold'
  }
})

export default ProfileScreen
