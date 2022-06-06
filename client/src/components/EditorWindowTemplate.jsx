import React, { useState } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";

const EditorWindowTemplate = (props) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [categoryColor, setCategoryColor] = useState("");
  const [description, setDesciption] = useState("");

  return props !== undefined ? (
    <table
      className="custom-event-editor"
      style={{ width: "100%", cellpadding: "5" }}
    >
      <tbody>
        <tr>
          <td className="e-textlabel">Summary</td>
          <td colSpan={4}>
            <input
              id="Summary"
              className="e-field e-input"
              type="text"
              name="Subject"
              style={{ width: "100%" }}
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Status</td>
          <td colSpan={4}>
            <DropDownListComponent
              id="EventType"
              placeholder="Choose status"
              data-name="EventType"
              className="e-field"
              style={{ width: "100%" }}
              dataSource={["New", "Requested", "Confirmed"]}
              value={props.EventType || null}
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">From</td>
          <td colSpan={4}>
            <DateTimePickerComponent
              format="dd/MM/yy hh:mm a"
              id="StartTime"
              data-name="StartTime"
              value={new Date(props.startTime || props.StartTime)}
              className="e-field"
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">To</td>
          <td colSpan={4}>
            <DateTimePickerComponent
              format="dd/MM/yy hh:mm a"
              id="EndTime"
              data-name="EndTime"
              value={new Date(props.endTime || props.EndTime)}
              className="e-field"
            />
          </td>
        </tr>
        <tr>
          <td className="e-textlabel">Reason</td>
          <td colSpan={4}>
            <textarea
              id="Description"
              className="e-field e-input"
              name="Description"
              rows={3}
              cols={50}
              style={{
                width: "100%",
                height: "60px !important",
                resize: "vertical",
              }}
            />
          </td>
        </tr>
        <tr>
          <button>Save</button>
          <button>Delete</button>
        </tr>
      </tbody>
    </table>
  ) : (
    <div />
  );
};

export default EditorWindowTemplate;
