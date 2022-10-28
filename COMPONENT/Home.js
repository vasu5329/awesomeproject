import React from 'react';

import {View, Text, Button} from 'react-native';

class App extends React.component {
  constructor() {
    super();
    this.state = {
      data: 'some app Data',
    };
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 60}}>{this.stste.data}</Text>
      </View>
    );
  }
}
export default App;
