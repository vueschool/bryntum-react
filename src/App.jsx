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

  const [accessGranted] = useState(true);

  function handleEventMenuBeforeShow({ items }) {
    if (!accessGranted) {
      items.editEvent = false;
      items.deleteEvent = false;
      items.unassignEvent = false;
    }
  }

  return (
    <>
      <BryntumScheduler
        height={600}
        viewPreset="hourAndDay"
        startDate={new Date(2024, 2, 20, 6)}
        endDate={new Date(2024, 2, 20, 20)}
        crudManager={crudManagerConfig}
        columns={columnsConfig}
        timeAxisHeaderMenuFeature={{
          items: {
            dateRange: {
              text: "Start/End",
              weight: 190,
              style: {
                background: "blue",
              },
            },
          },
        }}
        onEventMenuBeforeShow={handleEventMenuBeforeShow}
        eventMenuFeature={{
          items: {
            moveForward: {
              icon: "b-fa b-fa-caret-right",
              text: "Move 1 hour ahead",
              cls: "b-separator", // Add a visual line above the item
              weight: 400, // Add the item to the bottom
              onItem: ({ eventRecord }) => {
                eventRecord.shift(1, "hour");
              },
            },
          },
        }}
      />
    </>
  );
}

export default App;
