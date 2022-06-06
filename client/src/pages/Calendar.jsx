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
import { addEvent } from "../data/Events";

const onPopupOpen = (args) => {
  if (args.scheduleObj.type === "Editor") {
    // console.log(args.scheduleObj.element);
    let statusElement = args.scheduleObj.element.querySelector("#EventType");
    statusElement.setAttribute("name", "EventType");
  }
};

const onPopupClose = (args) => {
  console.log(args.scheduleObj.type);
  if (args.scheduleObj.type === "Editor") {
    const firstKeyValue = args.scheduleObj.data;
    if (typeof args.scheduleObj.data === "object") console.log(firstKeyValue);
    else console.log("first");
    // const list_of_buttons = args.scheduleObj.element.children[2];
    // if(args.scheduleObj.data)
    // if (
    //   args.scheduleObj.data === null ||
    //   args.scheduleObj.data.Subject === "Add title"
    // ) {
    //   console.log("Nothing to add");
    // } else addEvent(args.scheduleObj);
    // console.log(args.scheduleObj);
    //   if (
    //     ["Add", "Save", "EditSeries", "EditOccurrence"].indexOf(
    //       args.scheduleObj.currentAction
    //     ) > -1
    //   ) {
    //     console.log("first");
    //   } else if (args.scheduleObj.currentAction === null) {
    //     // Handle the code if "cancel" button is clicked.
    //   }
    // cancel -> target: undefined
    // save -> target: div.e-appointment.e-lib.e-draggable
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

  // const addEvent = (scheduleObj) => {
  //   const length = scheduleObj.eventsData.length;
  // };

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
        popupOpen={(scheduleObj) => onPopupOpen({ scheduleObj })}
        popupClose={(scheduleObj) => onPopupClose({ scheduleObj })}
        height="650px"
        ref={(schedule) => setScheduleObj(schedule)}
        eventSettings={{ dataSource: events }}
        dragStart={onDragStart}
      >
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
