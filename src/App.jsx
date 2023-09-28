import { BryntumScheduler } from "@bryntum/scheduler-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [crudManagerConfig] = useState({
    loadUrl: "data.json",
    autoLoad: true,
  });

  const [columnsConfig] = useState([
    { text: "Name", field: "name", width: 130 },
    { text: "Age", field: "age", width: 75 },
  ]);

  return (
    <>
      <BryntumScheduler
        height={600}
        viewPreset="hourAndDay"
        startDate={new Date(2024, 2, 20, 6)}
        endDate={new Date(2024, 2, 20, 20)}
        crudManager={crudManagerConfig}
        columns={columnsConfig}
      />
    </>
  );
}

export default App;
