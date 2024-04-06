import React , {useState} from "react";
import draggable from "react-draggable";
const Text = () => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click to Edit");
  return (
    <draggable>
      editMode ? (
        <input  onDoubleClick={e => setEditMode(false)} 
        value={val}
        onChange={e => setVal(e.target.value)}
        />
        ) : ( 
          <h1 onDoubleClick={(e) => setEditMode(true)}>{val}</h1>)
    </draggable>
  );
};

export default Text;
