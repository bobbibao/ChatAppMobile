import React from "react";
import { Platform, KeyboardAvoidingView, SafeAreaView, Text } from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import Fire from "../Fire";

export default class ChatScreen extends React.Component {
    state = {
      messages: []
  }
  get user() {
      return {
        _id: Fire.uid,
        name: this.props.navigation.state.params.name
      }
  }

  componentDidMount(){
    Fire.get(message => 
      this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message)
    }))
  );
}

  componentWillUnmount(){
    Fire.off();
  }

  render(){
    const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;
      if (Platform.OS === 'ios' ){
        return (
          <KeyboardAvoidingView style={{flex: 1}} behavior ="padding" keyboardVerticalOffset={30} enabled>
                {chat}
          </KeyboardAvoidingView>
        );
      }
      if (Platform.OS === 'android' ){
        return (
          <KeyboardAvoidingView style={{flex: 1}} behavior ="padding" keyboardVerticalOffset={30} enabled>
                {chat}
          </KeyboardAvoidingView>
        );
      }
      return (<SafeAreaView style={{ flex:1 }}> {chat}  </SafeAreaView>   );
  }
}