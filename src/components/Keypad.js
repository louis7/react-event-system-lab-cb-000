// Code Keypad Component Here
class Keypad extends React.Component {

  keyupEvent = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      < onKeyUp={this.keyupEvent} input type="password"/>
    );
  }
}
