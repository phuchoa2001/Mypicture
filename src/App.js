import Home from "./page";
import './Global.css';
import './resetcss.css';
import './gird.css';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Home />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
