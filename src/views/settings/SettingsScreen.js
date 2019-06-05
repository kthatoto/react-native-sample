import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import {
  Text, FlatList, View, Alert, StyleSheet, Dimensions, TouchableOpacity, Button
} from 'react-native'

const settingsList = [
  { iconName: 'ios-person', label: 'プロフィール設定' },
  { iconName: 'ios-analytics', label: '分析' },
  { iconName: 'ios-alarm', label: 'アラーム' }
]
class SettingsScreen extends React.Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.settingList}>
          <FlatList
            data={settingsList}
            keyExtractor={item => item.iconName}
            renderItem={({item, index}) => {
              const _styles = [styles.settingItemLabel]
              if (settingsList.length - 1 > index) {
                _styles.push(styles.settingItemLabelNotLast)
              }
              return (
                <TouchableOpacity style={styles.settingItem}>
                  <View style={styles.settingItemIcon}>
                    <Ionicons name={item.iconName} size={30} color="gray" style={{margin: 'auto'}}/>
                  </View>
                  <View style={_styles}>
                    <Text>{item.label}</Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
const iconColumnWidth = 60
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#efeff4'
  },
  settingList: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 40
  },
  settingItem: {
    flex: 1,
    flexDirection: 'row'
  },
  settingItemIcon: {
    width: iconColumnWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  settingItemLabel: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: screenWidth - iconColumnWidth,
    paddingLeft: 15
  },
  settingItemLabelNotLast: {
    borderColor: '#ccc',
    borderBottomWidth: 1
  }
})
