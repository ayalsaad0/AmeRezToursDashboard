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
import { getEvents } from "../data/Events";
import { Header } from "../components";
import EditorWindowTemplate from "../components/EditorWindowTemplate";
import { addEvent, deleteEvent, updateEvent } from "../data/Events";

let editor = false;
let id = 0;

const onPopupOpen = (args) => {
  if (args.scheduleObj.type === "Editor") {
    // const startTime = args.scheduleObj.data.StartTime;
    // console.log(args.scheduleObj.data.StartTime);
    // console.log(startTime.getDate());
    if (typeof args.scheduleObj.data.Id !== "undefined") {
      id = args.scheduleObj.data.Id;
      editor = true;
    }
    let statusElement = args.scheduleObj.element.querySelector("#EventType");
    statusElement.setAttribute("name", "EventType");
  }
};

const onPopupClose = (args) => {
  if (args.scheduleObj.type === "Editor") {
    if (editor) {
      if (args.scheduleObj.event.target.innerHTML === "Save")
        updateEvent(args.scheduleObj, id);
      editor = false;
      id = 0;
    } else {
      console.log(args.scheduleObj);
      if (args.scheduleObj.event.target.innerHTML === "Save")
        addEvent(args.scheduleObj);
    }
    if (args.scheduleObj.event.target.innerHTML === "Cancel")
      console.log("Cancel");
    else if (args.scheduleObj.event.target.innerHTML === "Delete")
      deleteEvent(args.scheduleObj.data.Id);
  } else if (args.scheduleObj.type === "DeleteAlert") {
    if (args.scheduleObj.event.target.ariaLabel === "Cancel")
      console.log("Cancel");
    else if (args.scheduleObj.event.target.ariaLabel === "Delete")
      deleteEvent(args.scheduleObj.data.Id);
  }
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

  // const addEvent = (scheduleObj) => {
  //   const length = scheduleObj.eventsData.length;
  // };

  // const change = (args) => {
  //   scheduleObj.selectedDate = args.value;
  //   scheduleObj.dataBind();
  // };

  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        editorTemplate={EditorWindowTemplate}
        popupOpen={(scheduleObj) => onPopupOpen({ scheduleObj })}
        popupClose={(scheduleObj) => onPopupClose({ scheduleObj })}
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        eventSettings={{ dataSource: events }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {["Day", "Week", "Month", "Agenda"].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
