import AppHeader from "./components/AppHeader";
import MenuBar from "./components/MenuBar";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import "./styles/App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentPage: "Home",
    };
  }
  onSelectPage = (page) => {
    this.setState({ currentPage: page });
  };
  renderCurrentPage = () => {
    console.log(this.state.currentPage)
    switch (this.state.currentPage) {
      case "Home":
        return <HomePage></HomePage>;
      case "CreateTask":
        return <CreateTaskPage></CreateTaskPage>;
      default:
        return <HomePage></HomePage>;
    }
  };

  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <MenuBar onSelectPage={this.onSelectPage} activePage={this.state.currentPage}></MenuBar>
        {this.renderCurrentPage()}
      </div>
    );
  }
}
export default App;
