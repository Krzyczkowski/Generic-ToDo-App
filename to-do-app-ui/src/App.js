import HomePage from './pages/HomePage';
import './styles/App.css';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      tasks:[]
    }
  }

    render() {
      return(
      <div className="App">
             <HomePage></HomePage>
  
      </div>
      );
    }
  
}
export default App;
