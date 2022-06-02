import React, { useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { L10n } from "@syncfusion/ej2-base";
import { getEvents } from "../data/Events";
import { Header } from "../components";
import EditorWindowTemplate from "../components/EditorWindowTemplate";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

const onPopupOpen = (args) => {
  if (args.type === "Editor") {
    let statusElement = args.element.querySelector("#EventType");
    statusElement.setAttribute("name", "EventType");
  }
};

const onPopupClose = (args, { scheduleObj }) => {
  if (args.type === "Editor") {
    if (
      ["Add", "Save", "EditSeries", "EditOccurrence"].indexOf(
        this.scheduleObj.currentAction
      ) > -1
    ) {
      console.log("first");
    } else if (this.scheduleObj.currentAction === null) {
      // Handle the code if "cancel" button is clicked.
    }
  }
};

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const handleClick = () => {
  console.log("first");
};

// L10n.load({
//   "en-US": {
//     schedule: {
//       saveButton: "Add",
//       cancelButton: "Close",
//       deleteButton: "Remove",
//       newEvent: "Add Event",
//     },
//     onsubmit: handleClick,
//   },
// });

const Scheduler = () => {
  const events = getEvents();

  const [scheduleObj, setScheduleObj] = useState();

  const addEvent = (scheduleObj) => {
    const length = scheduleObj.eventsData.length;
    console.log(scheduleObj[length - 1]);
  };

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        editorTemplate={EditorWindowTemplate}
        popupOpen={onPopupOpen}
        popupClose={(scheduleObj) => onPopupClose({ scheduleObj })}
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        eventSettings={{ dataSource: events }}
        dragStart={onDragStart}
      >
        {console.log(scheduleObj)}
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
