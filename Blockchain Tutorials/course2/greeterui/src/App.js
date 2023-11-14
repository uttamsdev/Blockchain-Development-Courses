import logo from './logo.svg';
import './App.css';
import { greeterContract } from './EthereumSetup';

function App() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     greeting = ""
  //   }
  // }

  // componentWillMount() {
  //   var data = greeterContract.greet()
  //   this.setState({
  //     greeting: String(data)
  //   })
  // }

  console.log(greeterContract);
  return (
    <div className="App">
      <h2>data is: {this?.state?.greeting}</h2>
    </div>
  );
}

export default App;
