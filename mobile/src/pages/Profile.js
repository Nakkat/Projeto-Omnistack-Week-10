import React from 'react'
import { WebView } from 'react-native'

function Profile({ navigation }) {
    const githubUserName = navigation.getParams('github_username')`;`

    return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUserName}` }}/>
}

export default Profile;