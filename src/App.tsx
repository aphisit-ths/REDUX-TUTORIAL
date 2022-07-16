

import OverviewPage from "./components/overview/OverviewPage";
import { useDispatch } from "react-redux";
import { updateByType } from "./state/reducers/checker";


import "./App.scss"
function App() {


  const dispatch = useDispatch()
  dispatch(updateByType())
  return (
    <div className="App">
      <OverviewPage />
    </div>

  );
}

export default App;
