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
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import FetchEvents from "../data/Events";
import { getEvents } from "../data/Events";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import TextField from "@mui/material/TextField";
// import DateTimePickerComponent from "../components/DateTimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import {
  HtmlEditor,
  Image,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import Editor from "../components/Editor";

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const events = getEvents();

  const [id, setId] = useState("");
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [categoryColor, setCategoryColor] = useState("");
  const [description, setDesciption] = useState("");

  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  const editorWindowTemplate = () => {
    return (
      <div>
        <div>
          <TextBoxComponent placeholder="Add title" floatLabelType="Auto" />
          <TextBoxComponent placeholder="Location" floatLabelType="Auto" />
          <DateTimePickerComponent placeholder="StartTime" />
          <DateTimePickerComponent placeholder="EndTime" />
          <TextBoxComponent
            multiline={true}
            placeholder="Add description"
            floatLabelType="Never"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        editorTemplate={editorWindowTemplate}
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
