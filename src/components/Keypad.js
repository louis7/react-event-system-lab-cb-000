// Code Keypad Component Here
class Keypad extends React.Component {

  keyupEvent = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      < keyUp={this.keyupEvent} input type="password"/>
    );
  }
}
