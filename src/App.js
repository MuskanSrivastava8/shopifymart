import "./App.css";
import Home from "./Component/Home/Home";
import { Provider } from "react-redux";
import { store } from "./Store/index";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      < Home/>
      </Provider>
    </div>
  );
}

export default App;
