import AppHeader from "./components/AppHeader";
import MenuBar from "./components/MenuBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import CreateTaskPage from "./pages/CreateTaskPage";
import DailyTaskPage from "./pages/DailyTasksPage";
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
    switch (this.state.currentPage) {
      case "Home":
        return <HomePage></HomePage>;
      case "DailyTasks":
          return <DailyTaskPage></DailyTaskPage>;
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
        <Footer></Footer>
      </div>
    );
  }
}
export default App;
