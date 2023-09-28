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

  const [eventEditConfig] = useState({
    items: {
      // Custom field to edit notes about the event
      noteField: {
        // Type of field to use
        type: "textarea",
        // Label to show for the field
        label: "Notes",
        // Name of the field in the event record to read/write data to
        // NOTE: Make sure your EventModel has this field for this to link up correctly
        name: "note",
      },
    },
  });

  function handleBeforeEventEditShow({ editor, eventRecord }) {
    const noteField = editor.widgetMap.noteField;
    noteField.hidden = eventRecord.name === "Right click me";
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
        eventEditFeature={eventEditConfig}
        onBeforeEventEditShow={handleBeforeEventEditShow}
      />
    </>
  );
}

export default App;
