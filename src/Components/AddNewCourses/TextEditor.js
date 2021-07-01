import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

export default function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("Enter Course Outline");
  const config = {
    readonly: false,
    height: 400
  };
  const handleUpdate = (event) => {
      console.log(event)
    const editorContent = event;
    setContent(editorContent);
  };

  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {}}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </div>
  );
}