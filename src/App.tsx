import { Provider } from "react-redux";
import { store } from "./state";
import ReduxToolkits from "./components/ReduxToolkits";
import { RepositoriesList } from "./components/RepositoriesList"
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search dude</h1>
        <ReduxToolkits />
        {/* <RepositoriesList></RepositoriesList> */}
      </div>
    </Provider>

  );
}

export default App;
