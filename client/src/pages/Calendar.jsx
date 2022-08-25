import React, { useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Month,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { Header } from "../components";
import EditorWindowTemplate from "../components/EditorWindowTemplate";
import { getEvents, addEvent, deleteEvent, updateEvent } from "../data/Events";

let editor = false;
let id = 0;

// A function which handles the popup open
const onPopupOpen = (args) => {
  if (args.scheduleObj.type === "Editor") {
    if (typeof args.scheduleObj.data.Id !== "undefined") {
      id = args.scheduleObj.data.Id;
      editor = true;
    }
    let statusElement = args.scheduleObj.element.querySelector("#EventType");
    statusElement.setAttribute("name", "EventType");
  }
};

// A function which handles the popup close
const onPopupClose = (args) => {
  // The window is the editor
  if (args.scheduleObj.type === "Editor") {
    // update event
    if (editor) {
      // if the save button was clicked
      if (args.scheduleObj.event.target.innerHTML === "Save")
        updateEvent(args.scheduleObj, id);
      editor = false;
      id = 0;
    }
    // add event
    else {
      // if the save button was clicked
      if (args.scheduleObj.event.target.innerHTML === "Save")
        addEvent(args.scheduleObj);
    }
    // if the cancel button was clicked
    if (args.scheduleObj.event.target.innerHTML === "Cancel")
      console.log("Cancel");
    // if the delete button was clicked
    else if (args.scheduleObj.event.target.innerHTML === "Delete")
      deleteEvent(args.scheduleObj.data.Id);
  }
  // The window is the delete alert
  else if (args.scheduleObj.type === "DeleteAlert") {
    // if the cancel button was clicked
    if (args.scheduleObj.event.target.ariaLabel === "Cancel")
      console.log("Cancel");
    // if the delete button was clicked
    else if (args.scheduleObj.event.target.ariaLabel === "Delete")
      deleteEvent(args.scheduleObj.data.Id);
  }
};

// This is the calendar page
const Scheduler = () => {
  const events = getEvents();

  const [scheduleObj, setScheduleObj] = useState();

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
      >
        <ViewsDirective>
          {["Day", "Week", "Month"].map((item) => (
            <ViewDirective key={item} option={item} />
          ))}
        </ViewsDirective>
        <Inject services={[Day, Week, Month]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
