import { Provider } from "react-redux";
import { store } from "./state";
import ReduxToolkits from "./components/ReduxToolkits";
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search dude</h1>
        <ReduxToolkits />
      </div>
    </Provider>

  );
}

export default App;
