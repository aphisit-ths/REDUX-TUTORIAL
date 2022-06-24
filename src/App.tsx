

import OverviewPage from "./components/overview/OverviewPage";
import { useDispatch } from "react-redux";
import { updateByType } from "./state/reducers/checker";
import { AmountByType } from "./components/overview/credit-amout";
import React, { useState } from "react";
import { InputForm } from "./components/overview/inputform";
import "./App.scss"
function App() {
  const [toggle, setToggle] = useState(false)

  const dispatch = useDispatch()
  dispatch(updateByType())
  return (
    <div className="App">
      <button onClick={() => setToggle(true)}>Add subject</button>
      {toggle && <InputForm setToggle={setToggle} />}
      <OverviewPage />
      <AmountByType />
    </div>

  );
}

export default App;
