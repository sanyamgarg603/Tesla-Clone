import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Provider } from "react-redux";
import carReducer from "./features/car/carSlice";
import { createStore } from "redux";

function App() {
  const store = createStore(carReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
